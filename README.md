# Full Mint Website

[Building a Full Web3 Mint Website for Beginners | React, Hardhat, Ethers, and Chakra
](https://www.youtube.com/watch?v=ynFNLBP2TPs)

## Steps for creating project

_Create frontend app_

```sh
npx create-react-app full-mint-website
```

_Install hardhat as a dependency_

```sh
npm i -D hardhat
```

_Create a hardhat project_

```sh
npx hardhat
```

1. Create a basic sample project
2. /path/to/project
3. yes
4. yes

_Install openzeppelin contracts_
useful for using stardard contract functionality like minting

```sh
npm i @openzeppelin/contracts
```

_Install chakra for using pre-built styling components_

```sh
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

_Create .env file and add infura RPC URL, etherscan key, and private wallet key_

_Install dotenv_

```sh
npm i -D dotenv
```

# Basic Sample Hardhat Project

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
