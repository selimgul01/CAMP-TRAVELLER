import react, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Camp from './components/camp/Camp'
import Testimonials from './components/Testimonials/Testimonials'
import Work from './components/work/Work'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'

function App() {

   useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 1000,
      offset: 200,
      delay: 100
    })
  }, [])

  return (
   <div className=''>
    <Navbar/>
    <Hero/>
    <Camp/>
    <Testimonials/>
    <Work/>
    <Features/>
    <Footer/>
   </div>
  )
}

export default App
