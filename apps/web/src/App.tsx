import { Button, Card } from "@privy/ui";
import { formatDate, debounce } from "@privy/utils";
import { useState, useEffect } from "react";
import "./styles/globals.css";
import PrivyButton from "./compoents/privyButton";
import SignMessage from "./compoents/SignMessage";

function App() {
    const [count, setCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    console.log("=== App Rendered ===");

    // Debounced search function
    const debouncedSearch = debounce((term: string) => {
        console.log("Searching for:", term);
        // Here you would typically make an API call
    }, 300);

    useEffect(() => {
        debouncedSearch(searchTerm);
    }, [searchTerm, debouncedSearch]);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Header */}
                    <header className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Privy Web App</h1>
                        <p className="text-lg text-gray-600">Built with Vite, React, TypeScript, and Tailwind CSS</p>
                    </header>

                    {/* Test Component */}
                    <div className="p-4 bg-blue-100 rounded">
                        <p>✓ App is rendering correctly</p>
                    </div>

                    <PrivyButton />
                    <SignMessage />
                </div>
            </div>
        </main>
    );
}

export default App;
