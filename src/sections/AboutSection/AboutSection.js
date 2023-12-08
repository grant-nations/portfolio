import "./AboutSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutSection({ exitSection }) {

    return (
        <div className="section about-section">
            <div className="section-header">
                <h2 className="section-title">About</h2>
                <ReturnToShip exitSection={exitSection} />
                <BackRocket exitSection={exitSection} />
            </div>
            <p className="section-text"> Yo, I’m Grant Nations.</p>
            <p className="section-text">Currently, I’m in my fifth and final semester at the University of Utah, majoring in computer science with a physics minor. I work as a research assistant in the Drew Research Lab, where I mainly focus on methods for improving thrust efficiency in electroaerodynamic thrusters. At the same time, I’m pursuing a deep reinforcement learning approach to scheduling for Space Domain Awareness as a machine learning intern with KBR.
            </p>
            <p className="section-text">I have diverse interests. I like things cyberpunk, gothic, rustic, and shoegaze. My favorite pastimes are reading (I enjoy reading Camus, Bukowski, and Ishiguro, to name a few), writing, and traveling. I also like thinking about big questions and learning concepts and skills that will one day help me answer them. For example, what physical structures give humans the ability to question their own existence? Can they be replicated in a silicon-based system? Along this vein, there are many more questions than answers, which is in part what makes it exciting. In pursuit of answers, I hope to study neuroscience and robotics in graduate school and experiment with groundbreaking approaches to physical structures that give rise to emergent behavior.
            </p>
            <p className="section-text">Along my journey, I’d like to do what I can to reduce the amount of suffering within humanity. Toward this end, I’ll continue to learn as much as I can about the world and the absurd beings that make it worth experiencing.
            </p>
            <div className="contact-lines-container">
                <div style={{ marginRight: "10px" }} className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faEnvelope} />
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="mailto:nationsgrant@gmail.com">nationsgrant@gmail.com</a>
                </div>
                <div style={{ marginRight: "10px" }} className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grant-nations/">
                        www.linkedin.com/in/grant-nations
                    </a>
                </div>
                <div className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="https://github.com/grant-nations">github.com/grant-nations</a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
