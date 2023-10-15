import "./AboutSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function AboutSection({exitSection}) {

    return (
        <div className="section about-section">
            <div className="section-header">
                <h2 className="section-title">About</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <p className="section-text"> Yo, I’m Grant Nations.</p>
            <p className="section-text">Currently, I’m in my fifth and final semester at the University of Utah, majoring in computer science with a physics minor. I work as a research assistant in the Drew Research Lab, where I mainly focus on methods for improving thrust efficiency in electroaerodynamic thrusters. At the same time, I’m pursuing a deep reinforcement learning approach to scheduling for Space Domain Awareness as a machine learning intern with KBR. 
            </p>
            <p className="section-text">I have diverse interests. I like things cyberpunk, gothic, rustic, and shoegaze. 
            My favorite pastimes are reading (I enjoy reading Bukowski, Camus, Plath, and Ishiguro, to name a few), writing,
             traveling, swimming, and watching movies. I also like thinking about big questions and learning concepts and skills
                that will one day help me to answer them. The biggest philosophical questions often start with <span style={{ fontStyle: "italic" }}>why</span> (<span style={{ fontStyle: "italic" }}>why</span> do we exist?),
                but I’m more interested in <span style={{ fontStyle: "italic" }}>how</span>. (<span style={{ fontStyle: "italic" }}>how</span> do we have the ability to even ask such questions?) I’d like to figure this out, and the approach I’m interested in is reverse-engineering. What can we learn from our own biological structure that will allow us to create a thinking, feeling (robot) being? In turn, what can this being teach us about ourselves? Here, there are many more questions than answers, which is in part what makes it such an exciting field to dive into. In pursuit of answers, I hope to study neuroinformatics and robotics in graduate school and experiment with novel, groundbreaking approaches to constructing complicated physical structures that give rise to emergent behavior.
            </p>
            <div className="contact-lines-container">
                <div style={{marginRight: "10px"}} className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faEnvelope}/>
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="mailto:nationsgrant@gmail.com">nationsgrant@gmail.com</a>
                </div>
                <div style={{marginRight: "10px"}} className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin}/>
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grant-nations/">
                        www.linkedin.com/in/grant-nations
                    </a>
                </div>
                <div className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faGithub}/>
                    <a className="link about-link" target="_blank" rel="noopener noreferrer" href="https://github.com/grant-nations">github.com/grant-nations</a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
