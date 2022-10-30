import "./ContactSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function ContactSection({exitSection}) {
    return (
        <div className="section">
            <div className="section-header">
                <h2 className="section-title">Contact</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <div className="contact-lines-container">
                <div className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faEnvelope}/>
                    <a className="link" target="_blank" rel="noopener noreferrer" href="mailto:nationsgrant@gmail.com">nationsgrant@gmail.com</a>
                </div>
                <div className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin}/>
                    <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grant-nations/">
                        www.linkedin.com/in/grant-nations
                    </a>
                </div>
                <div className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faGithub}/>
                    <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/grant-nations">github.com/grant-nations</a>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
