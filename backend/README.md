# SafeBite Backend API

## Overview

Express.js backend server for the SafeBite blockchain food traceability system. Currently set up with basic server configuration and middleware. API routes and contract integration will be implemented in future development.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This installs Express, ethers.js, and other required packages.

### 2. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add:
- `RPC_URL`: Ethereum RPC endpoint (Sepolia testnet or local)
- `ACCESS_CONTROL_CONTRACT_ADDRESS`: Deployed access control contract address
- `SUPPLY_CHAIN_CONTRACT_ADDRESS`: Deployed supply chain contract address
- `PORT`: Server port number (default: 3000)

### 3. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server runs on `http://localhost:3000` by default.

## Current Features

- Express server with CORS enabled
- Body parser middleware for JSON requests
- Health check endpoint at `/health`
- Basic error handling middleware
- Environment variable configuration

## Project Structure

```
backend/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── .env.example       # Environment variable template
└── README.md          # This file
```

## Dependencies

- **express**: Web framework
- **ethers**: Ethereum library for contract interactions
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **body-parser**: Request body parsing
- **nodemon**: Development auto-reload (dev dependency)

## Development Status

Current stage: Basic server setup complete. API routes and smart contract integration will be implemented in future development.
