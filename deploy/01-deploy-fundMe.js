const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");



module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId


  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
  //when going for localhost or hardhat network we want to use a mock

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [], //put price feed address
    log: true,
  })
};

