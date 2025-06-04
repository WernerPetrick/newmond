import "../servicesstyles.css"

function Services(){
  return (
    <>
      <section id="services" className="services roboto-400">
        <h2 className="display-3 text-center ibm-plex-serif-regular">Our Services</h2>
        <p>
          From concept to completion — and beyond — Newmond delivers comprehensive hospitality services designed to elevate properties and create unforgettable guest experiences. Our expertise spans every stage of a property's lifecycle, offering tailored solutions in:
        </p>
        <div className="service-list">
          <ul>
            <li><span>Development: </span>Guiding projects from initial vision through to grand opening.</li>
            <li><span>Management: </span>Expert operational leadership to maximize efficiency, guest satisfaction, and profitability.</li>
            <li><span>Repositioning: </span>Strategic transformations to revitalize underperforming assets and unlock new market potential.</li>
            <li><span>Refurbishment & Procurement: </span>Comprehensive oversight of renovations, FF&E sourcing, and capital improvements.</li>
            <li><span>Branding: </span>Crafting compelling, market-aligned brand identities and guest experiences.</li>
            <li><span>Training: </span>Developing skilled, service-driven teams through customized hospitality training programs.</li>
            <li><span>Revenue & Channel Management: </span>Optimizing pricing, distribution, and digital strategy to drive performance and profitability. </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Services;