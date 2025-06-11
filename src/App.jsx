import './App.css'
import About from './sections/about'
import Clients from './sections/clients'
import Contact from './sections/contact'
import Footer from './sections/footer'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Projects from './sections/projects'
import Services from './sections/services'
import Stats from './sections/stats'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Projects/>
      <Clients/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
