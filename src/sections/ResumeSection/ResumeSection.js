import "./ResumeSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";

function ResumeSection({exitSection}) {

    const windowOrigin = window.location.origin;

    const downloadResume = () => {
        fetch(windowOrigin + "/GrantNationsResume.pdf")
            .then((response) => response.blob())
            .then((blob) => {
                // Creating blob link to download
                const fileURL = window.URL.createObjectURL(
                    new Blob([blob]));
                const link = document.createElement('a');
                link.href = fileURL;
                link.setAttribute(
                    'download',
                    "GrantNationsResume.pdf"
                );
                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            })
    }

    return (
        <div className="section resume-section">
            <div className="section-header">
                <h2 className="section-title">Resume</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <button className="resume-download" type="button" onClick={downloadResume}>Download PDF</button>
            <div>
                <p className="section-subtitle resume-name">Grant Nations</p>
                <div className="resume-links-flex">
                    <a href="mailto:nationsgrant@gmail.com" target="_blank" rel="noopener noreferrer"
                       className="link contact-links">nationsgrant@gmail.com</a>
                    <a className="link contact-links" target="_blank" rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/grant-nations/">www.linkedin.com/in/grant-nations/</a>

                    <a className="link contact-links" target="_blank" rel="noopener noreferrer"
                       href="https://github.com/grant-nations">github.com/grant-nations</a>
                </div>
            </div>
            <div>
                <p className="section-subtitle">Education</p>
                <p className="section-text resume-section-subsection-item">University of Utah, Salt Lake City, UT — BCS
                    Computer Science, BS Physics</p>
                <p className="date-range">Fall 2019 - Spring 2024</p>
                <ul className="section-list">
                    <li>4.0 Cumulative GPA</li>
                    <li>Computational physics emphasis</li>
                    <li>Academic Excellence full tuition scholarship recipient</li>
                    <li>National Merit Commended Scholar</li>
                    <li>Student athlete on Varsity Swim and Dive, Fall 2019 - Spring 2021</li>
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
                        <li>Research and develop a mixed-integer nonlinear programming model and parallel machine
                            scheduler for observations of Earth-orbiting satellites to produce dense, high quality
                            schedules.
                        </li>
                        <li>Implement scheduling model in Python using the GEKKO optimization library.
                        </li>
                        <li>Modify scheduling API to handle multi-site observation schedule requests.</li>
                        <li>Communicate progress and future direction in biweekly team meetings.</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Science —
                        PANDA (Physics and Astronomy) Network Mentor</p>
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
                        — Undergraduate Research Assistant</p>
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
                        — <a className="link" target="_blank" rel="noopener noreferrer"
                             href="https://kana-shuffle.herokuapp.com">kana-shuffle.herokuapp.com</a>
                    </p>
                    <ul className="section-list">
                        <li>Solve the problem of memorizing character order when practicing writing hiragana and
                            katakana Japanese characters.
                        </li>
                        <li>Create randomly ordered hiragana and katakana for users to download.
                        </li>
                        <li>Use React.js, Node, Express, and Heroku.</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Pupil
                        — <a className="link" target="_blank" rel="noopener noreferrer"
                             href="https://www.aboutpupil.com">www.aboutpupil.com</a></p>
                    <ul className="section-list">
                        <li>Lead a team of three students working on a hardware/software solution to streamline the use
                            of hybrid classroom technology for professors and students on college campuses.
                        </li>
                        <li>Prototype automated recording system using a Raspberry Pi, Django, and Celery.
                        </li>
                        <li>Use React, Redux, Django, Raspberry Pi, Celery, and Amazon S3.</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Crown Clothing E-Commerce Application
                        — <a className="link" target="_blank" rel="noopener noreferrer"
                             href="https://heartfelt-frangipane-722cca.netlify.app/">heartfelt-frangipane-722cca.netlify.app/</a>
                    </p>
                    <ul className="section-list">
                        <li>Simulate an at-scale e-commerce application for a fake brand Crown Clothing using React, Redux, and Firebase.
                        </li>
                        <li>
                            Maintain user sessions with Redux Persist.
                        </li>
                        <li>
                            Handle application state with React Context, Redux Thunks, and Redux Sagas.
                        </li>
                        <li>Use React, Redux, and Firebase.</li>
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
                    <li>Partial Differential Equations for Engineers</li>
                    <li>Computer Security</li>
                    <li>Thermodynamics and Statistical Mechanics</li>
                    <li>Computer Systems</li>
                    <li>Interactive Computer Graphics</li>
                    <li>Intermediate Mechanics</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Technical Skills</p>
                <div>
                    <p className="section-text resume-section-subsection-item">Languages</p>
                    <ul className="section-list">
                        <li>C, C++, Java, MATLAB, Python, C#, Javascript, Typescript, Solidity, HTML, CSS, SQL</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Frameworks/RTEs/Libraries</p>
                    <ul className="section-list">
                        <li>NumPy, GEKKO, Astroplan, Skyfield, SciPy, Redux, React, Qt, Express, Node.js</li>
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
                <ul className="section-list">
                    <li>Creativity, communication, teamwork,
                        problem-solving, leadership, adaptability, responsibility
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResumeSection;
