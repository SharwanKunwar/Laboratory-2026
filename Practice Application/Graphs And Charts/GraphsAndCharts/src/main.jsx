import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pie01 from './components/charts/Pie01.jsx'
import DefaultPage from './pages/DefaultPage.jsx'
import Pie02 from './components/charts/Pie02.jsx'
import Pie03 from './components/charts/Pie03.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<DefaultPage/>
      },
      {
        path:"demo01",
        element:<Pie01/>
      },
      {
        path:"demo02",
        element:<Pie02/>
      },
      {
        path:"demo03",
        element:<Pie03/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
