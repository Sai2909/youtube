import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'
import ErrorPage from './ErrorPage'

const Main = () => {
  return <BrowserRouter>
  <nv>THIS IS NAVABAR</nv>
  <Routes>
    <Route path='/' element={<Home/>}>
    <Route path='about' element={<About/>}></Route>
    <Route path='product' element={<Product/>}></Route>
    <Route path='*' element={<ErrorPage/>}></Route>
    </Route>
  </Routes>
  <footer>THIS IS FOOTER</footer>
  </BrowserRouter>
}

export default Main
