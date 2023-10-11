import "./AcademicsSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";

function AcademicsSection({ exitSection }) {
    return (
        <div className="section academics-section">
            <div className="section-header">
                <h2 className="section-title" >Academics</h2>
                <ReturnToShip exitSection={exitSection} />
                <BackRocket exitSection={exitSection} />
            </div>
            <p className="section-text section-description"> I'm a computer science major with a physics minor at the
                University of Utah with a 3.99 GPA.</p>
            <p className="section-text">I started out studying mechanical engineering at the University of Utah, but after one year I realized how cool programming was
                and switched to computer science. A year after being in computer science, I became interested in physics during a conversation about a “space elevator” and
                the next day added physics as a minor. Currently, I am in my fifth and final year and will graduate in the spring of 2024 with a BS in computer science and
                a minor in physics. Following graduation I plan to enroll in a neuroinformatics graduate school program.
            </p>
            <p className="section-text section-separator" >Scholarships and Awards</p>
            <ul className="section-list">
                <li>Wilford and Dana Druk Scholarship, University of Utah 2023</li>
                <li>Shane V. and Robin S. Robison Endowed Scholarship, University of Utah 2023</li>
                <li>Bob and Mary Gilchrist Scholarship, University of Utah 2023</li>
                <li>John Council Memorial Scholarship, Foundation for IT Education 2022</li>
                <li>Inspiring Futures Scholarship, Mister Cares Foundation 2022</li>
                <li>Academic Excellence Scholarship, University of Utah 2019</li>
                <li>National Merit Commended Scholar, National Merit Scholarship Corporation 2019</li>
                <li>Rain Bird Employee Dependent Scholarship Recipient, Rain Bird Scholarship Committee 2019</li>
                <li>Dr. Voie Stuart Chase Coy Scholar-Athlete Award Finalist, Arizona Interscholastic Association 2019</li>
            </ul>

            <p className="section-text section-separator" >Notable University Courses</p>
            <p className="section-list-item-title">Computer science:</p>
            <ul className="section-list">
                <li>CS 5960 Human-AI Alignment</li>
                <li>CS 5353 Deep Learning</li>
                <li>CS 5350 Machine Learning</li>
                <li>CS 5610 Interactive Computer Graphics</li>
                <li>ECE 3610 Fundamentals of Robotics and Cyberphysical Systems</li>
                <li>CS 4440 Computer Security</li>
                <li>CS 4400 Computer Systems</li>
                <li>CS 4150 Algorithms</li>
                <li>CS 3505 Software Practice II</li>
                <li>CS 3500 Software Practice</li>
            </ul>
            <p className="section-list-item-title">Math:</p>
            <ul className="section-list">
                <li>MATH 3160 Applied Complex Variables</li>
                <li>MATH 3150 Partial Differential Equations for Engineers</li>
            </ul>
            <p className="section-list-item-title">Physics:</p>
            <ul className="section-list">
                <li>PHYS 3760 Thermodynamics and Statistical Mechanics</li>
                <li>PHYS 3740 Introduction to Quantum Mechanics and Relativity</li>
            </ul>
            <p className="section-text section-separator" >Online Courses</p>
            <ul className="section-list">
                <li>Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL), Udemy</li>
                <li>Blockchain Basics, Coursera</li>
                <li>Machine Learning, Data Science and Deep Learning with Python, Udemy</li>
                <li>2021 Complete Python Bootcamp from Zero to Hero in Python, Udemy</li>
                <li>The Complete 2020 Web Development Bootcamp, Udemy</li>
            </ul>

        </div>
    )
}

export default AcademicsSection;
