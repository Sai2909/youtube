import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from './routes/Dashboard'
import Contact from './routes/Contact'

const router=createBrowserRouter([
    {path:"/",element:<App/>},
    {path:"/dashboard",element:<Dashboard/>},
    {path:"/contact",element:<Contact/>}
])
const Main = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Main
