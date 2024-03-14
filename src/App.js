import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'



export default function App() {

  const routers= createBrowserRouter([
    {path:'' , element:<Layout/>, children:[
      {path:'' , element:<Home/>},
      {path:'home' , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'Portfolio' , element:<Portfolio/>},
      {path: 'contact', element:<Contact/>}
    ]}
  
  ])
  return (
    <>
      
     
      <RouterProvider router={routers}></RouterProvider>

    </>
  )
}
