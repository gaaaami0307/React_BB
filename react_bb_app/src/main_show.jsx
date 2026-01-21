import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Show from './Show.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Show />
  </StrictMode>,
)
