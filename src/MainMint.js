import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
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
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
        });
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
    <Flex justify='center' align='center' height='100vh' padding='150px'>
      <Box width='520px'>
        <div>
          <Text fontSize='48px' textShadow='0 5px #000000'>
            RoboPunks
          </Text>
          <Text
            fontSize='30px'
            letterSpacing='-5.5%'
            fontFamily='VT323'
            textShadow='0 2px 2px #000000'
          >
            It's 2078. Can the RoboPunks NFT save humanity from destructive
            rampant NFT speculation? Mint RoboPunks to find out.
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex align='center' justify='center'>
              <Button
                backgroundColor='#D6517D'
                borderRadius='5px'
                boxShadow='0px 2px 2px 1px #0F0F0F'
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                margin='10px'
                onClick={handleDecrement}
              >
                -
              </Button>

              <Input
                readOnly
                fontFamily='inherit'
                width='100px'
                height='40px'
                textAlign='center'
                paddingLeft='19px'
                marginTop='10px'
                type='number'
                // onChange={(e) => setMintAmount(e.value)}
                value={mintAmount}
              />

              <Button
                backgroundColor='#D6517D'
                borderRadius='5px'
                boxShadow='0px 2px 2px 1px #0F0F0F'
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                margin='10px'
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>

            <Button
              backgroundColor='#D6517D'
              borderRadius='5px'
              boxShadow='0px 2px 2px 1px #0F0F0F'
              color='white'
              cursor='pointer'
              fontFamily='inherit'
              padding='15px'
              margin='10px'
              onClick={handleMint}
            >
              MINT NOW
            </Button>
          </div>
        ) : (
          <Text
            marginTop='70px'
            fontSize='30px'
            letterSpacing='-5.5%'
            fontFamily='VT323'
            textShadow='0 3px #000000'
            color='#D6517D'
          >
            You must be connected to Mint.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
