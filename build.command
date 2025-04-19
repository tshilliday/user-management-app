#!/bin/bash

# Change to the project directory
cd "$(dirname "$0")"

# Install dependencies
echo "Installing dependencies..."
npm install

# Set up Prisma database
echo "Setting up database..."
npx prisma generate
npx prisma db push

# Build the project
echo "Building project..."
npm run build

# Start the development server
echo "Starting development server..."
npm run dev