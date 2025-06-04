import "../statsstyles.css"
import Card from "../components/card";
import Globe from "../assets/globe.png"
import Building from "../assets/hotel-building.png"
import Lightbulb from "../assets/lightbulb.png"

function Stats(){
  return (
    <>
      <div className="stats-container">
        <Card icon={Globe} title="15+" subtitle="Iconic Hotels"/>
        <Card icon={Building} title="Global" subtitle="Presence"/>
        <Card icon={Lightbulb} title="Visionary" subtitle="Developments"/>
      </div>
    </>
  )
}

export default Stats;