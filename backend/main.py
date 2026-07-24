import os
from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load env variables from the root folder
load_dotenv(dotenv_path="../.env")

app = FastAPI(title="CyberSentry Orchestration API")

# Configure CORS for local frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "CyberSentry Engine Online"}

async def process_vulnerability_pipeline(payload: dict):
    print(f"Starting pipeline for event: {payload.get('event_id')}")
    # TODO: Initialize Agno Orchestrator
    # TODO: Fetch CVE details via You.com
    # TODO: RAG Search target codebase via LlamaIndex
    # TODO: Generate Patch
    # TODO: Sandbox Test via Replit
    # TODO: Execute Pica Action (Slack + GitHub PR)
    print("Pipeline execution complete.")

@app.post("/webhook/vulnerability")
async def vulnerability_webhook(request: Request, background_tasks: BackgroundTasks):
    payload = await request.json()
    print(f"Received Vulnerability Alert: {payload}")
    
    # [SECURITY PATCH - CVE-2026-1024]
    # Sanitize incoming payload to prevent prototype pollution in deeply nested JSON structures
    # Applied by CyberSentry Patch Architect
    if "__proto__" in str(payload) or "constructor" in str(payload):
        return {"status": "rejected", "reason": "Prototype pollution detected in payload payload"}
    
    # Run the heavy agent pipeline in the background so the webhook responds quickly
    background_tasks.add_task(process_vulnerability_pipeline, payload)
    
    return {"status": "accepted", "event_id": payload.get("event_id")}
