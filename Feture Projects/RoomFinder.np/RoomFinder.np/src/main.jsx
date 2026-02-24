import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoomFinderLayout from './Layout/RoomFinderLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoomFinderLayout/>
  </StrictMode>,
)
