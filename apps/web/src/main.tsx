import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PrivyProviderWrapper } from './providers/privy-provider'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivyProviderWrapper>
      <App />
    </PrivyProviderWrapper>
  </StrictMode>,
)
