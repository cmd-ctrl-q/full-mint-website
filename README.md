# Full Mint Website

[Building a Full Web3 Mint Website for Beginners | React, Hardhat, Ethers, and Chakra
](https://www.youtube.com/watch?v=ynFNLBP2TPs)

## Steps for creating project

Create frontend app

```sh
npx create-react-app full-mint-website
```

Install hardhat as a dependency

```sh
npm i -D hardhat
```

Create a hardhat project

```sh
npx hardhat
```

1. Create a basic sample project
2. /path/to/project
3. yes
4. yes

Install openzeppelin contracts
useful for using stardard contract functionality like minting

```sh
npm i @openzeppelin/contracts
```

Install chakra for using pre-built styling components

```sh
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

Create .env file and add infura RPC URL, etherscan key, and private wallet key

Install dotenv

```sh
npm i -D dotenv
```

Add rinkeby network to the `hardhat.config.js` file.

Deploy contract

```sh
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deployRoboPunksNFT.js --network rinkeby
```

Install nomiclabs for verifying the contract
Contract and byte code can be seen on rinkeby.etherscan.io/address/0x...

```sh
npm i -D @nomiclabs/hardhat-etherscan
```

Verify contract

```sh
npx hardhat verify --network rinkeby {address}
```

After verifying it, you can refresh the url rinkeby.etherscan.io/address/0x...

Finally, you can also call your functions in rinkeby.etherscan.io
Contract > Read Contract

## Basic Hardhat commands

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```sh
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
