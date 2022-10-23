import "./AcademicsSection.css";
import ReturnToShip from "../ReturnToShip/ReturnToShip";

function AcademicsSection({exitSection}) {
    return (
        <div className="section academics-section">
            <ReturnToShip exitSection={exitSection}/>
        </div>
    )
}

export default AcademicsSection;
