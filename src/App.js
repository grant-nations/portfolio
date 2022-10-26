import './App.css';
import {useState} from "react";
import blue_white from "./planet-gifs/blue-white.gif";
import green from "./planet-gifs/green.gif";
import pink from "./planet-gifs/pink.gif";
import red from "./planet-gifs/red.gif";
import star from "./planet-gifs/star.gif";

import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import AcademicsSection from "./sections/AcademicsSection/AcademicsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import ResumeSection from "./sections/ResumeSection/ResumeSection";

function App() {

    const [sectionView, setSectionView] = useState(false);
    const [projectsView, setProjectsView] = useState(false);
    const [aboutView, setAboutView] = useState(false);
    const [academicsView, setAcademicsView] = useState(false);
    const [contactView, setContactView] = useState(false);
    const [resumeView, setResumeView] = useState(false);

    const handleAboutClick = () => {
        if (!sectionView) {
            setSectionView(true);
            setAboutView(true);
        }
    }
    const handleAcademicsClick = () => {
        if (!sectionView) {
            setSectionView(true);
            setAcademicsView(true);
        }
    }
    const handleContactClick = () => {
        if (!sectionView) {
            setSectionView(true);
            setContactView(true);
        }
    }
    const handleResumeClick = () => {
        if (!sectionView) {
            setSectionView(true);
            setResumeView(true);
        }
    }
    const handleProjectsClick = () => {
        if (!sectionView) {
            setSectionView(true);
            setProjectsView(true);
        }
    }

    const exitSection = () => {
        setAboutView(false);
        setProjectsView(false);
        setAcademicsView(false);
        setContactView(false);
        setResumeView(false);
        setSectionView(false);
    }

    return (
        <div className={sectionView ? "home-page " : "home-page"}>
            <div onClick={exitSection} className={sectionView ? "cloud" : ""}/>
            <header className="home-header">
                <h1 className="home-header-title">
                    Grant Nations
                </h1>
            </header>
            <div className="section-base projects">
                <img onClick={handleProjectsClick} src={star} alt="Star" className="planet-base star"/>
                <h3 onClick={handleProjectsClick} className="base-title projects-title">Projects</h3>
            </div>
            <div className="section-base academics">
                <img onClick={handleAcademicsClick} src={red} alt="Red Planet" className="planet-base red-planet"/>
                <h3 onClick={handleAcademicsClick} className="base-title academics-title">Academics</h3>
            </div>
            <div className="section-base about">
                <img onClick={handleAboutClick} src={green} alt="Green Planet" className="planet-base green-planet"/>
                <h3 onClick={handleAboutClick} className="base-title about-title">About</h3>
            </div>
            <div className="section-base resume">
                <img onClick={handleResumeClick} src={blue_white} alt="Blue Planet" className="planet-base blue-white-planet"/>
                <h3 onClick={handleResumeClick} className="base-title resume-title">Resume</h3>
            </div>
            <div className="section-base contact">
                <img onClick={handleContactClick} src={pink} alt="Pink Planet" className="planet-base pink-planet"/>
                <h3 onClick={handleContactClick} className="base-title">Contact</h3>
            </div>

            <div className="section-container">
                {contactView && <ContactSection exitSection={exitSection}/>}
                {academicsView && <AcademicsSection exitSection={exitSection}/>}
                {aboutView && <AboutSection exitSection={exitSection}/>}
                {projectsView && <ProjectsSection exitSection={exitSection}/>}
                {resumeView && <ResumeSection exitSection={exitSection}/>}
            </div>


        </div>
    );
}

export default App;
