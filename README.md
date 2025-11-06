# SafeBite: Blockchain-Based Food Supply Chain Verification System

## Description

SafeBite is a blockchain-based system that tracks food products from the factory to the store shelf. It uses smart contracts (programs that run on the Ethereum blockchain) to create a permanent, unchangeable record of each product's journey through the supply chain. This ensures that you can always verify where your food came from and who handled it along the way.

### What This System Does

- **Role-Based Access Control**: Different people in the supply chain (manufacturers, distributors, retailers, inspectors, and consumers) have specific permissions to perform certain actions
- **Product Registration**: Each product gets a unique ID and can store additional information like certificates or quality reports
- **Ownership Tracking**: The system records every time a product changes hands, creating a complete history
- **Status Updates**: You can see where a product is at any time (Created, Shipped, Received, Stored, or Delivered)
- **Verification**: Products can be checked for authenticity, quality, and compliance with regulations
- **Complete History**: Every action taken on a product is permanently recorded and can be viewed by authorized parties

### How It Works

The system has four main parts:

1. **Smart Contracts** (The Rules): These are programs that define what each role can do
   - `SafeBiteAccessRoles.sol` - Controls who can do what
   - `SafeBiteSupplyChain.sol` - Handles registering products, transferring ownership, and updating status

2. **Backend Server** (The Middleman): A web server that helps the frontend communicate with the blockchain

3. **Blockchain Network** (The Record Keeper): The Ethereum network stores all transactions permanently

4. **Frontend Interface** (Coming Soon): A website where users can interact with the system

## Dependencies

### What You Need to Install

Before you can use this project, you need to have these installed on your computer:

- **Node.js** (version 16 or higher) - This lets you run JavaScript programs
- **npm** or **yarn** - These are package managers that install the project's dependencies
- **Git** - This lets you download the project from GitHub

### Tools This Project Uses

- **Hardhat** - A tool that helps you develop and test smart contracts
- **ethers.js** - A library that lets JavaScript code talk to the Ethereum blockchain
- **Express.js** - A framework for building the backend web server
- **MetaMask** - A browser extension wallet (optional, for testing)

All of these will be installed automatically when you run `npm install`.

## Setup Instructions

### Step 1: Download the Project

Open your terminal and run:

```bash
git clone https://github.com/jalpatel11/SafeBite-Blockchain-Food-Traceability.git
cd SafeBite-Blockchain-Food-Traceability
```

### Step 2: Install Dependencies

Install all the required packages:

```bash
npm install
```

This will download and install Hardhat, OpenZeppelin contracts, and other tools needed for development.

### Step 3: Compile the Smart Contracts

Compile the contracts to check for errors:

```bash
npx hardhat compile
```

This checks your code for errors and prepares it for testing.

### Step 4: Set Up the Backend Server

Navigate to the backend folder and install its dependencies:

```bash
cd backend
npm install
```

The backend server is still in early development. You can run it with:

```bash
npm run dev  # Development mode (auto-restarts when you make changes)
# or
npm start    # Production mode
```

The server will start on `http://localhost:3000` by default.

**Note**: The backend API is still being developed. Currently, it has a health check endpoint at `/health` that you can visit to verify the server is running.

## How to Use

### Testing the Smart Contracts

You can test the contracts locally using Hardhat's built-in testing framework:

```bash
npx hardhat test
```

Or start a local blockchain node for interactive testing:

```bash
npx hardhat node
```

This starts a local Ethereum network on your computer that you can use to test the contracts.

### How Different Users Interact with the System

#### Producers/Manufacturers

1. **Register a new product** by calling `registerProduct()` with:
   - Product name
   - Batch ID
   - Origin location
   - Metadata hash (optional, for storing certificates or other documents)
   
   The system will give you a unique product ID and set the status to "CREATED".

#### Distributors

1. Receive a product from a producer
2. **Transfer ownership** to a retailer by calling `transferOwnership()` with:
   - Product ID
   - Retailer's address
   - Shipment details (tracking number, carrier, etc.)
   
   The product status automatically changes to "SHIPPED".

#### Retailers

1. Receive a product from a distributor
2. **Update the status** to "RECEIVED" when you receive it
3. **Perform quality checks** and record the results
4. **Transfer to consumer** when selling, which changes status to "DELIVERED"

#### Regulators

1. **Perform compliance checks** on products
2. **View complete product history** to audit the supply chain

#### Consumers

1. **Verify product authenticity** by checking the product ID
2. **View the product journey** to see where it came from
3. **Check complete provenance** to see the full history

## Project Structure

```
SafeBite-Blockchain-Food-Traceability/
├── contracts/              # Smart contract code
│   ├── SafeBiteAccessRoles.sol
│   └── SafeBiteSupplyChain.sol
├── backend/                # Backend server code
│   ├── server.js
│   ├── package.json
│   └── README.md
├── hardhat.config.js       # Hardhat configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## Development Status

- ✅ Smart contracts are implemented
- ⏳ Backend API is being developed
- ⏳ Frontend interface is planned
- ⏳ Test suite is planned
- ⏳ Deployment documentation will be added in later stages

## License

Apache License 2.0

## Contact

For questions or contributions, please open an issue on the GitHub repository.
