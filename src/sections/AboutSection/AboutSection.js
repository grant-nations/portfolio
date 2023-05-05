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
            <p className="section-text"><span style={{color: "cyan"}}>Yo</span>, I’m Grant Nations.</p>
            <p className="section-text">I’m a computer science undergraduate student at the University of Utah.
                Currently, I’m also working as an operations research engineering intern at KBR. In this role, I’m
                focused on developing optimal scheduling strategies for satellite observations across a network of
                ground-based sensors.
            </p>
            <p className="section-text">My interests are diverse and span a range of fields including artificial
                intelligence, robotics, philosophy, and physics. While I am passionate about exploring all of these
                fields, I have the most extensive knowledge and experience within artificial intelligence. After I
                finish my bachelor’s in computer science, I plan on shifting my focus to AI within robotics.
            </p>
            <p className="section-text">Over the next several years, I hope to work on lots of cool robots and pursue
                an answer to the question: <span style={{color: "cyan"}}>Is human consciousness unique?</span> While some believe that artificial general
                intelligence will emerge from future large language models, I believe that it will only emerge as a
                product of learning within the physical world. Aside from satisfying my philosophical curiosity, I hope
                to work on robots that aid in advancing humanity toward a more just and egalitarian society.
            </p>
            <p className="section-text">In my free time, I tend to bounce between several different pastimes. My most
                frequent favorites are reading, eating food with friends, watching movies, and watching shmovies
                (show-movies). I especially like reading realistic fiction and poetry—my current favorite author being Bukowski.</p>

            <div className="contact-lines-container">
                <div style={{marginRight: "10px"}} className="contact-line">
                    <FontAwesomeIcon className="icon" size="2x" icon={faEnvelope}/>
                    <a className="link" target="_blank" rel="noopener noreferrer" href="mailto:nationsgrant@gmail.com">nationsgrant@gmail.com</a>
                </div>
                <div style={{marginRight: "10px"}} className="contact-line">
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

export default AboutSection;
