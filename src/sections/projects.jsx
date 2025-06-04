import ProjectCard from "../components/projectcard";
import "../projectstyles.css"
import AlphineHeath from "../assets/AlphineHeath.jpg"
import BocaRaton from "../assets/BocaRaton.avif"
import DeWagen from "../assets/DeWagenHotel.jpg"
import MbanoHouse from "../assets/MbanoHouse.jpg"

function Projects(){
  return (
    <>
      <div id="projects" className="text-center">
        <h2 className="display-3 ibm-plex-serif-regular">Featured Projects</h2>
        <p>Discover our portfolio of exceptional luxury hotels that redefine hospitality excellence across the globe</p>
      </div>
      <div className="projects-container">
        <ProjectCard image={AlphineHeath} title="Alphine Heath" location="Drakensberg, South Africa"/>
        <ProjectCard image={BocaRaton} title="Mandarin Oriental" location="Boca Raton, USA"/>
        <ProjectCard image={DeWagen} title="De Wagen Hotel" location="Stellenbosch, South Africa"/>
        <ProjectCard image={MbanoHouse} title="Mbano House" location="Victoria Falls, Zimbabwe"/>
      </div>
    </>
  )
}

export default Projects;