// util file that has the getContractMeta function

// Path: app/utils.jsx

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

async function getContractMeta() {
  const sdk = new ThirdwebSDK("mumbai");
  const contract = await sdk.getContract(
    "0xe003E4487f62cf8fa6a84C517293780b85aedb86"
  );
  const metadata = await contract.metadata.get();
  console.log("its that metadata", metadata);
  return metadata;
}

async function checkAccess() {
  const sdk = new ThirdwebSDK("mumbai");
  const contract = await sdk.getContract(
    "0xe003E4487f62cf8fa6a84C517293780b85aedb86"
  );
  // Address of the wallet to check NFT balance
  const walletAddress = "0x69df295d9230BD270F78F45aecac076Ae712BCE0";
  const tokenId = 0; // Id of the NFT to check
  const balance = await contract.erc1155.balanceOf(walletAddress, tokenId);
  console.log("balance", balance);
  const nft = await contract.erc1155.totalSupply(tokenId);
  const response = {
    balance: balance,
    nftTotal: nft,
    description: `Tippi have ${balance} of ${nft} total access cards`,
  };
  return response;
}

// async function claimAccessKey() {
//   const sdk = new ThirdwebSDK("mumbai");
//   const contract = await sdk.getContract(
//     "0xe003E4487f62cf8fa6a84C517293780b85aedb86"
//   );
//   const tokenId = 0; // the id of the NFT you want to claim
//   const quantity = 1; // how many NFTs you want to claim

//   const tx = await contract.erc1155.claim(tokenId, quantity);
//   const receipt = tx.receipt; // the transaction receipt
//   return receipt;
// }

module.exports = { getContractMeta, checkAccess };
