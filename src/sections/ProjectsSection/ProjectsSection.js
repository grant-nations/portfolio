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

function ProjectsSection({exitSection}) {

    const mustangPhotos = [
        {img: crustang_surgery, name: "crustang-surgery"},
        {img: dani_cali_paint_shop, name: "dani_cali_paint_shop"},
        {img: dani_cali_engine, name: "dani_cali_engine"},
        {img: dani_cali_roller, name: "dani_cali_roller"}
    ];
    const pumpPhotos = [
        {img: pump_transmission, name: "pump_transmission"},
        {img: impeller_pump, name: "impeller_pump"},
        {img: pump_demo, name: "pump_demo"}
    ];
    const metalWorkPhotos = [
        {img: mill, name: "mill"},
        {img: lathe, name: "lathe"}
    ];
    const tachPhotos = [
        {img: tach_mount_1, name: "tach_mount_1"},
        {img: tach_mount_2, name: "tach_mount_2"}
    ];

    return (
        <div className="section projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <div>
                <ProjectDisplay startDate="2015" endDate="2019" name="The Crustang and Dani California" description={"Blah blo"} number="1" images={mustangPhotos}/>
            </div>
        </div>
    )
}

export default ProjectsSection;
