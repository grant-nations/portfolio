import "./ResumeSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";

function ResumeSection({exitSection}) {
    return (
        <div className="section resume-section">
            <div className="section-header">
                <h2 className="section-title">Resume</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <a className="resume-download" href={`${process.env.PUBLIC_URL}/GrantNationsResume.pdf`}
               download="GrantNationsResume.pdf">Download PDF</a>
            <div>
                <p className="section-subtitle resume-name">Grant Nations</p>
                <p className="contact-links">nationsgrant@gmail.com</p>
                <p className="contact-links"><a className="link contact-links"
                                                href="https://www.linkedin.com/in/grant-nations/">www.linkedin.com/in/grant-nations/</a>
                </p>
                <p className="contact-links"><a className="link contact-links"
                                                href="https://github.com/grant-nations">github.com/grant-nations</a></p>
            </div>
            <div>
                <p className="section-subtitle">Education</p>
                <p className="section-text resume-section-subsection-item">University of Utah, Salt Lake City, UT — BCS
                    Computer Science, BS Physics</p>
                <p className="date-range">Fall 2019 - Spring 2024</p>
                <ul className="section-list">
                    <li>4.0 Cumulative GPA</li>
                    <li>Student athlete on Varsity Swim and Dive, Fall 2019 - Spring 2021</li>
                    <li>Academic Excellence full tuition scholarship recipient</li>
                    <li>National Merit Commended Scholar</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Work History</p>
                <div>
                    <p className="section-text resume-section-subsection-item">KBR — Software Development/Computer
                        Science
                        Intern</p>
                    <p className="date-range">August 2022 - Present, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Assist mission logic team in the development of an autonomous Earth orbiting satellite
                            observation system using a network of high-powered sensors (telescopes) distributed across
                            the
                            globe.
                        </li>
                        <li>Research and develop a mixed-integer programming model and near-optimal scheduler for
                            prioritized observations of Earth orbiting satellites with the expected outcome of producing
                            efficient schedules of high quality observations.
                        </li>
                        <li>Present progress and discuss future direction in biweekly team meetings.</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Science —
                        PANDA (Physics and Astronomy) Network Mentor
                        Intern</p>
                    <p className="date-range">August 2022 - Present, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Lead group activities for freshman students to explore their opportunities within the
                            Physics and Astronomy department and university.
                        </li>
                        <li>Discuss plans with Physics and Astronomy professors to achieve the best outcome for students
                            in the freshman seminar.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Engineering
                        —
                        Undergraduate Research Assistant
                        Intern</p>
                    <p className="date-range">September 2021 - April 2022, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Assist in the research of high temperature reference electrodes for use in molten salt
                            nuclear reactors.
                        </li>
                        <li>Run short term and long term OCP, CV, and EIS analysis of three-electrode cell with
                            high-temperature salt electrolyte to determine production feasibility of reference
                            electrodes.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="section-subtitle">Projects</p>
                <div>
                    <p className="section-text resume-section-subsection-item">Kana Shuffle
                        — <a className="link" href="https://kana-shuffle.herokuapp.com">kana-shuffle.herokuapp.com</a>
                    </p>
                    <ul className="section-list">
                        <li>Solves the problem of memorizing character order when practicing writing hiragana and
                            katakana Japanese characters.
                        </li>
                        <li>Provides users with hiragana and katakana practice sheets that are randomly ordered on each
                            download.
                        </li>
                        <li>Uses React.js, Node, and Express; Hosted on Heroku.</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Pupil
                        — <a className="link" href="https://www.aboutpupil.com">www.aboutpupil.com</a></p>
                    <ul className="section-list">
                        <li>Streamlined the use of hybrid classroom technology for professors and students on college
                            campuses.
                        </li>
                        <li>Implemented using React, Redux, and Django; Landing page hosted on Amplify.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Crown Clothing E-Commerce Application
                        — <a className="link"
                             href="https://heartfelt-frangipane-722cca.netlify.app/">heartfelt-frangipane-722cca.netlify.app/</a>
                    </p>
                    <ul className="section-list">
                        <li>Mock e-commerce application using React, Redux, Firebase, and Styled Components.
                        </li>
                        <li>Implemented using different methods for handling website state, i.e. React Context, Redux
                            Thunks, and Redux Sagas.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="section-subtitle">Certifications</p>
                <ul className="section-list">
                    <li>Mechanical Design Associate (SolidWorks), Dassault Systèmes</li>
                    <li>Machine Learning, Data Science and Deep Learning with Python, Udemy</li>
                    <li>Blockchain Basics, Coursera</li>
                    <li>2021 Complete Python Bootcamp from Zero to Hero in Python, Udemy</li>
                    <li>The Complete 2020 Web Development Bootcamp, Udemy</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Advanced Coursework</p>
                <ul className="section-list">
                    <li>Foundations of Data Analysis</li>
                    <li>Algorithms</li>
                    <li>Software Practice I & II</li>
                    <li>Engineering Probability and Statistics</li>
                    <li>Linear Algebra and Differential Equations</li>
                    <li>Partial Differential Equations for Engineers</li>
                    <li>Computer Security</li>
                    <li>Thermodynamics and Statistical Mechanics</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Technical Skills</p>
                <div>
                    <p className="section-text resume-section-subsection-item">Languages</p>
                    <ul className="section-list">
                        <li>C++, Java, MATLAB, Python, C#, Javascript, Typescript, Solidity, HTML, CSS, SQL</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Frameworks/RTEs/Libraries</p>
                    <ul className="section-list">
                        <li>NumPy, Redux, React, Qt, Express, Node.js</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Tools</p>
                    <ul className="section-list">
                        <li>SolidWorks, AWS, Git, Github, Docker, CodeCommit, Firebase, Stripe, Amplify, Netlify,
                            Heroku
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="section-subtitle">Soft Skills</p>
                <p className="section-text resume-section-subsection-item">Creativity, communication, teamwork,
                    problem-solving, leadership, adaptability, responsibility</p>
            </div>
        </div>
    )
}

export default ResumeSection;
