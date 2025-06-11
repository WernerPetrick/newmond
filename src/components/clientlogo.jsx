import "../clientlogo.css";

function ClientLogo({image, company}){
  return (
    <>
      <div className="client-logo">
        <img src={image} alt={`${company} logo`} />
      </div>
    </>
  )
}

export default ClientLogo;