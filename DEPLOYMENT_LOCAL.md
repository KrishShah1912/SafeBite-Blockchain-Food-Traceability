# Local Deployment Guide

This guide shows how to deploy the SafeBite contracts on your local computer for testing.

## Why Deploy Locally?

Deploying locally means running the blockchain on your computer instead of using a real network. This is useful because:
- You don't need to pay for gas fees
- Transactions happen instantly
- You can test without using real money
- You can reset everything whenever you want

## Quick Start

### Option 1: Direct Deployment

The easiest way is to deploy directly to Hardhat's built-in network:

```bash
npm run deploy:local
```

This command will:
- Deploy both contracts to your local network
- Save the contract addresses to `deployments/local.json`
- Show you a summary with the addresses

### Option 2: Persistent Local Node

If you want a local node that keeps running:

1. Start a local Hardhat node in one terminal:
```bash
npm run node
```

This creates a local blockchain at `http://127.0.0.1:8545` with 20 test accounts. Each account starts with 10,000 ETH.

2. Deploy to the running node in another terminal:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Contract Addresses

After deployment, you'll see something like this:

```
Access Control: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Supply Chain:   0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
```

These addresses are saved in `deployments/local.json` so you can use them later.

## Using the Deployed Contracts

### Backend Setup

Add these to your backend `.env` file:

```env
RPC_URL=http://127.0.0.1:8545
ACCESS_CONTROL_CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
SUPPLY_CHAIN_CONTRACT_ADDRESS=0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
```

### Frontend Setup

To connect your frontend to the local network, use:

```javascript
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
```

If you're using MetaMask, you need to add the local network manually:
- Network Name: Hardhat Local
- RPC URL: http://127.0.0.1:8545
- Chain ID: 1337
- Currency Symbol: ETH

## Test Accounts

When you run `npm run node`, you'll see 20 test accounts printed in the console. The first account is used to deploy contracts:

```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

You can use these accounts for testing. Each one has 10,000 ETH to work with.

## Important Notes

- Contract addresses change every time you restart the Hardhat network
- Restarting the node will clear all contract state and data
- This is only for testing on your computer
- For production, deploy to Sepolia testnet or mainnet

## Troubleshooting

### "Network not found" Error

Make sure you're using the right network name:
- Use `--network hardhat` for direct deployment
- Use `--network localhost` for persistent node

### "Connection refused" Error

If you're using localhost, make sure the Hardhat node is running. Start it with:

```bash
npm run node
```

### "Insufficient funds" Error

This shouldn't happen on local networks since accounts start with 10,000 ETH. If it does, restart the node to reset account balances.

## Next Steps

After deploying locally, you can:
1. Initialize roles for your test accounts
2. Test the contract functions
3. Connect your backend to the contracts
4. Connect your frontend to the contracts
