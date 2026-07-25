# 🛡️ CyberSentry (Powered by Opsera)
### **Agentic DevSecOps Orchestrator & Dark Web Threat Intelligence Engine**

Architected by **Narendra Darla**  
*Built for the You.com AI Hackathon (July 2026)*

[![Live Demo](https://img.shields.io/badge/Live_App-Render-00D1B2?style=for-the-badge&logo=render)](https://youhackathon.onrender.com/)
[![You.com API](https://img.shields.io/badge/You.com-Threat_Intel_API-108ee9?style=for-the-badge)](https://you.com)
[![Agno Framework](https://img.shields.io/badge/Agno-50%2B_Swarm_Agents-722ed1?style=for-the-badge)](https://agno.com)
[![LlamaIndex](https://img.shields.io/badge/LlamaIndex-RAG_%26_Context-13c2c2?style=for-the-badge)](https://llamaindex.ai)
[![Replit Sandbox](https://img.shields.io/badge/Replit-Sandbox_Testing-f5222d?style=for-the-badge)](https://replit.com)

---

## 📖 Table of Contents
1. [Overview & Problem Statement](#-overview--problem-statement)
2. [The Solution: CyberSentry](#-the-solution-cybersentry)
3. [Architecture & 50+ Swarm Agent Mesh](#-architecture--50-swarm-agent-mesh)
4. [Key Partner Integrations](#-key-partner-integrations)
5. [Live Product Showcase](#-live-product-showcase)
6. [Getting Started & Local Setup](#-getting-started--local-setup)
7. [License & Acknowledgments](#-license--acknowledgments)

---

## 💥 Overview & Problem Statement

Modern enterprise cybersecurity toolchains are **fragmented**. When zero-day vulnerabilities or credential leaks occur:
- **Alert Fatigue:** Security teams juggle dozens of disconnected scanners and monitoring tools.
- **Engineering Intelligence Loss:** Critical contextual insights are lost in static log dumps.
- **Multi-Week Remediation:** Resolving a single CVE from detection to verified PR takes weeks.

---

## ⚡ The Solution: CyberSentry

**CyberSentry** is an enterprise-grade, autonomous DevSecOps orchestrator that unifies threat detection, context engineering, automated patch synthesis, and sandbox verification into a single seamless loop.

```
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│  Dark Web & CVE Intel  │ ───► │  RAG & Code Vectorization│ ───► │ Sandbox Patch Testing  │
│     (You.com API)      │      │      (LlamaIndex)      │      │      (Replit API)      │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
                                                                            │
                                                                            ▼
                                                                ┌────────────────────────┐
                                                                │ Autonomous Action & PR │
                                                                │     (Pica Actions)     │
                                                                └────────────────────────┘
```

---

## 🏗️ Architecture & 50+ Swarm Agent Mesh

CyberSentry executes **52 concurrent autonomous agents** powered by **Agno (Phidata)**:

```
                  ┌────────────────────────────────────────────────────────┐
                  │          🎛️ CYBERSENTRY ORCHESTRATION ENGINE          │
                  └───────────────────────────┬────────────────────────────┘
                                              │
         ┌──────────────────┬─────────────────┼──────────────────┬──────────────────┐
         ▼                  ▼                 ▼                  ▼                  ▼
┌──────────────────┐┌────────────────┐┌────────────────┐┌────────────────┐┌──────────────────┐
│🔍 INGESTION SWARM││🧠 RAG MESH     ││🛠️ REPAIR SWARM ││⚡ ACTION DISPATCH││🐕 CYBERDOG SNIFFER│
│   (15 Agents)    ││   (15 Agents)  ││   (15 Agents)  ││   (5+ Agents)  ││   (Dark Web)     │
│  CVE & Git Crawl ││  AST Vectorizer││ Sandbox Repair ││ PR & Slack Bot ││  Breach Scanner  │
└──────────────────┘└────────────────┘└────────────────┘└────────────────┘└──────────────────┘
```

### Swarm Breakdown:
1. **Ingestion & Intel Swarm (15 Agents):** Parses zero-day CVE advisories and fetches live threat payloads via **You.com Search & News APIs**.
2. **Context & RAG Mesh (15 Agents):** Performs AST code chunking and vector indexing via **LlamaIndex** to pinpoint vulnerable source code lines.
3. **Patch & Sandbox Swarm (15 Agents):** Generates zero-day patches and verifies regression safety inside isolated **Replit API** sandboxes.
4. **Action & PR Dispatcher (5+ Agents):** Triggers autonomous GitHub Pull Requests and Slack alerts via **Pica Actions** with SME human-in-the-loop validation.
5. **CyberDog Dark Web Monitor:** Sniffs deep web forums, pastebins, and dark web markets for exposed employee email credentials.

---

## 🛠️ Key Partner Integrations

| Partner / Tool | Integration Details |
| :--- | :--- |
| **You.com API** | Deep Web Threat Intelligence, live CVE advisory parsing, and Dark Web credential correlation. |
| **Agno (Phidata)** | Core multi-agent framework orchestrating the 50+ concurrent agent mesh and state telemetry. |
| **LlamaIndex** | Codebase AST vectorization, repository RAG indexing, and context engineering. |
| **Replit API** | Isolated ephemeral sandbox container for compiling and executing automated code patches. |
| **Pica** | Autonomous agentic action webhooks executing GitHub PRs and Slack notifications. |

---

## 🎬 Live Product Showcase

- 🌐 **Live Deployed Application:** [https://youhackathon.onrender.com/](https://youhackathon.onrender.com/)
- 🎥 **Video Demo Recording:** [`frontend/public/demo_you.mov`](https://github.com/shreekrithi1/youhackathon/raw/main/frontend/public/demo_you.mov)

---

## 💻 Getting Started & Local Setup

### Prerequisites
- Node.js >= 18
- Python >= 3.9

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shreekrithi1/youhackathon.git
   cd youhackathon
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

---

## 👤 Author & Credits

- **Architect & Lead Developer:** Narendra Darla
- **Platform:** Opsera Agentic DevSecOps Architecture
- **Hackathon:** You.com AI Hackathon (July 2026)

---
*Built with ❤️ for enterprise-grade autonomous security.*
