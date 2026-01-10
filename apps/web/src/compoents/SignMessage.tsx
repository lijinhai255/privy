import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth/solana";

const SignMessage = () => {
  const { ready, authenticated, user } = usePrivy();
  const { wallets } = useWallets();

  const handleSignMessage = async () => {
    try {
      if (!wallets || wallets.length === 0) {
        console.log("No wallet connected");
        return;
      }

      // Get the currently active wallet
      const userWalletAddress = user?.wallet?.address;
      const activeWallet = wallets.find(
        (wallet) => wallet?.address === userWalletAddress
      ) || wallets[0];

      const wallet = activeWallet;
      const message = new TextEncoder().encode(
        `Sign this message to verify you own this wallet.\nTimestamp: ${Date.now()}`
      );

      // Sign the message
      const signature = await wallet.signMessage(message);
      const signatureArray = Array.from(signature);
      const signatureBase64 = btoa(String.fromCharCode.apply(null, signatureArray));

      console.log("Message signed successfully!");
      console.log("Signature (base64):", signatureBase64);
      console.log("Wallet address:", wallet.address);

      // You can now send this to your backend for verification
      return {
        signature: signatureBase64,
        address: wallet.address,
        message: message.toString(),
      };
    } catch (error) {
      console.error("Failed to sign message:", error);
      throw error;
    }
  };

  const handleSignTransaction = async () => {
    try {
      if (!wallets || wallets.length === 0) {
        console.log("No wallet connected");
        return;
      }

      // Get the currently active wallet
      const userWalletAddress = user?.wallet?.address;
      const activeWallet = wallets.find(
        (wallet) => wallet?.address === userWalletAddress
      ) || wallets[0];

      const wallet = activeWallet;

      // Create a simple transaction (you'll need to import from @solana/web3.js)
      const { Transaction, SystemProgram, LAMPORTS_PER_SOL } = await import("@solana/web3.js");

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.address,
          toPubkey: wallet.address, // Sending to self for testing
          lamports: LAMPORTS_PER_SOL * 0.00001, // Small amount
        })
      );

      // Sign the transaction
      const signedTransaction = await wallet.signTransaction(transaction);

      console.log("Transaction signed successfully!");
      console.log("Signature:", signedTransaction.signature);

      return signedTransaction;
    } catch (error) {
      console.error("Failed to sign transaction:", error);
      throw error;
    }
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <div>Please connect your wallet first</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Wallet Signing</h2>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Connected Wallet: {wallets?.[0]?.address || "None"}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSignMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign Message
        </button>

        <button
          onClick={handleSignTransaction}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign Transaction (Test)
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Check the browser console to see the signature results
        </p>
      </div>
    </div>
  );
};

export default SignMessage;
