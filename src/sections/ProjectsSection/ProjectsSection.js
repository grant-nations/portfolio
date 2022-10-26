import "./ProjectsSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";

function ProjectsSection({exitSection}) {
    return (
        <div className="section projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <p className="section-text">
                COMING SOON.
            </p>
        </div>
    )
}

export default ProjectsSection;
