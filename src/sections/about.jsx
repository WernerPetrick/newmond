import "../aboutstyles.css";
import HotelLobby from "../assets/hotel_lobby.jpg";

function About(){
  return (
    <>
      <section id="about" className="about">
        <div className="about-text roboto-400">
          <h2 className="display-3 ibm-plex-serif-regular">Our Vision</h2>
          <p>
            At Newmond, we understand that exceptional hospitality is built on countless moving parts working seamlessly together. With over four decades of industry expertise, we provide the leadership, strategy, and operational support to ensure every aspect of your property performs at its highest potential.
          </p>
          <p>
            Our comprehensive hospitality management services span deluxe hotels, full-service resorts, all-suite and extended-stay accommodations, serviced apartments, wine estates, restaurants, and select service properties. From concept development to day-to-day operations, we deliver tailored solutions in operations management, food & beverage, financial services, human resources, marketing, and sales.
          </p>
          <p>
            Newmond is dedicated to creating enduring value and distinctive guest experiences, partnering with owners and investors to elevate properties and unlock long-term success.
          </p>
        </div>
        <div className="about-img">
          <img src={HotelLobby} alt="hotel lobby"/>
        </div>
      </section>
    </>
  )
}

export default About;