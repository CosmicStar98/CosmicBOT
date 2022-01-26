#!/bin/bash
@echo off
clear
screen -X title "CosmicBOT"

while true
do
pwd
node index.js
echo "Reloading CosmicBOT"
echo "Hit [CTRL+C] to shut down the bot."
done
