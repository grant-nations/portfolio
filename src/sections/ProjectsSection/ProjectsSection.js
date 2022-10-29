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

function ProjectsSection({exitSection}) {

    const mustangDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius mauris. Vivamus feugiat sagittis euismod. Phasellus interdum mauris erat, et venenatis enim commodo at. Fusce et mi dolor. Etiam nec diam sit amet leo gravida tincidunt. Nunc eget tempor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin ante at varius ultricies. Ut semper dui sem, a semper velit congue in. Donec imperdiet libero eu nulla posuere varius id nec libero. Donec luctus enim non placerat suscipit. Proin ex elit, ultricies eget nisl eget, tincidunt rhoncus sem. Ut nibh odio, feugiat non tristique id, congue tristique mi."

    const mustangPhotos = [
        {
            img: crustang_surgery,
            name: "crustang-surgery",
            caption: "Taking the engine out of The Crustang after its accident."
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
            caption: "The transmission that I built for the pump."
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
        {img: jetta, name: "jetta", caption: "Engine swap in progress."}
    ]

    return (
        <div className="section projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <p className="section-text">Mechanical to online and everything in between. Sorted from coolest to
                least cool. </p>
            <div>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Space Domain Awareness Scheduler"
                                description={mustangDescription}
                                number={"1"} images={[]}/>
                <ProjectDisplay startDate="2015" endDate="2019" name="The Crustang and Dani California"
                                description={mustangDescription} number="2" images={mustangPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Pupil" description={mustangDescription}
                                number={"TODO"} images={pupilPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Platform" description={mustangDescription}
                                number={"TODO"} images={[]}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Kana Shuffle" description={mustangDescription}
                                number={"TODO"} images={kanaPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="This Portfolio Website"
                                description={mustangDescription}
                                number={"TODO"} images={[]}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="React E-Commerce Application"
                                description={mustangDescription}
                                number={"TODO"} images={reactPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Jetta Engine Swap"
                                description={mustangDescription}
                                number={"TODO"} images={jettaPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Impeller Pump" description={mustangDescription}
                                number={"TODO"} images={pumpPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Tachometer Mount" description={mustangDescription}
                                number={"TODO"} images={tachPhotos}/>
                <ProjectDisplay startDate="TODO" endDate="TODO" name="Machining Projects"
                                description={mustangDescription}
                                number={"TODO"} images={metalWorkPhotos}/>
            </div>
        </div>
    )
}

export default ProjectsSection;
