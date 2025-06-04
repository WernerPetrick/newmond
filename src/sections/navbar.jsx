import '../navbarstyles.css'
import '../typography.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className='ibm-plex-serif-semibold'>
        <li className='display-6'>Newmond</li>
      </ul>
      <ul className='roboto-400'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;