import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

// contract address (from etherscan.io)
const roboPunksNFTAddress = '0xf93A36af4fd27399b39Db0218b5e55CD8d63328D';

const MainMint = ({ accounts, setAccounts }) => {
  // quantity to mint
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      // connect to blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // sign the trasaction
      const signer = provider.getSigner();
      const contract = new ethers.Contract({
        roboPunksNFTAddress,
        roboPunksNFT,
        signer,
      });
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log('*** response:', response);
      } catch (err) {
        console.error('*** error:', err);
      }
    }
  }

  // decrement button
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <>
      <h1>RoboPunks</h1>
      <p>
        It's 2078. Can the RoboPunks NFT save humanity from destructive rampant
        NFT speculation? Mint RoboPunks to find out.
      </p>
      {isConnected ? (
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <input
              type='number'
              onChange={(e) => setMintAmount(e.value)}
              value={mintAmount}
            />
            <button onClick={handleIncrement}>+</button>
          </div>

          <button onClick={handleMint}>Mint Now</button>
        </div>
      ) : (
        <p>You must be connected to Mint.</p>
      )}
    </>
  );
};

export default MainMint;
