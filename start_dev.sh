#!/bin/sh

echo "[Step-1] start docker service ..."
sudo systemctl start docker
echo "[Step-1] completed!"

echo "[Step-2] start database (postgresql) ..."
sudo systemctl start postgresql
echo "[Step-2] completed!"

echo "[Step-3] start flask app ..."
docker-compose up -d
echo "[Step-3] completed!"

echo "[Step-4] start react app ..."
cd frontend/app && npm run start
echo "[Step-4] completed!"


