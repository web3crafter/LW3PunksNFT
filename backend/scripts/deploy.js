const { ethers } = require("hardhat");

async function Main() {
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";

  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  const deployedlw3PunksContract = await lw3PunksContract.deploy(metadataURL);
  await deployedlw3PunksContract.deployed();
  console.log("LW3Punks Contract Address: ", deployedlw3PunksContract.address);
}

Main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
