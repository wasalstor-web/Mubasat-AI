from fastapi import FastAPI, HTTPException, UploadFile, File, Depends, Header
from pydantic import BaseModel
import os
import shutil
import zipfile
import docker
import subprocess

app = FastAPI(title="Mubasat AI Service", version="1.0.0")

# Security
API_KEY = "mubasat_secure_key_123"  # In production, use env var

async def verify_key(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=403, detail="Invalid API Key")

class AIRequest(BaseModel):
    query: str
    context: dict = {}

class AIResponse(BaseModel):
    response: str
    confidence: float

@app.get("/")
async def root():
    return {"message": "Mubasat AI Service is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# --- Management Endpoints ---

@app.post("/manage/upload", dependencies=[Depends(verify_key)])
async def upload_update(file: UploadFile = File(...)):
    try:
        file_location = f"/tmp/{file.filename}"
        with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
        
        # Unzip to /opt/mubasat-ai
        with zipfile.ZipFile(file_location, 'r') as zip_ref:
            zip_ref.extractall("/opt/mubasat-ai")
            
        os.remove(file_location)
        return {"status": "success", "message": "Files uploaded and extracted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/manage/deploy/{service_name}", dependencies=[Depends(verify_key)])
async def deploy_service(service_name: str):
    try:
        # Using subprocess to run docker compose commands
        # We need to be in /opt/mubasat-ai/infra
        cwd = "/opt/mubasat-ai/infra"
        
        if service_name == "all":
            cmd = ["docker", "compose", "up", "-d", "--build"]
        else:
            cmd = ["docker", "compose", "up", "-d", "--no-deps", "--build", service_name]
            
        result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
        
        if result.returncode != 0:
            raise Exception(f"Deployment failed: {result.stderr}")
            
        return {"status": "success", "output": result.stdout}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/manage/status", dependencies=[Depends(verify_key)])
async def get_status():
    try:
        client = docker.from_env()
        containers = client.containers.list()
        status_list = []
        for c in containers:
            status_list.append({
                "name": c.name,
                "status": c.status,
                "image": c.image.tags[0] if c.image.tags else "unknown"
            })
        return {"status": "success", "containers": status_list}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/process", response_model=AIResponse)
async def process_ai_request(request: AIRequest):
    # Placeholder for AI processing logic
    # This is where you would integrate with models like OpenAI, HuggingFace, etc.
    try:
        # Simulating processing
        processed_text = f"Processed: {request.query}"
        return AIResponse(response=processed_text, confidence=0.95)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
