import "../projectcardstyles.css"

function ProjectCard({image, title, location}){
  return (
    <>
      <div className="project-card">
        <img src={image} alt={title} className=""/>
        <div>
          <h4 className="ibm-plex-serif-extralight">{title}</h4>
          <p className="ibm-plex-serif-thin">{location}</p>
        </div>
      </div>
    </>
  )
 }

 export default ProjectCard;