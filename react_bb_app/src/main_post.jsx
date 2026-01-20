import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Post from './Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Post />
  </StrictMode>,
)
