import "dotenv/config";
import base58 from "bs58";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
const publickey = new Web3.PublicKey(
  "BoXCF4o9z3aQu1rdEro11VTt3MWAtWwWMBvFr6Qz4UCV"
);
const decoded = base58.decode(
  "561Cc9wfDBtzXPA9Dqxfbzk3rHf2icPkvWRZN4NTBNS8kAhWx7XLBHai8o8id7nyMqR6W47CrUK8rRxmYCdn4ziU"
);
const keyPair = Web3.Keypair.fromSecretKey(decoded);
const tokenMint = "A3P2noDsRGNtKDsGLky4xRCpgB5CbBeGv6E9SxqawqQD";

async function main() {
  const tokenAccount = await token.createAccount(
    connection, // connection
    keyPair, // signer
    new Web3.PublicKey(tokenMint), // mint public key
    publickey // owner of the token-account
  );
  console.log(tokenAccount.toBase58());
}

main();
