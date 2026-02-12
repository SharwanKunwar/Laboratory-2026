import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import BcaProgram from './pages/BcaProgram.jsx'
import BcaDefaultPage from './pages/BcaDefaultPage.jsx'
import FocusDash from './pages/FocusDash.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      
    ]
  },
  {
    path:"bcaProgram",
    element:<BcaProgram/>,
    children:[
      {
        index: true,
        element:<BcaDefaultPage/>
      }
    ]
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
