#!/bin/bash

# Update system
apt-get update && apt-get upgrade -y

# Install Docker
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
fi

# Install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "Installing Docker Compose..."
    apt-get install -y docker-compose-plugin
fi

# Stop existing web servers to avoid port conflicts
systemctl stop nginx || true
systemctl disable nginx || true
systemctl stop apache2 || true
systemctl disable apache2 || true

# Create directory
mkdir -p /opt/mubasat-ai

echo "Environment prepared successfully! Ready for deployment."
