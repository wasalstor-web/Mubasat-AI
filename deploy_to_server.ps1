$ServerIP = "147.93.120.99"
$User = "root"
$RemotePath = "/opt/mubasat-ai"
$Password = "W'bI/,.YQFG/G#v+ZWd7"

Write-Host "Preparing deployment package..."

# Create a temp directory for staging
$TempDir = "deploy_stage"
if (Test-Path $TempDir) { Remove-Item -Path $TempDir -Recurse -Force }
New-Item -ItemType Directory -Force -Path $TempDir | Out-Null

# Copy Infra
Write-Host "Copying Infra..."
Copy-Item -Path "infra" -Destination "$TempDir" -Recurse

# Function to copy and clean
function Copy-And-Clean ($Source, $Dest) {
    if (Test-Path $Source) {
        Write-Host "Processing $Source..."
        Copy-Item -Path $Source -Destination "$TempDir\$Dest" -Recurse
        # Remove heavy folders
        Remove-Item -Path "$TempDir\$Dest\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path "$TempDir\$Dest\.next" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path "$TempDir\$Dest\.git" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path "$TempDir\$Dest\target" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path "$TempDir\$Dest\__pycache__" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path "$TempDir\$Dest\.venv" -Recurse -Force -ErrorAction SilentlyContinue
    } else {
        Write-Warning "Source $Source not found, skipping."
    }
}

Copy-And-Clean "mubasat-ai-web" "mubasat-ai-web"
Copy-And-Clean "mubasat-ai-core" "mubasat-ai-core"
Copy-And-Clean "client-dashboard" "client-dashboard"
Copy-And-Clean "public-web" "public-web"

# Zip everything
$ZipFile = "deployment.zip"
if (Test-Path $ZipFile) { Remove-Item $ZipFile }
Write-Host "Zipping files (this may take a moment)..."
Compress-Archive -Path "$TempDir\*" -DestinationPath $ZipFile

# Cleanup temp
Remove-Item -Path $TempDir -Recurse -Force

Write-Host "---------------------------------------------------"
Write-Host "Ready to upload to $ServerIP"
Write-Host "Password: $Password"
Write-Host "---------------------------------------------------"

# Create remote directory first
Write-Host "Creating remote directory..."
ssh $User@$ServerIP "mkdir -p $RemotePath"

Write-Host "Uploading deployment.zip..."
scp $ZipFile "${User}@${ServerIP}:${RemotePath}/deployment.zip"

Write-Host "Executing remote setup and deployment..."
ssh "${User}@${ServerIP}" "
    export DEBIAN_FRONTEND=noninteractive
    apt-get update
    apt-get install -y unzip docker.io docker-compose-plugin
    
    cd $RemotePath
    unzip -o deployment.zip
    
    chmod +x infra/setup_server.sh
    ./infra/setup_server.sh
    
    cd infra
    docker compose down --remove-orphans
    docker compose up -d --build
"

Write-Host "Deployment Complete! Visit https://onlainee.space"
