import "./AboutSection.css";
import ReturnToShip from "../ReturnToShip/ReturnToShip";

function AboutSection({exitSection}) {

    return (
        <div className="section about-section">
            <ReturnToShip exitSection={exitSection}/>
        </div>
    )
}

export default AboutSection;
