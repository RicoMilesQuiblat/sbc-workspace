import base58 from "bs58";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));

const publickey = new Web3.PublicKey(
  "BDWtkCeANt2oiYBtJZ6eLreFyoaiFta2otsjHd2DSu4k"
);
const decoded = base58.decode(
  "561Cc9wfDBtzXPA9Dqxfbzk3rHf2icPkvWRZN4NTBNS8kAhWx7XLBHai8o8id7nyMqR6W47CrUK8rRxmYCdn4ziU"
);
const keyPair = Web3.Keypair.fromSecretKey(decoded);

async function main() {
  const tokenMint = await token.createMint(
    connection,
    keyPair,
    publickey, // mint auth
    publickey, // freeze atuh
    9 //decimals
  );
  console.log(tokenMint.toBase58());
}

main();
