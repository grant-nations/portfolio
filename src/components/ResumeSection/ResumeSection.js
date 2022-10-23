import "./ResumeSection.css";
import ReturnToShip from "../ReturnToShip/ReturnToShip";

function ResumeSection({exitSection}) {
    return (
        <div className="section resume-section">
            <ReturnToShip exitSection={exitSection}/>
        </div>
    )
}

export default ResumeSection;
