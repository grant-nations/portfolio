import "./AcademicsSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";

function AcademicsSection({exitSection}) {
    return (
        <div className="section academics-section">
            <div className="section-header">
                <h2 className="section-title" >Academics</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <p className="section-text section-description"> I'm a computer science major with a physics minor at the
                University of Utah with a 3.99 GPA.</p>
            <p className="section-text">I started out studying mechanical engineering at the University of Utah, but
                after one year I realized how cool programming was and switched to computer science. A year after being
                in computer science, I became interested in physics during a conversation about a “space elevator” and
                the next day added physics as a minor. Currently, I am in my fourth year out of five and will
                graduate in the spring of 2023 with a BCS in computer science and a minor in physics.
                Following graduation I plan to earn my PhD in computer science researching the emergence of
                consciousness from deep learning.
            </p>
            <p className="section-text section-separator" >University Courses</p>
            <p className="section-list-item-title">Computer science:</p>
            <ul className="section-list">
                <li>CS 5960 Human-AI Alignment <span style={{color: "cyan"}}>(next semester)</span></li>
                <li>CS 5610 Interactive Computer Graphics</li>
                <li>CS 5353 Deep Learning <span style={{color: "cyan"}}>(next semester)</span></li>
                <li>CS 4440 Computer Security</li>
                <li>CS 4400 Computer Systems</li>
                <li>CS 4150 Algorithms</li>
                <li>CS 4000 Senior Capstone Design <span style={{color: "cyan"}}>(next semester)</span></li>
                <li>CS 3810 Computer Organization</li>
                <li>ECE 3610 Fundamentals of Robotics and Cyberphysical Systems</li>
                <li>CS 3505 Software Practice II</li>
                <li>CS 3500 Software Practice</li>
                <li>CS 3100 Models of Computation <span style={{color: "cyan"}}>(next semester)</span></li>
                <li>CS 3190 Foundations of Data Analysis</li>
                <li>CS 3130 Engineering Probability and Statistics</li>
                <li>CS 2420 Intro to Algorithms and Data Structures</li>
                <li>CS 2100 Discrete Structures</li>
                <li>CS 1410 Object-Oriented Programming</li>
            </ul>
            <p className="section-list-item-title">Math:</p>
            <ul className="section-list">
                <li>MATH 3160 Applied Complex Variables</li>
                <li>MATH 3150 Partial Differential Equations for Engineers</li>
                <li>MATH 2250 Differential Equations and Linear Algebra</li>
                <li>MATH 2210 Calculus III</li>
                <li>MATH 1220 Calculus II</li>
            </ul>
            <p className="section-list-item-title">Physics:</p>
            <ul className="section-list">
                <li>PHYS 3760 Thermodynamics and Statistical Mechanics</li>
                <li>PHYS 3740 Introduction to Quantum Mechanics and Relativity</li>
                <li>PHYS 2225 Physics Lab II for Scientists and Engineers</li>
                <li>PHYS 2235 Computational Lab</li>
                <li>PHYS 2220 Physics For Scientists and Engineers II</li>
                <li>PHYS 2215 Physics Lab I for Scientists and Engineers</li>
                <li>PHYS 2210 Physics For Scientists and Engineers I</li>
            </ul>
            <p className="section-list-item-title">Other useful stuff:</p>
            <ul className="section-list">
                <li>ME EN 1000 Introduction to Design for Engineering Systems</li>
                <li>ME EN 1010 Computer Problem Solving for Engineering Systems</li>
                <li>CHEM 1210 General Chemistry I</li>
                <li>CHEM 1215 General Chemistry Lab I</li>
                <li>WRTG 3015 Professional Writing</li>
                <li>PSY 1010 General Psychology</li>
            </ul>
            <p className="section-text section-separator" >Scholarships and Awards</p>
            <ul className="section-list">
                <li className="award-list-item">Bob and Mary Gilchrist Scholarship, University of Utah 2023
                    <ul>
                        <li>A merit-based scholarship awarded to students within the John and Marcia Price College of Engineering.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">John Council Memorial Scholarship, Foundation for IT Education 2022
                    <ul>
                        <li>A scholarship awarded to individuals seeking a degree in an information technology-related
                            program on the basis of scholastic ability and leadership potential.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">Inspiring Futures Scholarship, Mister Cares Foundation 2022
                    <ul>
                        <li>A financial award that supports individuals passionate about improving their knowledge and
                            furthering their education.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">Academic Excellence Scholarship, University of Utah 2019
                    <ul>
                        <li>A full-tuition scholarship for high academic nonresident high school seniors who will be
                            entering freshmen, based on cumulative GPA and course rigor.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">National Merit Commended Scholar, National Merit Scholarship Corporation
                    2019
                    <ul>
                        <li>An award granted by the National Merit Scholarship Corporation to students among the top
                            50,000 high scorers on the PSAT based on a nationally applied Selection Index score.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">Rain Bird Employee Dependent Scholarship Recipient, Rain Bird
                    Scholarship Committee 2019
                    <ul>
                        <li>Each year Rain Bird offers the Employee Dependent Scholarship Program to dependents of
                            regular employees. This award is presented to 5 outstanding college bound students based
                            upon academic achievement, community service, leadership, and employment.
                        </li>
                    </ul>
                </li>
                <li className="award-list-item">Dr. Voie Stuart Chase Coy Scholar-Athlete Award Finalist, Arizona
                    Interscholastic Association 2019
                    <ul>
                        <li>The Dr. Voie Stuart Chase Coy Scholar Activity & Athlete Awards are presented to those who
                            have participated in AIA sanctioned athletics and/or activities while achieving academic
                            success and demonstrating integrity, and character, on and off the playing field. Award
                            recipients are chosen by a selection committee comprised of representatives from AIA member
                            schools.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default AcademicsSection;
