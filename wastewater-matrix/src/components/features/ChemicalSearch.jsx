import React, { useState, useMemo, useEffect } from 'react'
import { chemicalsAndPipes } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { Search, AlertTriangle, FileText, Settings, Database, Server } from 'lucide-react'

/* ==========================================================================
   ALGORITHM DESIGN: TRIE PREFIX SEARCH & HASHMAP FILTERING
   - A Trie is initialized to index plant assets (Chemicals & Pipes) by words.
   - For every character keystroke, search is performed on the Trie prefix tree.
   - A HashMap is maintained to filter duplicates and resolve types instantly.
   ========================================================================== */

class TrieNode {
  constructor() {
    this.children = {}
    this.items = [] // Holds references to compatible mockData items
  }
}

class PrefixTrie {
  constructor() {
    this.root = new TrieNode()
  }

  // Insert a text string prefix indexing path linked to the source item
  insert(word, item) {
    let current = this.root
    const cleanWord = word.toLowerCase().trim()
    
    for (let char of cleanWord) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
      // Cache item reference at this prefix level for instant prefix matching
      if (!current.items.some(existing => existing.id === item.id)) {
        current.items.push(item)
      }
    }
  }

  // Traverses Trie to locate items matching the input prefix query
  search(prefix) {
    let current = this.root
    const cleanPrefix = prefix.toLowerCase().trim()

    for (let char of cleanPrefix) {
      if (!current.children[char]) {
        return [] // Path dead, prefix does not exist
      }
      current = current.children[char]
    }
    return current.items
  }
}

