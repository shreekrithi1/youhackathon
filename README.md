# 🛡️ CyberSentry (Powered by Opsera)
> **Agentic DevSecOps Orchestrator & Dark Web Threat Intelligence Engine**  
> *Architected by Narendra Darla for the You.com AI Hackathon (July 2026).*

[![You.com API](https://img.shields.io/badge/You.com-API-blue)](https://you.com)
[![Agno Framework](https://img.shields.io/badge/Agno-50%2B_Agents-purple)](https://agno.com)
[![LlamaIndex](https://img.shields.io/badge/LlamaIndex-RAG-teal)](https://llamaindex.ai)
[![Replit Sandbox](https://img.shields.io/badge/Replit-Sandbox-orange)](https://replit.com)
[![Pica Actions](https://img.shields.io/badge/Pica-Actions-yellow)](https://picahq.com)

---

## 📌 Executive Summary
**CyberSentry** is an enterprise-grade autonomous security orchestration system designed to solve fragmented toolchains and multi-week vulnerability resolution cycles. Powered by an **Agno multi-agent mesh running 50+ concurrent agents**, CyberSentry continuously monitors codebase dependencies and dark web channels for zero-day threats, correlates exploit payloads using **You.com APIs**, generates verifiable code patches, and runs automated sandbox regression testing.

---

## 🚀 Key Features

- **🌐 You.com Deep Web Threat Intel:** Dynamically queries You.com Search & News APIs to fetch real-time CVE advisories, exploit vectors, and security write-ups.
- **🐕 CyberDog Dark Web Monitor:** Scans pastebin dumps, dark web forums, and breach markets for exposed employee email addresses and leaked developer credentials.
- **🧠 50+ Swarm Agent Architecture:**
  - **Ingestion Swarm (15 Agents):** CVE parsing, git target crawling, dark web sniffing.
  - **Context & RAG Mesh (15 Agents):** AST vectorization and code chunking via LlamaIndex.
  - **Patch & Sandbox Swarm (15 Agents):** Zero-day patch creation and Replit sandbox testing.
  - **Action Dispatchers (5+ Agents):** Pica Action webhooks for GitHub PR generation and Slack alerts with SME human-in-the-loop guardrails.
- **📊 Real-Time Telemetry & Zero-Cost Budgeting:** Live dashboard tracking provider request volume, token metrics, and operational expenditure.

---

## 🛠️ Tech Stack & Integrations

| Technology / Partner | Role in CyberSentry |
| :--- | :--- |
| **You.com API** | Real-Time Web & News Threat Intelligence |
| **Agno (Phidata)** | 50+ Swarm Agent Orchestration Framework |
| **LlamaIndex** | Codebase RAG & AST Context Engineering |
| **Replit API** | Isolated Patch Execution Sandbox |
| **Pica** | Autonomous GitHub PR & Slack Actions |
| **FastAPI / Python** | Engine Backend & Webhook Server |
| **React / Vite** | Dark-Mode Enterprise Dashboard & Pitch Deck |

---

## 📦 Submission Verification Checklist

- [x] **Project built during hackathon:** Yes (July 2026).
- [x] **Public GitHub Repository with README:** Yes (`shreekrithi1/youhackathon`).
- [x] **Integrates You.com API/Plugin:** Yes (`VITE_YOU_API_KEY` endpoint integration for threat search & dark web correlation).

---

## 🎥 Demo & Artifacts

- 📽️ **Demo Video:** [`frontend/public/demo_you.mov`](https://github.com/shreekrithi1/youhackathon/raw/main/frontend/public/demo_you.mov)
- 💻 **Live Frontend App:** Run `cd frontend && npm install && npm run dev`
- ⚙️ **Backend API Server:** Run `cd backend && pip install -r requirements.txt && uvicorn main:app --port 8000`
