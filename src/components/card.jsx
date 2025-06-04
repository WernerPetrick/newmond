import "../cardstyles.css"

function Card({icon, title, subtitle}) {
  return (
    <>
      <div className="card">
        <div className="card-icon text-center">
          <img src={icon} alt={`${title} icon`} />
        </div>
        <div className="card-content">
          <h3 className="card-title text-center">{title}</h3>
          <p className="card-description text-center ibm-plex-serif-light">{subtitle}</p>

          <hr className="lined"/>
        </div>
      </div>
    </>
  )
}

export default Card;