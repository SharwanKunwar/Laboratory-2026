import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComposeTask from './pages/ComposeTask.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import IntroductionPage from './pages/IntroductionPage.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <IntroductionPage/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"composeTask",
        element: <ComposeTask/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
