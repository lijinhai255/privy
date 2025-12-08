import { Button, Card } from '@privy/ui'
import { formatDate, debounce } from '@privy/utils'
import { useState, useEffect } from 'react'
import './styles/globals.css'

function App() {
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  // Debounced search function
  const debouncedSearch = debounce((term: string) => {
    console.log('Searching for:', term)
    // Here you would typically make an API call
  }, 300)

  useEffect(() => {
    debouncedSearch(searchTerm)
  }, [searchTerm, debouncedSearch])

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to Privy Web App
            </h1>
            <p className="text-lg text-gray-600">
              Built with Vite, React, TypeScript, and Tailwind CSS
            </p>
          </header>

          {/* Demo Cards */}
          <section className="grid md:grid-cols-2 gap-6">
            <Card
              title="UI Components Demo"
              content={`Button clicked ${count} times. Today is ${formatDate(new Date())}`}
            />

            <Card
              title="Utils Demo"
              content={`Search term: "${searchTerm}" (check console for debounced output)`}
            />
          </section>

          {/* Interactive Section */}
          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <Button onClick={handleButtonClick}>
                Click count: {count}
              </Button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
            </div>

            <div className="space-y-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search (with debounce):
              </label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Type to search..."
              />
            </div>
          </section>

          {/* Feature Grid */}
          <section className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Powered by Vite for instant startup and HMR</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 text-xl">🧩</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monorepo Ready</h3>
              <p className="text-gray-600">Shared packages with pnpm workspaces</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern UI</h3>
              <p className="text-gray-600">Beautiful UI with Tailwind CSS</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App