// Escapes special characters to prevent RegExp runtime injection failures
const escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function ChemicalSearch() {
  const [query, setQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState('all') // 'all' | 'chemical' | 'pipe'
  const [selectedItem, setSelectedItem] = useState(null)

  // 1. Instantiate and index the Trie once at load time
  const indexTrie = useMemo(() => {
    const trie = new PrefixTrie()
    chemicalsAndPipes.forEach(item => {
      // Index by full name
      trie.insert(item.name, item)
      // Index by individual name words
      const parts = item.name.split(/\s+/)
      parts.forEach(part => trie.insert(part, item))
      // Index by unique Ref ID
      trie.insert(item.id, item)
      // Index by location
      const locParts = item.location.split(/\s+/)
      locParts.forEach(lp => trie.insert(lp, item))
    })
    return trie
  }, [])

  // 2. Perform real-time Trie traversal filtering
  const results = useMemo(() => {
    let matched = []
    
    if (!query.trim()) {
      // Empty query shows all elements (HashMap fallbacks)
      matched = chemicalsAndPipes
    } else {
      // Trie search returns matches sharing the word/prefix
      matched = indexTrie.search(query)
    }

    // Filter results by the active tab category
    if (selectedTab !== 'all') {
      matched = matched.filter(item => item.type === selectedTab)
    }

    return matched
  }, [query, selectedTab, indexTrie])

  // Helper to render text with highlighted matching characters
  const renderHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text
    const escapedHighlight = escapeRegExp(highlight)
    const regex = new RegExp(`(${escapedHighlight})`, 'gi')
    const parts = text.split(regex)

    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <span key={index} style={styles.highlightText}>{part}</span>
          ) : (
            part
          )
        )}
      </span>
    )
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case 'NOMINAL':
      case 'FLOWING':
        return 'active'
      case 'LOW_STOCK':
      case 'ISOLATED':
        return 'warning'
      case 'DEPLETED':
      case 'LEAKING':
      default:
        return 'danger'
    }
  }

  return (
    <>
      <style>{`
        .scada-search-container {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-search-container {
            flex-direction: column;
          }
        }

        /* Search input with blinking cursor custom colors */
        .scada-search-input {
          width: 100%;
          padding: 14px 18px;
          font-family: var(--font-mono);
          font-size: 14px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          caret-color: var(--accent-cyan);
          outline: none;
          transition: all var(--transition-fast);
        }

        .scada-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
        }

        /* Tabs styling */
        .scada-search-tabs {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-4);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2px;
        }

        .search-tab-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: var(--space-2) var(--space-4);
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          letter-spacing: 0.05em;
        }

        .search-tab-btn:hover {
          color: var(--accent-cyan);
        }

        .search-tab-btn.active {
          color: var(--accent-cyan);
          border-bottom-color: var(--accent-cyan);
          text-shadow: var(--shadow-glow-cyan);
        }

        /* Results container */
        .scada-results-viewport {
          max-height: 60vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-4);
          padding-right: 6px;
        }

        /* Result card with left border hover highlights */
        .scada-result-card {
          border-left: 3px solid transparent !important;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scada-result-card:hover {
          border-left-color: var(--accent-cyan) !important;
          background-color: var(--bg-secondary) !important;
        }

        .scada-result-card.selected {
          border-left-color: var(--accent-cyan) !important;
          background-color: rgba(0, 212, 255, 0.04) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
        }

        /* Detail panel sliding transition */
        .scada-detail-panel {
          position: sticky;
          top: 0;
          flex: 1.5;
          min-width: 320px;
          animation: slideRight var(--transition-normal) forwards;
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="animate-slide-in scada-search-container">
        {/* Search Input & Results List */}
        <div style={{ flex: 2.5, width: '100%' }}>
          <Card>
            {/* Search Input bar */}
            <input
              type="text"
              className="scada-search-input"
              placeholder="ENTER TRANSCEIVER OR CHEMICAL SEARCH QUERY (e.g. Chlor, Pipeline)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />

            {/* Filter Tabs */}
            <div className="scada-search-tabs">
              <button 
                className={`search-tab-btn ${selectedTab === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTab('all')}
              >
                All Assets
              </button>
              <button 
                className={`search-tab-btn ${selectedTab === 'chemical' ? 'active' : ''}`}
                onClick={() => setSelectedTab('chemical')}
              >
                Chemicals
              </button>
              <button 
                className={`search-tab-btn ${selectedTab === 'pipe' ? 'active' : ''}`}
                onClick={() => setSelectedTab('pipe')}
              >
                Pipelines
              </button>
            </div>

            {/* Results Count */}
            <div style={styles.counterRow}>
              <span className="font-mono">{results.length} telemetry records matching query.</span>
            </div>

            {/* Scrollable List */}
            <div className="scada-results-viewport">
              {results.length > 0 ? (
                results.map(item => {
                  const isSelected = selectedItem && selectedItem.id === item.id
                  const isChemical = item.type === 'chemical'

                  return (
                    <div 
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                    >
                      <Card
                        className={`scada-result-card ${isSelected ? 'selected' : ''}`}
                        style={{ padding: 'var(--space-3) var(--space-4)' }}
                      >
                        <div style={styles.cardLayout}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={styles.itemTitle}>
                                {renderHighlightedText(item.name, query)}
                              </span>
                              <Badge label={item.type} variant={isChemical ? 'info' : 'inactive'} />
                            </div>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '11px', color: 'var(--text-secondary)' }}>
                              <span className="font-mono">ID: {renderHighlightedText(item.id, query)}</span>
                              <span>LOC: {renderHighlightedText(item.location, query)}</span>
                            </div>
                          </div>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                            <Badge label={item.status} variant={getStatusVariant(item.status)} />
                            <span style={styles.metricVal}>{item.concentration}</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                })
              ) : (
                <div style={styles.emptyState}>
                  <AlertTriangle size={36} style={{ color: 'var(--accent-yellow)', marginBottom: '12px' }} />
                  <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>No Matches Registered</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '4px', maxWidth: '380px' }}>
                    No chemical agents or pipelines match the query "{query}". Double-check spelling or switch filter tabs.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Selected Details Side Panel */}
        {selectedItem && (
          <div className="scada-detail-panel">
            <Card 
              title="Asset Audit Panel" 
              icon={<Database size={16} />} 
              glowColor="cyan"
              style={{ position: 'sticky', top: 'var(--header-height)' }}
            >
              <div style={styles.detailBody}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '18px', color: 'var(--accent-cyan)' }}>{selectedItem.name}</h2>
                  <Badge label={selectedItem.type} variant={selectedItem.type === 'chemical' ? 'info' : 'inactive'} />
                </div>

                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Reference Key</span>
                  <span style={styles.detailVal} className="font-mono">{selectedItem.id}</span>
                </div>

                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Location Index</span>
                  <span style={styles.detailVal}>{selectedItem.location}</span>
                </div>

                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Status Indicators</span>
                  <Badge label={selectedItem.status} variant={getStatusVariant(selectedItem.status)} />
                </div>

                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>
                    {selectedItem.type === 'chemical' ? 'Concentration Rate' : 'Section TSS / Flow'}
                  </span>
                  <span style={{ ...styles.detailVal, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {selectedItem.concentration}
                  </span>
                </div>

                <div style={styles.memoBox}>
                  <Server size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                    Active telemetry loop registered. Audit logs confirm standard sensor transmission is nominal for this sector grid.
                  </p>
                </div>

                <Button variant="ghost" onClick={() => setSelectedItem(null)} style={{ width: '100%', marginTop: '10px' }}>
                  Close Inspector
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}

const styles = {
  counterRow: {
    padding: '8px 4px',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '11px',
    color: 'var(--text-secondary)',
  },
  cardLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  itemTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  metricVal: {
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-cyan)',
    fontWeight: '700',
  },
  highlightText: {
    color: 'var(--accent-cyan)',
    textShadow: 'var(--shadow-glow-cyan)',
    fontWeight: '800',
    backgroundColor: 'rgba(0, 212, 255, 0.15)',
    padding: '0 2px',
    borderRadius: '2px',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '60px var(--space-4)',
    backgroundColor: 'var(--bg-primary)',
    border: '1px dashed var(--border-color)',
    borderRadius: 'var(--radius-sm)',
  },
  detailBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '8px',
  },
  detailLabel: {
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  detailVal: {
    color: 'var(--text-primary)',
    fontWeight: '700',
  },
  memoBox: {
    display: 'flex',
    gap: '10px',
    backgroundColor: 'rgba(0, 212, 255, 0.02)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px',
    marginTop: '6px',
  }
}

export default ChemicalSearch
