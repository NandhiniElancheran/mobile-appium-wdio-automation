#!/usr/bin/env bash

echo "Starting Appium ..."
appium --base-path /wd/hub
appium --log-no-colors --log-timestamp > /dev/null

echo "Preparing..."

# Make sure there's no pre-existing `screenshots` file blocking symbolic link creation
# rm -rf screenshots

# Recreate screenshots dir
# mkdir screenshots

echo "Extracting tests.zip..."
unzip tests.zip

echo "Installing dependencies..."
npm install

echo "Running tests..."
npm run test-cloud 

