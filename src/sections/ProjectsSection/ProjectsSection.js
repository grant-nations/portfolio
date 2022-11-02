import "./ProjectsSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";

import crustang_surgery from "./photos/crustang-surgery.jpg";
import dani_cali_engine from "./photos/dani-cali-engine.JPG";
import dani_cali_paint_shop from "./photos/dani-cali-paint-shop.JPG";
import dani_cali_roller from "./photos/dani-cali-roller.JPEG";
import impeller_pump from "./photos/impeller-pump.jpg";
import lathe from "./photos/lathe.jpg";
import mill from "./photos/mill.jpg";
import pump_demo from "./photos/pump-demo.jpg";
import pump_transmission from "./photos/pump-transmission.jpg";
import tach_mount_1 from "./photos/tach-mount-1.jpg";
import tach_mount_2 from "./photos/tach-mount-2.JPG";
import pupil_lect from "./photos/pupil-lectures.jpg";
import pupil_landing from "./photos/pupil-landing.jpg";
import react_home from "./photos/react-home.jpg";
import react_signup from "./photos/react-signup.jpg";
import hiragana_pdf from "./photos/hiragana-shuffle-pdf.jpg";
import kana_shuffle from "./photos/kana-shuffle-home.jpg";
import jetta from "./photos/jetta.jpg";
import {useState} from "react";
import BackRocket from "../../components/BackRocket/BackRocket";

