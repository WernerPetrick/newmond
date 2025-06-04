import "../footerstyles.css"
import Email from "../assets/email.png"
import Instagram from "../assets/instagram.png"
import LinkedIn from "../assets/linkedin.png"

function Footer(){
  return (
    <footer className="text-white">
      <div className="company-info">
        <h5>Newmond Hospitality</h5>
        <p>Elevating Hospitality Development</p>
      </div>
      <div className="links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="social-links">
        <img src={Email} alt="email icon" className="footer-icon" />
        <img src={Instagram} alt="instagram icon" className="footer-icon"  />
        <img src={LinkedIn} alt="linkedin icon" className="footer-icon" />
      </div>
    </footer>
  )
}

export default Footer;