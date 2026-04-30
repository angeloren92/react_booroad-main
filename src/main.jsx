import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './index.css'
import App from './App.jsx'

// Entry point: mount React app into #root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
