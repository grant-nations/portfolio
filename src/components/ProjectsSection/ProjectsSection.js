import "./ProjectsSection.css";
import ReturnToShip from "../ReturnToShip/ReturnToShip";

function ProjectsSection({exitSection}) {
    return (
        <div className="section projects-section">
            <ReturnToShip exitSection={exitSection}/>

        </div>
    )
}

export default ProjectsSection;
