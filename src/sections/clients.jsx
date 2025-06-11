import ClientLogo from "../components/clientlogo";
import Aha from "../assets/logos/aha_logo.png";
import HolidayInn from "../assets/logos/holiday_inn_logo.png";
import Mandarin from "../assets/logos/mandarin_logo.png";
import Mbano from "../assets/logos/mbano_logo.png";
import SouthernSun from "../assets/logos/SouthernSun_logo.png";
import SunInternational from "../assets/logos/sun_international_logo.png";
import TsogoSun from "../assets/logos/tsogo_sun_logo.png";
import Onomo from "../assets/logos/onomo_hotels_logo.png";
import VicFalls from "../assets/logos/victoria_falls_logo.jpg";
import "../clientstyles.css"

function Clients(){
  const logos = [
    { image: Aha, title: "Aha Hotels" },
    { image: HolidayInn, title: "Holiday Inn" },
    { image: TsogoSun, title: "Tsogo Sun" },
    { image: Mandarin, title: "Mandarin Oriental" },
    { image: Mbano, title: "Mbano Hotel" },
    { image: SouthernSun, title: "Southern Sun Hotel" },
    { image: Onomo, title: "Onomo Hotels" },
    { image: VicFalls, title: "Victoria Falls Hotel" },
    { image: SunInternational, title: "Sun International" },
  ];

  return (
    <>
      <section className="clients">
        <h2 className="display-3 ibm-plex-serif-regular">Clients</h2>
        <div className="logo-container">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <ClientLogo key={`first-${index}`} image={logo.image} title={logo.title} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Clients;