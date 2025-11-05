import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AccessibilityProvider } from './components/Layout/Header.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AccessibilityProvider>
          <App />
        </AccessibilityProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)