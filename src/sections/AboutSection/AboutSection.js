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
            <p className="section-text">I’m a fourth year student at the University of Utah majoring in computer science with a physics minor. In my first two years of college, I was also a student athlete on the Swim and Dive team. I’m interested in many different things, but mainly I enjoy learning about history, philosophy, and artificial intelligence. Specifically, I aim to pursue a PhD in computer science researching how consciousness can emerge from deep learning.
            </p>
            <p className="section-text"> In my free time, I like to hang out with my friends, rock climb, snowboard, read, and write.
            </p>
        </div>
    )
}

export default AboutSection;
