import * as Web3 from "@solana/web3.js";
import base58 from "bs58";

async function main() {
  const decoded = base58.decode(
    "561Cc9wfDBtzXPA9Dqxfbzk3rHf2icPkvWRZN4NTBNS8kAhWx7XLBHai8o8id7nyMqR6W47CrUK8rRxmYCdn4ziU"
  );
  const keyPair = Web3.Keypair.fromSecretKey(decoded);

  const publicKeyFrom = new Web3.PublicKey(
    "BDWtkCeANt2oiYBtJZ6eLreFyoaiFta2otsjHd2DSu4k"
  );
  const publicKeyTo = new Web3.PublicKey(
    "BoXCF4o9z3aQu1rdEro11VTt3MWAtWwWMBvFr6Qz4UCV"
  );

  const instruction = Web3.SystemProgram.transfer({
    fromPubkey: publicKeyFrom,
    toPubkey: publicKeyTo,
    lamports: 100,
  });
  const transaction = new Web3.Transaction();
  transaction.add(instruction);

  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  const txSignature = await Web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [keyPair]
  );

  console.log("txHash", txSignature);
}

main();
