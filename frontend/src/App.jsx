import React, { useState, useEffect } from 'react';

function App() {
  const [repoUrl, setRepoUrl] = useState('https://github.com/enterprise-org/payment-gateway');
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [mockMode, setMockMode] = useState(true); // true = 1 min, false = 30 min
  const [logs, setLogs] = useState([]);
  const [defects, setDefects] = useState([]);
  const [expandedDefectId, setExpandedDefectId] = useState(null);
  const [timer, setTimer] = useState(null);

  // Simulated API Usage state
  const [metrics, setMetrics] = useState({
    you: { calls: 0, cost: 0.00 },
    llama: { tokens: 0, cost: 0.00 },
    agno: { steps: 0, cost: 0.00 },
    replit: { minutes: 0, cost: 0.00 },
    pica: { webhooks: 0, cost: 0.00 }
  });

  // Polling mechanism
  useEffect(() => {
    if (isMonitoring) {
      // If Mock mode, 60 seconds. If Prod, 30 minutes (1800 seconds)
      const intervalMs = mockMode ? 60000 : 30 * 60 * 1000;
      
      const intervalId = setInterval(() => {
        triggerVulnerabilityScan();
      }, intervalMs);
      
      setTimer(intervalId);
      return () => clearInterval(intervalId);
    } else {
      if (timer) clearInterval(timer);
    }
  }, [isMonitoring, mockMode]);

  const toggleMonitor = () => {
    if (!isMonitoring) {
      setLogs(prev => [...prev, `[SYSTEM] Started continuous monitoring for ${repoUrl}`]);
      // Trigger one immediately upon start
      triggerVulnerabilityScan();
    } else {
      setLogs(prev => [...prev, '[SYSTEM] Monitoring paused.']);
    }
    setIsMonitoring(!isMonitoring);
  };

  const triggerVulnerabilityScan = async () => {
    setLogs(prev => [...prev, `[SYSTEM] Running routine threat scan on ${repoUrl}...`]);
    
    // Simulate finding a vulnerability
    setTimeout(() => {
      const newDefectId = `VULN-${Math.floor(Math.random() * 10000)}`;
      
      setLogs(prev => [...prev, `[ALERT] Vulnerability detected: ${newDefectId} (High Severity)`]);
      
      const newDefect = {
        id: newDefectId,
        cve: "CVE-2024-" + Math.floor(1000 + Math.random() * 9000),
        package: "express",
        severity: "High",
        status: "Pending Review",
        rca: "The express library version < 4.19.2 is susceptible to prototype pollution via the query parser.",
        resolution: "Patch Architect recommends upgrading express to version 4.19.2 and migrating any legacy body-parser middleware.",
        mrLink: `https://github.com/enterprise-org/payment-gateway/pull/${Math.floor(100 + Math.random() * 900)}`
      };
      
      setDefects(prev => [newDefect, ...prev]);
      
      // Simulate Metric hits for the background analysis
      setMetrics(m => ({
        ...m,
        you: { calls: m.you.calls + 1, cost: m.you.cost + 0.05 },
        agno: { steps: m.agno.steps + 3, cost: m.agno.cost + 0.02 },
        llama: { tokens: m.llama.tokens + 1024, cost: m.llama.cost + 0.03 }
      }));
    }, 2000);
  };

  const rolloutPatch = (defectId) => {
    setLogs(prev => [...prev, `[HITL] Human approved rollout for ${defectId}. Triggering Sandbox & Action Layer...`]);
    
    // Simulate Sandbox & Pica action
    setTimeout(() => {
      setLogs(prev => [...prev, `[REPLIT] Sandbox Test Result: PASSED. Deploying PR...`]);
      setMetrics(m => ({ ...m, replit: { minutes: m.replit.minutes + 1, cost: m.replit.cost + 0.01 } }));
    }, 2000);

    setTimeout(() => {
      setLogs(prev => [...prev, `[PICA] Action Executed: PR Merged & Slack Alert Sent.`]);
      setMetrics(m => ({ ...m, pica: { webhooks: m.pica.webhooks + 2, cost: m.pica.cost + 0.005 } }));
      
      setDefects(prev => prev.map(d => 
        d.id === defectId ? { ...d, status: 'Patched' } : d
      ));
    }, 4000);
  };

  const getSeverityBadgeClass = (severity) => {
    if (severity === 'High') return 'badge-high';
    if (severity === 'Medium') return 'badge-medium';
    return 'badge-low';
  };

  const getStatusBadgeClass = (status) => {
    if (status === 'Pending Review') return 'badge-pending';
    if (status === 'Patched') return 'badge-patched';
    return '';
  };

  return (
    <div className="container">
      <div className="glass-card full-width-card">
        <h1>CyberSentry</h1>
        <p className="subtitle">Autonomous SecOps Threat Patching & Defense Engine</p>
        
        <div className="dashboard-grid">
          {/* Left Column: Controls */}
          <div className="panel action-panel">
            <h3>Monitoring Target</h3>
            <p>Provide a repository to continuously monitor against live zero-day threats.</p>
            
            <input 
              type="text" 
              className="input-field" 
              value={repoUrl} 
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/org/repo"
            />

            <div className="toggle-group">
              <label className="toggle-label">
                <input 
                  type="checkbox" 
                  checked={mockMode} 
                  onChange={(e) => setMockMode(e.target.checked)} 
                />
                Mock Mode (Poll every 1 min)
              </label>
            </div>

            <button 
              className={`button ${isMonitoring ? 'btn-stop' : ''}`}
              onClick={toggleMonitor}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Continuous Monitor'}
            </button>
            <div className={`status-indicator ${isMonitoring ? 'processing' : 'idle'}`}>
              Monitor Status: {isMonitoring ? 'ACTIVE (Polling)' : 'OFFLINE'}
            </div>
          </div>
          
          {/* Middle Column: Logs */}
          <div className="panel console-panel">
            <h3>Execution Logs</h3>
            <div className="terminal-window">
              {logs.length === 0 ? (
                <div className="log-line text-muted">Awaiting events...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="log-line">
                    <span className="timestamp">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: API Usage Metrics */}
          <div className="panel metrics-panel">
            <h3>API Telemetry</h3>
            
            <div className="metric-row">
              <span className="metric-label">You.com (Search)</span>
              <div className="metric-data">
                <span className="val">{metrics.you.calls} queries</span>
                <span className="cost">${metrics.you.cost.toFixed(3)}</span>
              </div>
            </div>

            <div className="metric-row">
              <span className="metric-label">LlamaIndex (RAG)</span>
              <div className="metric-data">
                <span className="val">{metrics.llama.tokens.toLocaleString()} tkns</span>
                <span className="cost">${metrics.llama.cost.toFixed(3)}</span>
              </div>
            </div>

            <div className="metric-row">
              <span className="metric-label">Agno (Agents)</span>
              <div className="metric-data">
                <span className="val">{metrics.agno.steps} steps</span>
                <span className="cost">${metrics.agno.cost.toFixed(3)}</span>
              </div>
            </div>

            <div className="metric-row">
              <span className="metric-label">Replit (Sandbox)</span>
              <div className="metric-data">
                <span className="val">{metrics.replit.minutes} min</span>
                <span className="cost">${metrics.replit.cost.toFixed(3)}</span>
              </div>
            </div>

            <div className="metric-row">
              <span className="metric-label">Pica (Actions)</span>
              <div className="metric-data">
                <span className="val">{metrics.pica.webhooks} hooks</span>
                <span className="cost">${metrics.pica.cost.toFixed(3)}</span>
              </div>
            </div>
            
            <div className="total-cost">
              Total Run Cost: ${(metrics.you.cost + metrics.llama.cost + metrics.agno.cost + metrics.replit.cost + metrics.pica.cost).toFixed(3)}
            </div>
          </div>
        </div>

        {/* Bottom Section: Defect List */}
        <div className="defect-section">
          <h2>Active Threats & Defects</h2>
          <div className="defect-list">
            {defects.length === 0 ? (
              <p className="text-muted" style={{textAlign: 'center', padding: '2rem'}}>No defects detected.</p>
            ) : (
              defects.map(defect => (
                <div key={defect.id} className="defect-item">
                  <div 
                    className="defect-header" 
                    onClick={() => setExpandedDefectId(expandedDefectId === defect.id ? null : defect.id)}
                  >
                    <div className="defect-title">
                      <strong>{defect.cve}</strong> - {defect.package}
                      <span className={`badge ${getSeverityBadgeClass(defect.severity)}`}>{defect.severity}</span>
                    </div>
                    <div className="defect-status">
                      <span className={`badge ${getStatusBadgeClass(defect.status)}`}>{defect.status}</span>
                      <span className="expand-icon">{expandedDefectId === defect.id ? '▼' : '▶'}</span>
                    </div>
                  </div>
                  
                  {expandedDefectId === defect.id && (
                    <div className="defect-details">
                      <div className="detail-row">
                        <strong>Defect / RCA:</strong> <p>{defect.rca}</p>
                      </div>
                      <div className="detail-row">
                        <strong>Resolution Plan:</strong> <p>{defect.resolution}</p>
                      </div>
                      <div className="detail-row">
                        <strong>GitHub MR:</strong> <a href={defect.mrLink} target="_blank" rel="noopener noreferrer">{defect.mrLink}</a>
                      </div>
                      
                      {defect.status === 'Pending Review' && (
                        <div className="hitl-actions">
                          <p className="hitl-warning">Human-in-the-Loop Review Required</p>
                          <button className="button pulse" onClick={() => rolloutPatch(defect.id)}>
                            🚀 Approve & Rollout Patch
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
