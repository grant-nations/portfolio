import "./AboutSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";

function AboutSection({exitSection}) {

    return (
        <div className="section about-section">
            <div className="section-header">
                <h2 className="section-title">About</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <p className="section-text">Yo, I’m Grant Nations.</p>
            <p className="section-text">I’m a fourth year student at the University of Utah double majoring in computer
                science and physics. In
                my first two years of college, I was also a student-athlete on the Utah Swim and Dive team. My failures
                and successes in athletics have shaped me to be perseverant, hard-working, and competitive. My
                experiences in academics have taught me to be open-minded, always curious, and a big dreamer.
            </p>
            <p className="section-text"> My interests are in social robotics, artificial intelligence, fusion energy, augmented reality,
                and commercial spaceflight. I aim to someday create technology that changes the world for the better.
            </p>
        </div>
    )
}

export default AboutSection;
