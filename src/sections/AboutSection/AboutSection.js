import "./AboutSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";

function AboutSection({exitSection}) {

    return (
        <div className="section about-section">
            <div className="section-header">
                <h2 className="section-title">About</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
        </div>
    )
}

export default AboutSection;