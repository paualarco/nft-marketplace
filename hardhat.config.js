require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString
const pk = "37148a01fec648b113ac4ef75a3b6a2ee8332ce82bd945435bad382a5bf6ccc5"
module.exports = {
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1Nkyw9ilrULezKGDsYqt9iffQnkQfEz5",
      accounts: [pk]
    },
    mainnet: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1Nkyw9ilrULezKGDsYqt9iffQnkQfEz5",
      accounts: [pk]
    }
  },
  solidity: "0.8.4",
};
