/**
 * @file Local deployment script for SafeBite contracts
 * @notice Deploys to Hardhat local network (no gas costs, unlimited balance)
 * @dev Run with: npm run deploy:local
 */

const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Deploying SafeBite contracts to local Hardhat network...\n");
  console.log("💡 This network has unlimited gas and ETH - perfect for testing!\n");

  // Get deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);
  
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", hre.ethers.formatEther(balance), "ETH\n");

  // Step 1: Deploy Access Control Contract
  console.log("1️⃣  Deploying SafeBiteAccessRoles...");
  const SafeBiteAccessRoles = await hre.ethers.getContractFactory("SafeBiteAccessRoles");
  const accessControl = await SafeBiteAccessRoles.deploy();
  await accessControl.waitForDeployment();
  const accessControlAddress = await accessControl.getAddress();
  console.log("   ✅ SafeBiteAccessRoles deployed to:", accessControlAddress);

  // Step 2: Deploy Supply Chain Contract
  console.log("\n2️⃣  Deploying SafeBiteSupplyChain...");
  const SafeBiteSupplyChain = await hre.ethers.getContractFactory("SafeBiteSupplyChain");
  const supplyChain = await SafeBiteSupplyChain.deploy(accessControlAddress);
  await supplyChain.waitForDeployment();
  const supplyChainAddress = await supplyChain.getAddress();
  console.log("   ✅ SafeBiteSupplyChain deployed to:", supplyChainAddress);

  // Step 3: Save deployment addresses to file
  const deploymentInfo = {
    network: "hardhat",
    chainId: 1337,
    deployer: deployer.address,
    contracts: {
      SafeBiteAccessRoles: accessControlAddress,
      SafeBiteSupplyChain: supplyChainAddress
    },
    deployedAt: new Date().toISOString()
  };

  const deploymentPath = path.join(__dirname, "..", "deployments", "local.json");
  const deploymentsDir = path.dirname(deploymentPath);
  
  // Create deployments directory if it doesn't exist
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));

  // Step 4: Display summary
  console.log("\n" + "=".repeat(60));
  console.log("📋 Deployment Summary");
  console.log("=".repeat(60));
  console.log("Network: Hardhat (Local)");
  console.log("Chain ID: 1337");
  console.log("\nContract Addresses:");
  console.log("  Access Control:", accessControlAddress);
  console.log("  Supply Chain:  ", supplyChainAddress);
  console.log("\n💾 Deployment info saved to: deployments/local.json");
  console.log("\n✅ Deployment completed successfully!");
  console.log("\n💡 Next steps:");
  console.log("   - Use these addresses in your backend .env file");
  console.log("   - Connect your frontend to these contracts");
  console.log("   - Start testing your smart contracts!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:");
    console.error(error);
    process.exit(1);
  });