function ProjectsSection({exitSection}) {

    const schedulerDescription = ["Space Domain Awareness (SDA) is the study and monitoring of satellites orbiting the earth. As a software development/computer science intern at KBR, I am responsible for developing a mixed-integer programming (MIP) model to be used in scheduling SDA observations. This project has significant real-world impacts and is by far the largest and most complex programming problem that I have tackled. Since starting work on it in August, I have nearly finished developing the MIP model and will soon start testing with real data. Going forward, I will be researching and developing decomposition methods for optimally solving the MIP as well as faster, heuristic-based algorithms for adequate solutions."]
    const mustangDescription = ["In 2015, I got a 1966 Mustang as my first car. It didn’t have an engine, the transmission was hanging by a wire, and the floors had gaping holes in them. Over the course of the next year, I went from knowing nothing about cars to rebuilding my own, and as a sophomore in high school I got to have a loud, slightly rusty yellow hot rod as my daily driver. My friends called it “The Crustang”, and the name stuck. Sadly, someone on their phone rear ended me at a stop light one day, totalling my car.",
        "I got to build another Mustang though, and this time around I knew what I was doing. I spent another year turning another 1966 Mustang with an inline-six engine into my dream car. I took the newly-rebuilt V8 engine, four speed manual transmission, suspension, and anything else I could from The Crustang to beef up my new car. I named it “Dani California” after the song by the Red Hot Chili Peppers. I finished Dani California right before senior prom, with yellow-pearl paint that perfectly matched my date’s dress and my tie."]

    const pupilDescription = ["Pupil was an attempt at a software/hardware solution to the difficulty that students and professors faced with hybrid classrooms. Pupil had two main goals: To provide professors with a way to automatically record and upload their lectures online based on their class schedule, and to give students convenient online access to recordings of their in-person lectures. In this way, students get the benefit of lecture recordings and professors lose the hassle of handling the recording.",
        "I learned about many technical topics through this project, including video streaming protocols, codecs, webRTC, and using a Raspberry Pi. I was also able to further develop my skills in leadership, frontend web development (React), UI design, and project planning. Within the team of three people working on this project, I served as the team leader and lead frontend developer."]

    const mustangPhotos = [
        {
            img: crustang_surgery,
            name: "crustang-surgery",
            caption: "Taking the engine and transmission out of the wrecked Crustang."
        },
        {
            img: dani_cali_paint_shop,
            name: "dani_cali_paint_shop",
            caption: "Dani California sitting outside of the paint shop."
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
    const pumpPhotos = [
        {img: pump_demo, name: "pump_demo", caption: "Our pump moving water in the final competition."},
        {
            img: pump_transmission,
            name: "pump_transmission",
            caption: "The pump transmission."
        },
        {img: impeller_pump, name: "impeller_pump", caption: "The 3D printed impeller and housing that I designed."}
    ];
    const metalWorkPhotos = [
        {img: mill, name: "mill", caption: "Cutting steel pipe to use on my 4Runner's bumper."},
        {img: lathe, name: "lathe", caption: "Machining a door lock pin for my 1966 mustang."}
    ];
    const tachPhotos = [
        {img: tach_mount_1, name: "tach_mount_1", caption: "Half of my first tachometer mount design."},
        {img: tach_mount_2, name: "tach_mount_2", caption: "My second tachometer mount design being printed."}
    ];
    const pupilPhotos = [
        {img: pupil_lect, name: "pupil_lectures", caption: "A mock-up for a student's lectures view."},
        {img: pupil_landing, name: "pupil_landing", caption: "Pupil landing page."}
    ]

    const kanaPhotos = [
        {img: kana_shuffle, name: "kana_shuffle", caption: "Kana Shuffle web application."},
        {img: hiragana_pdf, name: "pupil_landing", caption: "A shuffled hiragana practice sheet."}
    ]

    const reactPhotos = [
        {img: react_home, name: "react_home", caption: "The home page for the fake brand Crown Clothing."},
        {img: react_signup, name: "react_signup", caption: "Crown Clothing signup page."}
    ]
    const jettaPhotos = [
        {img: jetta, name: "jetta", caption: "Right before taking the engine out."}
    ]

    const [lockScroll, setLockScroll] = useState(false);

    return (
        <div className={`section ${lockScroll ? "scroll-lock" : "scroll-auto"}`}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <p className="section-text">Personal projects from mechanical to online and everything in between. Sorted
                from coolest to
                least cool. </p>
            <div>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="August 2022"
                    endDate={"Current"}
                    name="Space Domain Awareness Scheduler"
                    descriptions={schedulerDescription}
                    number={"1"}
                    images={[]}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="2015"
                    endDate="2019"
                    name="The Crustang and Dani California"
                    descriptions={mustangDescription}
                    number="2"
                    images={mustangPhotos}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="September 2021"
                    endDate="January 2022"
                    name="Pupil"
                    links={[
                        {href: "https://www.aboutpupil.com", text: "www.aboutpupil.com"},
                        {href: "https://github.com/PUPILorg/pupil-frontend", text: "github.com/PUPILorg/pupil-frontend"},
                        {href: "https://github.com/PUPILorg/pupil_landing_frontend", text: "github.com/PUPILorg/pupil_landing_frontend"}
                    ]}
                    descriptions={pupilDescription}
                    number={"3"}
                    images={pupilPhotos}/>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="July 2022"
                    name="Kana Shuffle"
                    descriptions={["Kana Shuffle is a web application that allows users to download Japanese hiragana, katakana, and romaji practice sheets whose characters are in a different order each time. It addresses a problem I noticed when learning to read Japanese, in that I had a difficult time remembering hiragana and katakana if the worksheet I was using was in a different order. This application is built using Node.js/express backend and React.js frontend."]}
                    number={"4"}
                    images={kanaPhotos}
                    links={[
                        {href: "https://kana-shuffle.herokuapp.com/", text:"kana-shuffle.herokuapp.com"},
                        {href: "https://github.com/grant-nations/kana-shuffle", text:"github.com/grant-nations/kana-shuffle"}
                    ]}
                />
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="May 2022"
                    name="React E-Commerce Application"
                    descriptions={["This project is a mock e-commerce application for the fake brand Crown Clothing. It was built using React, TypeScript, Redux, Firebase, and Styled Components. Different branches in the repository display different methods for handling website state, i.e. React Context, Redux Thunks, and Redux Sagas."]}
                    number={"5"}
                    images={reactPhotos}
                    links={[
                        {href: "https://heartfelt-frangipane-722cca.netlify.app/", text:"heartfelt-frangipane-722cca.netlify.app"},
                        {href: "https://github.com/grant-nations/crown-clothing", text:"github.com/grant-nations/crown-clothing"}
                    ]}
                />

                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="2016"
                    endDate="2017"
                    name="Jetta Engine Swap"
                    descriptions={["While rebuilding my first 1966 Mustang, I made a deal with my dad to swap the bad engine in our 2006 Jetta with a new one. Over the year that it took me to complete, I learned about transaxles, diesel engines, soldering, and more. In combination with my Mustang, I drove the car for the following three years."]}
                    number={"6"}
                    images={jettaPhotos}/>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="November 2019"
                    name="Impeller Pump"
                    descriptions={["When I was studying Mechanical Engineering, I built an impeller pump as a class project. My mechanical background placed me in a leadership position on the team, so I designed the impeller and pump housing in SolidWorks and also built the transmission."]}
                    number={"7"}
                    images={pumpPhotos}/>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="April 2020"
                    name="Tachometer Mount"
                    descriptions={["In 1966, Mustangs did not generally come from the factory with a tachometer. I wanted to install one, but didn’t like how the only mounting option available was a hose clamp. I designed my own tachometer mounts in SolidWorks and 3D printed them. PLA melts if left in a car in Tucson, so the plan was to later machine them out of aluminum."]}
                    number={"8"}
                    images={tachPhotos}/>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    name="Honorable Mentions"
                    descriptions={["Over the years, I’ve done countless random projects, all of which helped me to develop the creativity and problem solving skills that I have today . To name a few, I’ve: built a custom steel bumper for my 2001 4Runner, machined custom door lock pins for my Mustang, made custom kitchen knives that I sold to customers in places as far away as Australia, built a custom subwoofer box for my 4Runner, installed 3 car stereo head units, disassembled and fixed a washing machine, replaced power steering pumps, and more."]}
                    number={"9"}
                    images={metalWorkPhotos}
                />

            </div>
        </div>
    )
}

export default ProjectsSection;
