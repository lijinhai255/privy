import { usePrivy, useLogin } from "@privy-io/react-auth";

const PrivyButton = () => {
    const { ready, authenticated, user, logout } = usePrivy();

    const { login } = useLogin({
        onComplete: ({ user, isNewUser, wasAlreadyAuthenticated, loginMethod, loginAccount }) => {
            console.log("✅ Login successful!");
            console.log("User:", user);
            console.log("Login method:", loginMethod);
            console.log("Login account:", loginAccount);
            console.log("Is new user:", isNewUser);
        },
        onError: (error) => {
            console.error("❌ Login failed:", error);
        },
    });

    const handleConnect = async () => {
        try {
            console.log("=== Login Button Clicked ===");
            console.log("Ready:", ready);
            console.log("Authenticated:", authenticated);

            console.log("Calling login()...");
            await login();
            console.log("login() completed");
        } catch (error) {
            console.error("=== Login error ===");
            console.error("Error:", error);
        }
    };

    const handleLogout = async () => {
        try {
            console.log("=== Logout Button Clicked ===");
            await logout();
            console.log("✅ Logout successful!");
        } catch (error) {
            console.error("❌ Logout error:", error);
        }
    };

    console.log("=== PrivyButton State ===");
    console.log("Ready:", ready);
    console.log("Authenticated:", authenticated);
    console.log("User:", user);

    if (!ready) {
        return <div className="text-center p-4 bg-gray-100 rounded">Loading Privy...</div>;
    }

    if (authenticated) {
        return (
            <div className="flex flex-col items-center gap-4">
                <div className="text-center p-6 bg-green-100 rounded-lg w-full max-w-md">
                    <p className="text-green-600 font-medium text-lg mb-2">✓ Wallet Connected</p>
                    <p className="text-sm text-gray-700 font-mono break-all">{user?.wallet?.address}</p>
                </div>

                <button
                    onClick={handleLogout}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-lg"
                >
                    Disconnect Wallet
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                onClick={handleConnect}
                className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg shadow-lg"
            >
                Connect Wallet
            </button>
            <div className="text-sm text-gray-500 space-y-1">
                <p>Click to connect your Phantom or OKX wallet</p>
                <p className="text-xs text-gray-400">Make sure your wallet is unlocked</p>
            </div>
        </div>
    );
};

export default PrivyButton;
