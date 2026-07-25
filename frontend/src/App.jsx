import React, { useState, useEffect, useRef } from 'react';

function PitchDeck({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const slideRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goTo = (index) => {
    const nextIndex = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentSlide(nextIndex);
    if (slideRef.current) {
      const slides = slideRef.current.querySelectorAll('.slide');
      if (slides[nextIndex]) {
        slides[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const next = () => goTo(currentSlide + 1);
  const prev = () => goTo(currentSlide - 1);

  const handleClick = (e) => {
    if (e.target.closest('a, button, .close-btn')) return;
    const clientX = e.clientX;
    if (clientX > window.innerWidth * 0.65) next();
    else if (clientX < window.innerWidth * 0.35) prev();
    else next();
  };

  return (
    <div className="pitch-overlay" onClick={handleClick}>
      <button className="close-btn" onClick={onClose}>Exit Pitch Demo</button>
      
      <div className="pitch-progress" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
      <div className="pitch-hint">Tap or click to advance · left edge to go back</div>

      <div className="slides-container" ref={slideRef}>
        <section className="slide">
          <div className="slide-inner">
            <h1>Security toolchains are <em>fragmented.</em></h1>
            <p className="sub">Engineering Intelligence is lost. Vulnerabilities take weeks to orchestrate.</p>
          </div>
          <div className="slide-footer">
            <span className="footer-brand">Powered by Opsera</span>
            <span className="footer-count">1 / 4</span>
          </div>
        </section>

        <section className="slide">
          <div className="slide-inner">
            <h1 style={{ marginBottom: '3rem' }}><em>Opsera Agentic Security</em></h1>
            <div className="tech-grid" style={{ gap: '3rem', maxWidth: '1000px' }}>
              <div className="tech-item">
                <img src="/logos/agno.svg" alt="Agno" className="tech-logo" />
                <span className="tech-name">Agno (Phidata)</span>
                <span className="tech-role">Multi-Agent Orchestrator</span>
              </div>
              <div className="tech-item">
                <img src="/logos/you.svg" alt="You.com" className="tech-logo" />
                <span className="tech-name">You.com API</span>
                <span className="tech-role">Deep Web Threat Intel</span>
              </div>
              <div className="tech-item">
                <img src="/logos/llama.svg" alt="LlamaIndex" className="tech-logo" />
                <span className="tech-name">LlamaIndex</span>
                <span className="tech-role">RAG & Context Engineering</span>
              </div>
              <div className="tech-item">
                <img src="/logos/replit.svg" alt="Replit" className="tech-logo" />
                <span className="tech-name">Replit API</span>
                <span className="tech-role">Secure Patch Sandbox</span>
              </div>
              <div className="tech-item">
                <img src="/logos/pica.svg" alt="Pica" className="tech-logo" />
                <span className="tech-name">Pica API</span>
                <span className="tech-role">Agentic Actions & Webhooks</span>
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <span className="footer-brand">Powered by Opsera</span>
            <span className="footer-count">2 / 4</span>
          </div>
        </section>

        <section className="slide slide-final">
          <div className="slide-inner">
            <p className="sub" style={{ fontSize: '1.25rem' }}>
              <span style={{ display: 'block', fontSize: '1.5em', marginTop: '0.5rem', color: 'var(--text-muted)' }}>Architected by</span>
              <strong style={{ fontSize: '4em', color: 'var(--primary)', display: 'block', marginTop: '1.5rem', lineHeight: '1.1' }}>Narendra Darla</strong>
            </p>
          </div>
          <div className="slide-footer">
            <span className="footer-brand">Powered by Opsera</span>
            <span className="footer-count">3 / 4</span>
          </div>
        </section>

        <section className="slide slide-final">
          <div className="slide-inner">
            <div style={{ marginTop: '3rem' }}>
              <button className="button pulse" onClick={(e) => { e.stopPropagation(); onClose(); }}>Go to Live Demo →</button>
            </div>
          </div>
          <div className="slide-footer">
            <span className="footer-brand">Powered by Opsera</span>
            <span className="footer-count">4 / 4</span>
          </div>
        </section>
      </div>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [repoInput, setRepoInput] = useState('https://github.com/enterprise-org/payment-gateway');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      onLogin(repoInput);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-brand">Opsera</h1>
        <p className="auth-subtitle">Agentic DevSecOps Orchestrator</p>
        
        <div className="auth-form">
          <label>Target Repository</label>
          <input 
            type="text" 
            className="input-field" 
            value={repoInput} 
            onChange={(e) => setRepoInput(e.target.value)}
            placeholder="https://github.com/org/repo"
          />
          
          <button 
            className={`button github-btn ${isConnecting ? 'disabled' : ''}`}
            onClick={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <span className="loading-spinner"></span>
            ) : (
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: '12px'}}>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            )}
            {isConnecting ? 'Authenticating...' : 'Connect with GitHub'}
          </button>
        </div>
        
        <p className="auth-footer">Secure OAuth 2.0 Integration. Read-only repository access.</p>
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('threats'); // 'threats', 'cyberdog', 'pitch'
  const [cyberDogEmail, setCyberDogEmail] = useState('');
  const [isCyberDogActive, setIsCyberDogActive] = useState(false);
  const [cyberDogLogs, setCyberDogLogs] = useState([]);
  const [repoUrl, setRepoUrl] = useState('');
  
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [mockMode, setMockMode] = useState(true);
  
  const [logs, setLogs] = useState([]);
  const [defects, setDefects] = useState([]);
  const [expandedDefectId, setExpandedDefectId] = useState(null);
  const [monitorTimer, setMonitorTimer] = useState(null);

  const [threatHunterRot, setThreatHunterRot] = useState(0);
  const [patchArchitectRot, setPatchArchitectRot] = useState(0);
  const [adminLogs, setAdminLogs] = useState([]);

  const [metrics, setMetrics] = useState({
    you: { calls: 0, cost: 0.00 },
    llama: { tokens: 0, cost: 0.00 },
    agno: { steps: 0, cost: 0.00 },
    replit: { minutes: 0, cost: 0.00 },
    pica: { webhooks: 0, cost: 0.00 }
  });

  const handleLogin = (url) => {
    setRepoUrl(url);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (isMonitoring && isAuthenticated) {
      const intervalMs = mockMode ? 60000 : 30 * 60 * 1000;
      const intervalId = setInterval(() => {
        triggerVulnerabilityScan();
      }, intervalMs);
      setMonitorTimer(intervalId);
      return () => clearInterval(intervalId);
    } else {
      if (monitorTimer) clearInterval(monitorTimer);
    }
  }, [isMonitoring, mockMode, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const rotInterval = setInterval(() => {
      setThreatHunterRot(prev => Math.min(prev + (Math.random() * 2), 100));
      setPatchArchitectRot(prev => Math.min(prev + (Math.random() * 2.5), 100));
    }, 5000);
    return () => clearInterval(rotInterval);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!mockMode || !isAuthenticated) return;
    
    const smeInterval = setInterval(() => {
      setAdminLogs(prev => [
        ...prev, 
        `[SME_MONITOR] Logic drift detected in sub-agents. Halting orchestrator execution.`
      ]);
      
      setTimeout(() => {
        setAdminLogs(prev => [
          ...prev, 
          `[SME_INTERVENTION] Loop constraints enforced. Brain Rot indices reset to nominal levels.`
        ]);
        setThreatHunterRot(0);
        setPatchArchitectRot(0);
      }, 1500);
    }, 60000);
    
    return () => clearInterval(smeInterval);
  }, [mockMode, isAuthenticated]);

  useEffect(() => {
    if (!isCyberDogActive || !cyberDogEmail) return;
    setCyberDogLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), text: `[INIT] CyberDog sniffing deep web for ${cyberDogEmail}...`, isAlert: false }]);
    
    const interval = setInterval(() => {
      const sources = ['Pastebin Dump', 'Telegram Channel', 'BreachForums', 'Genesis Market', 'Russian DarkNet Market'];
      const isBreach = Math.random() > 0.6;
      if (isBreach) {
        const source = sources[Math.floor(Math.random() * sources.length)];
        setCyberDogLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), text: `[ALERT] Email found in ${source}. Correlated with recent 2026 data leak.`, isAlert: true }]);
      } else {
        setCyberDogLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), text: `[SCAN] Checking sub-forums... Clear.`, isAlert: false }]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isCyberDogActive, cyberDogEmail]);

  const toggleMonitor = () => {
    if (!isMonitoring) {
      setLogs(prev => [...prev, `[SYSTEM_INIT] Monitoring active on ${repoUrl}`]);
      triggerVulnerabilityScan();
    } else {
      setLogs(prev => [...prev, '[SYSTEM_HALT] Monitoring suspended.']);
    }
    setIsMonitoring(!isMonitoring);
  };

  const triggerVulnerabilityScan = async () => {
    setLogs(prev => [...prev, `[THREAT_HUNTER] Initiating zero-day analysis...`]);
    
    setTimeout(() => {
      const newDefectId = `VULN-${Math.floor(Math.random() * 10000)}`;
      setLogs(prev => [...prev, `[CRITICAL_ALERT] Threat found: ${newDefectId}`]);
      
      const newDefect = {
        id: newDefectId,
        cve: "CVE-2026-1024",
        package: "express",
        severity: "High",
        status: "Pending Review",
        rca: "The express library version < 4.19.2 is susceptible to prototype pollution via the query parser.",
        resolution: "Patch Architect recommends upgrading express to version 4.19.2 and migrating any legacy body-parser middleware.",
        mrLink: "https://github.com/shreekrithi1/youhackathon/compare/main...patch/CVE-2026-1024?expand=1"
      };
      
      setDefects(prev => [newDefect, ...prev]);
      
      setMetrics(m => ({
        ...m,
        you: { calls: m.you.calls + 1, cost: m.you.cost + 0.05 },
        agno: { steps: m.agno.steps + 3, cost: m.agno.cost + 0.02 },
        llama: { tokens: m.llama.tokens + 1024, cost: m.llama.cost + 0.03 }
      }));
    }, 2000);
  };

  const rolloutPatch = (defectId) => {
    setLogs(prev => [...prev, `[HITL_APPROVE] Rollout authorized for ${defectId}. Initializing Sandbox.`]);
    
    setTimeout(() => {
      setLogs(prev => [...prev, `[SANDBOX_EXEC] Test Suite: PASSED. Constructing Merge Request.`]);
      setMetrics(m => ({ ...m, replit: { minutes: m.replit.minutes + 1, cost: m.replit.cost + 0.01 } }));
    }, 2000);

    setTimeout(() => {
      setLogs(prev => [...prev, `[ORCHESTRATOR] MR Merged. Slack Webhook fired.`]);
      setMetrics(m => ({ ...m, pica: { webhooks: m.pica.webhooks + 2, cost: m.pica.cost + 0.005 } }));
      
      setDefects(prev => prev.map(d => 
        d.id === defectId ? { ...d, status: 'Patched' } : d
      ));
    }, 4000);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (activeTab === 'pitch') {
    return <PitchDeck onClose={() => setActiveTab('threats')} />;
  }

  return (
    <div className="layout">
      {/* Enterprise Header */}
      <header className="top-nav">
        <div className="brand">
          <div className="brand-logo"></div>
          <span className="brand-name">Opsera Agentic Security</span>
        </div>
        <div className="nav-tabs">
          <button 
            className={`tab-link ${activeTab === 'threats' ? 'active' : ''}`}
            onClick={() => setActiveTab('threats')}
          >
            Threat Dashboard
          </button>
          <button 
            className={`tab-link ${activeTab === 'cyberdog' ? 'active' : ''}`}
            onClick={() => setActiveTab('cyberdog')}
          >
            CyberDog Monitor
          </button>
          <button 
            className="tab-link tab-pitch"
            onClick={() => setActiveTab('pitch')}
          >
            Pitch Demo
          </button>
        </div>
      </header>

      <main className="main-content">
        {activeTab === 'threats' && (
          <React.Fragment>
            <div className="dashboard-grid">
              
              {/* LEFT COLUMN: Controls */}
              <div className="panel data-panel">
                <div className="panel-header">
                  <h3>System Configuration</h3>
                </div>
                <div className="panel-body">
                  <label className="data-label">Authorized Repository Target</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={repoUrl} 
                    disabled
                  />
                  <div className="form-row">
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={mockMode} 
                        onChange={(e) => setMockMode(e.target.checked)} 
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="toggle-text">Mock Mode (1 min interval)</span>
                  </div>
                  <button 
                    className={`btn-primary ${isMonitoring ? 'btn-danger' : ''}`}
                    onClick={toggleMonitor}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    {isMonitoring ? 'Suspend Monitoring' : 'Initialize Monitoring'}
                  </button>
                  
                  <div className="status-block">
                    <span className="data-label">Daemon Status</span>
                    <div className={`status-indicator ${isMonitoring ? 'active' : 'offline'}`}>
                      <span className="dot"></span>
                      {isMonitoring ? 'ACTIVE (Listening)' : 'OFFLINE'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* MIDDLE COLUMN: Terminal */}
              <div className="panel terminal-panel">
                <div className="panel-header">
                  <h3>Runtime Execution Logs</h3>
                </div>
                <div className="terminal-window">
                  {logs.length === 0 ? (
                    <div className="log-line text-muted">&gt; System initialized. Awaiting processes...</div>
                  ) : (
                    logs.map((log, i) => (
                      <div key={i} className="log-line">
                        <span className="timestamp">{new Date().toISOString().split('T')[1].slice(0, -1)}Z</span> <span className="log-msg">{log}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Telemetry */}
              <div className="panel data-panel">
                <div className="panel-header">
                  <h3>API Telemetry <span className="badge-outline">No Cost (Mock)</span></h3>
                </div>
                <div className="panel-body">
                  <div className="telemetry-table">
                    <div className="t-row t-header">
                      <span>Provider</span>
                      <span className="t-right">Usage</span>
                      <span className="t-right">Cost</span>
                    </div>
                    <div className="t-row">
                      <span>You.com</span>
                      <span className="t-right">{metrics.you.calls} req</span>
                      <span className="t-right">${metrics.you.cost.toFixed(3)}</span>
                    </div>
                    <div className="t-row">
                      <span>LlamaIndex</span>
                      <span className="t-right">{metrics.llama.tokens} tkn</span>
                      <span className="t-right">${metrics.llama.cost.toFixed(3)}</span>
                    </div>
                    <div className="t-row">
                      <span>Agno (Agents)</span>
                      <span className="t-right">{metrics.agno.steps} stp</span>
                      <span className="t-right">${metrics.agno.cost.toFixed(3)}</span>
                    </div>
                    <div className="t-row">
                      <span>Replit (Sandbox)</span>
                      <span className="t-right">{metrics.replit.minutes} min</span>
                      <span className="t-right">${metrics.replit.cost.toFixed(3)}</span>
                    </div>
                    <div className="t-row">
                      <span>Pica (Actions)</span>
                      <span className="t-right">{metrics.pica.webhooks} hk</span>
                      <span className="t-right">${metrics.pica.cost.toFixed(3)}</span>
                    </div>
                    <div className="t-row t-total">
                      <span>Total Expenditure</span>
                      <span className="t-right"></span>
                      <span className="t-right t-highlight">${(metrics.you.cost + metrics.llama.cost + metrics.agno.cost + metrics.replit.cost + metrics.pica.cost).toFixed(3)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM SECTIONS */}
          <div className="panel data-panel mt-6">
            <div className="panel-header">
              <h3>Active Threat Incidents</h3>
            </div>
            <div className="data-table-container">
              {defects.length === 0 ? (
                <div className="empty-state">No incidents detected in current session.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Identifier</th>
                      <th>Target Package</th>
                      <th>Severity</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {defects.map(defect => (
                      <React.Fragment key={defect.id}>
                        <tr className={expandedDefectId === defect.id ? 'expanded-row-active' : ''}>
                          <td className="font-mono">{defect.cve}</td>
                          <td>{defect.package}</td>
                          <td>
                            <span className={`status-dot ${defect.severity === 'High' ? 'dot-red' : 'dot-yellow'}`}></span>
                            {defect.severity}
                          </td>
                          <td>
                            <span className={`status-badge ${defect.status === 'Patched' ? 'badge-success' : 'badge-warning'}`}>
                              {defect.status}
                            </span>
                          </td>
                          <td>
                            <button className="btn-text" onClick={() => setExpandedDefectId(expandedDefectId === defect.id ? null : defect.id)}>
                              {expandedDefectId === defect.id ? 'Close Details' : 'View Details'}
                            </button>
                          </td>
                        </tr>
                        {expandedDefectId === defect.id && (
                          <tr className="details-row">
                            <td colSpan="5">
                              <div className="details-content">
                                <div className="detail-grid">
                                  <div>
                                    <span className="data-label">Root Cause Analysis</span>
                                    <p className="detail-text">{defect.rca}</p>
                                  </div>
                                  <div>
                                    <span className="data-label">Resolution Plan</span>
                                    <p className="detail-text">{defect.resolution}</p>
                                  </div>
                                </div>
                                
                                <div className="detail-actions">
                                  <a href={defect.mrLink} className="link-external" target="_blank" rel="noopener noreferrer">View Merge Request ↗</a>
                                  
                                  {defect.status === 'Pending Review' && (
                                    <button className="btn-primary" onClick={() => rolloutPatch(defect.id)}>
                                      Authorize Patch Rollout
                                    </button>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          </React.Fragment>
        )}

        {activeTab === 'cyberdog' && (
          <div className="cyberdog-container">
            <div className="panel data-panel">
              <div className="panel-header" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em' }}>🐕</span> CyberDog Dark Web Monitor
                </h3>
              </div>
              <div className="panel-body">
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <input 
                    type="email" 
                    className="input-field" 
                    placeholder="Enter email to monitor (e.g. narendra@enterprise.com)"
                    value={cyberDogEmail}
                    onChange={(e) => setCyberDogEmail(e.target.value)}
                    style={{ flex: 1 }}
                    disabled={isCyberDogActive}
                  />
                  <button 
                    className={`btn-primary ${isCyberDogActive ? 'btn-danger' : ''}`}
                    onClick={() => setIsCyberDogActive(!isCyberDogActive)}
                    disabled={!cyberDogEmail}
                  >
                    {isCyberDogActive ? 'Stop Monitoring' : 'Start Monitoring'}
                  </button>
                </div>
                
                <div className="terminal-window" style={{ minHeight: '400px' }}>
                  {cyberDogLogs.length === 0 ? (
                    <div className="log-line text-muted">&gt; Ready. Enter an email and initiate scan...</div>
                  ) : (
                    cyberDogLogs.map((log, i) => (
                      <div key={i} className="log-line">
                        <span className="timestamp">{log.time}</span> <span className="log-msg" style={{ color: log.isAlert ? '#ff4d4f' : '#a8b2d1' }}>{log.text}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
