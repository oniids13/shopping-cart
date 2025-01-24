import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import ErrorPage from './views/ErrorPage'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path='/'
    element={<Home/>}
    errorElement={<ErrorPage/>}
    />
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
