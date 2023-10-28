import * as Web3 from "@solana/web3.js";

async function main() {
  const publicKey = new Web3.PublicKey(
    "BDWtkCeANt2oiYBtJZ6eLreFyoaiFta2otsjHd2DSu4k"
  );
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  const balance = await connection.getBalance(publicKey);
  console.log("balance", balance);
}

main();
