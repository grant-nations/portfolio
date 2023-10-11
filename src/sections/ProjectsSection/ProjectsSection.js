import "./ProjectsSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";
// import AbysmTimeline from "../../components/AbysmTimeline/AbysmTimeline";
import AbysmProjectDisplay from "../../components/AbysmProjectDisplay/AbysmProjectDisplay";

// import crustang_surgery from "./photos/crustang-surgery.jpg";
import dani_cali_engine from "./photos/dani-cali-engine.JPG";
import dani_cali_paint_shop from "./photos/dani-cali-paint-shop.JPG";
import dani_cali_roller from "./photos/dani-cali-roller.JPEG";
import pupil_lect from "./photos/pupil-lectures.jpg";
import pupil_landing from "./photos/pupil-landing.jpg";
import react_home from "./photos/react-home.jpg";
import react_signup from "./photos/react-signup.jpg";
import hiragana_pdf from "./photos/hiragana-shuffle-pdf.jpg";
import kana_shuffle from "./photos/kana-shuffle-home.jpg";
import twenty84 from "./photos/twenty_84_gif_clipchamp.gif";
import { useState } from "react";
import BackRocket from "../../components/BackRocket/BackRocket";
import dc_engine from "./photos/dc_engine.JPG"

function ProjectsSection({ exitSection }) {

    const mustangDescription = ["In 2015, I got a 1966 Mustang as my first car. It didn’t have an engine, the transmission was hanging by a wire, and the floors had gaping holes in them. Over the course of the next year, I went from knowing nothing about cars to rebuilding my own, and as a sophomore in high school I got to have a loud, slightly rusty yellow hot rod as my daily driver. My friends called it “The Crustang”, and the name stuck. Sadly, someone on their phone rear ended me at a stop light one day, totalling my car.",
        "I got to build another Mustang though, and this time around I knew what I was doing. I spent another year turning another 1966 Mustang with an inline-six engine into my dream car. I took the newly-rebuilt V8 engine, four speed manual transmission, suspension, and anything else I could from The Crustang to beef up my new car. I named it “Dani California” after the song by the Red Hot Chili Peppers."]

    const pupilDescription = ["Pupil was an attempt at a software/hardware solution to the difficulty that students and professors faced with hybrid classrooms. Pupil had two main goals: To provide professors with a way to automatically record and upload their lectures online based on their class schedule, and to give students convenient online access to recordings of their in-person lectures. In this way, students get the benefit of lecture recordings and professors lose the hassle of handling the recording.",
        "In this project we set up a Raspberry Pi with a webcam to automatically record and upload video according to a schedule. I was in charge of the student and professor user interfaces using React and Redux, from wireframe to mockup to implementation. Jan, my main partner in this project, was in charge of the Django backend and using Celery to initiate recording on the Raspberry Pi. "]

    const twenty84Description = ["The year is 2084...", "Immortality is available to a select few, one of which is Elon Musk (of course). From the result of a Twitter poll, Musk has decided to launch a siege on Earth from his command base on Mars. It is up to you, the final Earth astronaut, to defend Earth from Musk's army of Tesla spaceships. (An arcade-style pixel art game made with pygame.)"]

    const twenty84Photos = [{
        img: twenty84,
        name: "twenty_84",
        caption: ""
    }]

    const mustangPhotos = [
        {
            img: dani_cali_paint_shop,
            name: "dani_cali_paint_shop",
            caption: "Dani California sitting outside of the paint shop."
        },
        {
            img: dc_engine,
            name: "dc_engine",
            caption: "Open engine surgery."
        },
        {
            img: dani_cali_engine,
            name: "dani_cali_engine",
            caption: "Dani California's engine bay featuring a bored-out 289."
        },
        {
            img: dani_cali_roller,
            name: "dani_cali_roller",
            caption: "Cruising in the finished product."
        }
    ];
    const pupilPhotos = [
        { img: pupil_lect, name: "pupil_lectures", caption: "A mock-up for a student's lectures view." },
        { img: pupil_landing, name: "pupil_landing", caption: "Pupil landing page." }
    ]

    const kanaPhotos = [
        { img: kana_shuffle, name: "kana_shuffle", caption: "Kana Shuffle web application." },
        { img: hiragana_pdf, name: "pupil_landing", caption: "A shuffled hiragana practice sheet." }
    ]

    const reactPhotos = [
        { img: react_home, name: "react_home", caption: "The home page for the fake brand Crown Clothing." },
        { img: react_signup, name: "react_signup", caption: "Crown Clothing signup page." }
    ]

    const [lockScroll, setLockScroll] = useState(false);

    return (
        <div className={`section ${lockScroll ? "scroll-lock" : "scroll-auto"}`}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ReturnToShip exitSection={exitSection} />
                <BackRocket exitSection={exitSection} />
            </div>
            <div>
                {/* <AbysmTimeline/>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="August 2023"
                    name="Abysm"
                    descriptions={[]}
                    images={[]}
                    links={[
                        {href: "https://twitter.com/abysm_bot", text: "twitter.com/abysm_bot"},
                        {href: "https://github.com/grant-nations/turnoff", text: "github.com/grant-nations/turnoff"}
                    ]}
                /> */}

                <AbysmProjectDisplay />

                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="February 2023"
                    name="2084"
                    descriptions={twenty84Description}
                    images={twenty84Photos}
                    imgStyle={{ objectFit: "contain", marginLeft: "auto", width: "unset" }}
                    links={[
                        { href: "https://github.com/grant-nations/2084", text: "github.com/grant-nations/2084" }
                    ]}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="2015"
                    endDate="2019"
                    name="The Crustang and Dani California"
                    descriptions={mustangDescription}
                    images={mustangPhotos}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="July 2022"
                    name="Kana Shuffle"
                    descriptions={["Kana Shuffle is a web application that allows users to download Japanese hiragana, katakana, and romaji practice sheets whose characters are in a different order each time. It addresses a problem I noticed when learning to read Japanese, in that I had a difficult time remembering hiragana and katakana if the worksheet I was using was in a different order. This application is built using Node.js/express backend and React.js frontend."]}
                    images={kanaPhotos}
                    links={[
                        { href: "https://kana-shuffle.herokuapp.com/", text: "kana-shuffle.herokuapp.com" },
                        { href: "https://github.com/grant-nations/kana-shuffle", text: "github.com/grant-nations/kana-shuffle" }
                    ]}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="September 2021"
                    endDate="January 2022"
                    name="Pupil"
                    links={[
                        { href: "https://www.aboutpupil.com", text: "www.aboutpupil.com" },
                        { href: "https://github.com/PUPILorg/pupil-frontend", text: "github.com/PUPILorg/pupil-frontend" },
                        { href: "https://github.com/PUPILorg/pupil_landing_frontend", text: "github.com/PUPILorg/pupil_landing_frontend" }
                    ]}
                    descriptions={pupilDescription}
                    images={pupilPhotos} />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="May 2022"
                    name="React E-Commerce Application"
                    descriptions={["This project is a mock e-commerce application for the fake brand Crown Clothing. It was built using React, TypeScript, Redux, Firebase, and Styled Components. Different branches in the repository display different methods for handling website state, i.e. React Context, Redux Thunks, and Redux Sagas."]}
                    images={reactPhotos}
                    links={[
                        { href: "https://heartfelt-frangipane-722cca.netlify.app/", text: "heartfelt-frangipane-722cca.netlify.app" },
                        { href: "https://github.com/grant-nations/crown-clothing", text: "github.com/grant-nations/crown-clothing" }
                    ]}
                />

            </div>
        </div>
    )
}

export default ProjectsSection;
