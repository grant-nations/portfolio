import "./ContactSection.css";
import ReturnToShip from "../ReturnToShip/ReturnToShip";

function ContactSection({exitSection}) {
    return (
        <div className="section contact-section">
            <ReturnToShip exitSection={exitSection}/>
        </div>
    )
}

export default ContactSection;
