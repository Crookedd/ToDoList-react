//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/scripts/App'
import './assets/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
