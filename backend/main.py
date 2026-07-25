import os
from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv

# Load env variables from the root folder
load_dotenv(dotenv_path="../.env")

app = FastAPI(title="CyberSentry Orchestration API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Endpoints
@app.get("/api/health")
def health_check():
    return {"status": "CyberSentry Engine Online"}

async def process_vulnerability_pipeline(payload: dict):
    print(f"Starting pipeline for event: {payload.get('event_id')}")
    print("Pipeline execution complete.")

@app.post("/webhook/vulnerability")
async def vulnerability_webhook(request: Request, background_tasks: BackgroundTasks):
    payload = await request.json()
    print(f"Received Vulnerability Alert: {payload}")
    background_tasks.add_task(process_vulnerability_pipeline, payload)
    return {"status": "accepted", "event_id": payload.get("event_id")}

# Serve static React frontend files if dist folder exists
frontend_dist = os.path.join(os.path.dirname(__file__), "../frontend/dist")
if os.path.exists(frontend_dist):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dist, "assets")), name="assets")
    app.mount("/logos", StaticFiles(directory=os.path.join(frontend_dist, "logos")), name="logos")
    
    @app.get("/{full_path:path}")
    async def serve_frontend(full_path: str):
        file_path = os.path.join(frontend_dist, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(frontend_dist, "index.html"))
