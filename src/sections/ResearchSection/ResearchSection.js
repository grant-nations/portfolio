import "./ResearchSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";


function ResearchSection({exitSection}) {
    return (
        <div className="section">
            <div className="section-header">
                <h2 className="section-title">Research</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
        </div>
    )
}

export default ResearchSection;
