import "dotenv/config";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

import base58 from "bs58";
async function main() {
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  const base58DecodedPK = base58.decode(
    "561Cc9wfDBtzXPA9Dqxfbzk3rHf2icPkvWRZN4NTBNS8kAhWx7XLBHai8o8id7nyMqR6W47CrUK8rRxmYCdn4ziU"
  );
  const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

  const mintToken = await token.mintTo(
    connection,
    signer,
    new Web3.PublicKey("A3P2noDsRGNtKDsGLky4xRCpgB5CbBeGv6E9SxqawqQD"), //mint
    new Web3.PublicKey("7N4E6nRJUs4jqNrSsiXnTxat13uF2oCFTtDXSSTewLgb"), //owner
    new Web3.PublicKey("fr5AgrNyk4TnzWjQRgmp2s99cBnFNh4Q5gB5nxurbKJ"), //authority
    100000000000 //amount
  );
  console.log("mint Token ", mintToken);
}
main();
