import "./ResumeSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";

function ResumeSection({ exitSection }) {

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
                <ReturnToShip exitSection={exitSection} />
                <BackRocket exitSection={exitSection} />
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
                <p className="section-text resume-section-subsection-item">University of Utah, Salt Lake City, UT — BS
                    Computer Science, Physics Minor</p>
                <p className="date-range">Fall 2019 - Spring 2024</p>
                <ul className="section-list">
                    <li>4.0 Major/3.99 Cumulative GPA</li>
                    <li>UROP Scholar, Fall 2023</li>
                    <li>7x scholarship recipient</li>
                    <li>National Merit Commended Scholar</li>
                    <li>Varsity Swim and Dive student athlete, Fall 2019 - Spring 2021</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Publications</p>
                <ul className="section-list">
                    <li>Nelson, C. Luke, Grant Nations, and Daniel S. Drew. "Empirical Study of Ceiling Proximity Effects and Electrostatic Adhesion for Small-scale Electroaerodynamic Thrusters." (Under review) (2024).
                    </li>
                    <li>Nations, Grant, C. Luke Nelson, and Daniel S. Drew. "Empirical Study of Ground Proximity Effects for Small-scale Electroaerodynamic Thrusters." 2024 ICRA Proceedings (2023).
                    </li>
                    <li>Nations, Grant and Justin Fletcher. “An Integer Programming Approach to Observation Scheduling for Space Domain Awareness.” 2024 IEEE Aerospace Proceedings (2023).
                    </li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Work History</p>
                <div>
                    <p className="section-text resume-section-subsection-item">iota Biosciences — Sensor Research Intern
                    </p>
                    <p className="date-range">June 2024 - Present, Alameda, CA</p>
                    <ul className="section-list">
                        <li>Use Numpy, Pandas, Scikit-learn, PyTorch, etc. to implement machine learning techniques such as random forests and neural networks to predict manufacturing quality based on electrochemical data.
                        </li>
                        <li>Build an easily scalable, modular repository for the development and deployment of classification and regression models based on electrochemical data in Python.
                        </li>
                        <li>Automate analysis and visualization of electrochemical data through a modular repository with easy-to-use interfaces designed for non-technical user interaction.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Engineering — Robotics Research Assistant
                    </p>
                    <p className="date-range">July 2023 - June 2024, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Automate physical experiments with Python to collect over 180 million datapoints with a single command.
                        </li>
                        <li>Build Python API for laboratory equipment: oscilloscope, load cell, high voltage power supply, programmable power supply, and 3D printer.
                        </li>
                        <li>Process millions of data points per experiment for plotting and analysis.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">KBR — Software Engineering Intern</p>
                    <p className="date-range">August 2022 - October 2023, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Research and develop parallelized scheduling algorithms implementing logic-based benders decomposition for the observation of Earth-orbiting satellites.
                        </li>
                        <li>Optimize code to reduce approximately 400,000 sensor transition time calculations from over 1 hour to under 4 seconds.
                        </li>
                        <li>Use the Pyomo and GEKKO optimization libraries to construct and solve mixed integer, integer, and binary programming scheduling models.
                        </li>
                        <li>Write robust unit tests, run code coverage reports, and profile expensive operations to ensure fast and reliable code.
                        </li>
                        <li>Communicate progress and discuss future direction in team standup meetings.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Science —
                        Physics and Astronomy Network Mentor and Committee Member</p>
                    <p className="date-range">August 2022 - June 2023, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Introduce new program initiatives such as industry-focused discussion topics to help students achieve their career goals.
                        </li>
                        <li>Prepare and lead group activities for freshman students to explore their opportunities within the Physics and Astronomy department and university.
                        </li>
                        <li>Serve as a mentor to freshman students to aid in their navigation of career paths, academics, and the university.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">University of Utah College of Engineering
                        — Undergraduate Research Assistant (Nuclear Materials Pyroprocessing)</p>
                    <p className="date-range">September 2021 - April 2022, Salt Lake City, UT</p>
                    <ul className="section-list">
                        <li>Assist in the research of high temperature reference electrodes for use in molten salt
                            nuclear reactors.
                        </li>
                        <li>Run short term and long term OCP, CV, and EIS analysis of three-electrode cell with
                            high-temperature salt electrolyte to determine production feasibility of reference
                            electrodes.
                        </li>
                        <li>Analyze electrolyte solution during long term tests using ICP-MS and auto titration.</li>
                        <li>Use inductively coupled plasma mass spectrometry (ICP-MS) to detect concentrations of
                            specified metals within electrolyte solutions.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="section-subtitle">Projects</p>
                <div>
                    <p className="section-text resume-section-subsection-item">Abysm X-Bot
                        — <a className="link" target="_blank" rel="noopener noreferrer"
                            href="https://twitter.com/abysm_bot">twitter.com/abysm_bot</a>
                    </p>
                    <ul className="section-list">
                        <li>Build an X (Twitter) bot that automatically scrapes top US news sites and reports on daily events.
                        </li>
                        <li>Interact with OpenAI’s GPT 3.5 API for site summaries and tweet generation.
                        </li>
                        <li>Scrape hundreds of news articles daily using a headless Selenium Firefox browser.</li>
                    </ul>
                </div>
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
                        <li>Simulate an at-scale e-commerce application for a fake brand Crown Clothing using React,
                            Redux, and Firebase.
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
                    <li>Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)</li>
                    <li>Machine Learning, Data Science and Deep Learning with Python, Udemy</li>
                    <li>Blockchain Basics, Coursera</li>
                    <li>2021 Complete Python Bootcamp from Zero to Hero in Python, Udemy</li>
                    <li>The Complete 2020 Web Development Bootcamp, Udemy</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Advanced Coursework</p>
                <ul className="section-list">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Human-AI Alignment</li>
                    <li>Software Practice I & II</li>
                    <li>Partial Differential Equations for Engineers</li>
                    <li>Computer Security</li>
                    <li>Thermodynamics and Statistical Mechanics</li>
                    <li>Computer Systems</li>
                    <li>Interactive Computer Graphics</li>
                </ul>
            </div>
            <div>
                <p className="section-subtitle">Technical Skills</p>
                <div>
                    <p className="section-text resume-section-subsection-item">Languages (in order of fluency)</p>
                    <ul className="section-list">
                        <li>Python, Javascript, HTML, CSS,  Java, MATLAB, C++, C, C#</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Frameworks/RTEs/Libraries</p>
                    <ul className="section-list">
                        <li>Pytorch, NumPy, Scikit-learn, Pyomo, GEKKO, Astroplan, Redux, React, Qt</li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Software Tools</p>
                    <ul className="section-list">
                        <li>Google Cloud Storage, SolidWorks, AWS, Git, Github, Docker, CodeCommit, Firebase, Stripe, Amplify, Netlify,
                            Heroku, Photoshop
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="section-text resume-section-subsection-item">Skills</p>
                    <ul className="section-list">
                        <li>Soldering, UV-laser micromachining, MIG welding, machining, SLA and FDM 3D printing, woodworking
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
