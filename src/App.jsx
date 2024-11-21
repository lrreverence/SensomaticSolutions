import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Product from './components/Product'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Products from './components/Projects'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Product/>
      <Products/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
