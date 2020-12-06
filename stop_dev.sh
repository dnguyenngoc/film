#!/bin/sh

echo "[Step-1] Stop docker ..."
sudo systemctl stop docker
echo "[Step-1] completed!"

echo "[Step-2] Stop database (postgresql) ..."
sudo systemctl stop postgresql
echo "[Step-2] completed!"
