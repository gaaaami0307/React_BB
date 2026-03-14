import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Threads from './Threads.jsx'
import Show from './Show.jsx'
import Post from './Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Threads />} />
        <Route path="/threads/new" element={<Post />} />
        <Route path="/threads/:id" element={<Show />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
