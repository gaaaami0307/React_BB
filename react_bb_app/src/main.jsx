import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Threads from './Threads.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Threads />
  </StrictMode>,
)
