import "./ResearchSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";
import ResearchProjectDisplay from "../../components/ResearchProjectDisplay/ResearchProjectDisplay";
import { useState } from "react";

import quad_thruster from "./photos/quad_thruster.png";
import h_t_quad from "./photos/h_T_Quad.png"

function ResearchSection({ exitSection }) {
    const [lockScroll, setLockScroll] = useState(false);

    const icra2024photos = [{
        img: quad_thruster,
        name: "quad_thruster",
        caption: "Four ducted thrusters arranged in a “quadthruster” configuration, with 45° strakes extending down to form a skirt between them in order to minimize suckdown when in proximity to the ground. This design is shown to improve thrust by over 60% in close proximity to the ground, avoid any region of decreased thrust from suckdown, and still produce up to a 20% thrust benefit from fountain lift when further from the ground plane."
    },
    {
        img: h_t_quad,
        name: "quadthruster_curves",
        caption: "Ratio of measured thrust to out-of-ground effect thrust versus z/r for a quadthruster configuration with different thruster protrusion heights, h, or inclusion of strakes (right). The same, but including h = 0 data, which significantly skews the range of the measured thrust enhancement (left). All data collected at 3kV applied potential."
    }]

    const sda_ip_desc = ["Satellites underpin all economic, military, and scientific activity in space. Ground-based telescope observations provide much of the tracking information that enables collision avoidance and space traffic management, but recent growth in the size and dynamism of the satellite population divides the available observing capacity between multiple competing observation objectives. The task of selecting an optimal assignment of telescope observing capacity to observation objectives is NP-hard and involves domain-specific considerations such as sequence-dependent transition times, observability constraints, occlusion avoidance, and astrodynamic limitations. These features conspire to prevent direct and efficient application of traditional scheduling approaches over long time horizons.",
        "This work maps the task of scheduling ground-based sensor observations to an unrelated parallel machine scheduling problem with sequence-dependent transition times, restricted time windows, and a fixed time horizon. We contribute an integer programming model of the task, complete with inequality formulations of domain-specific constraints, and a decomposition algorithm that discovers reward-optimal schedules. Using the open-source CBC solver, the integer programming model can reliably be solved for problem instances with up to 6 sensors and 40 targets for a 4 minute time horizon within an equal runtime limit. To address more challenging problem instances, we propose a decomposition algorithm that supports early termination and returns suboptimal schedules along with an associated optimality gap for instances with up to 6 sensors and 200 targets over a 15 minute time horizon."]

    const icra2024desc = ["Electroaerodynamic (EAD) propulsion, where thrust is produced by collisions between electrostatically-accelerated ions and neutral air, is a potentially transformative method for indoor flight owing to its silent and solid-state nature. Like rotors, EAD thrusters exhibit changes in performance based on proximity to surfaces. Unlike rotors, they have no fragile and quickly spinning parts that have to avoid those surfaces; taking advantage of the efficiency benefits from proximity effects may be a route towards longer-duration indoor operation of ion-propelled fliers. This work presents the first empirical study of ground proximity effects for EAD propulsors, both individually and as quad-thruster arrays. It focuses on multi-stage ducted centimeter-scale actuators suitable for use on small robots envisioned for deployment in human-proximal and indoor environments. Three specific effects (ground, suckdown, and fountain lift), each occurring with a different magnitude at a different spacing from the ground plane, are investigated and shown to have strong dependencies on geometric parameters including thruster-to-thruster spacing, thruster protrusion from the fuselage, and inclusion of flanges or strakes. Peak thrust enhancement ranging from 300 to 600% is found for certain configurations operated in close proximity (0.2 mm) to the ground plane and as much as a 20% increase is measured even when operated centimeters away."]

    return (
        <div className={`section ${lockScroll ? "scroll-lock" : "scroll-auto"}`}>
            <div className="section-header">
                <h2 className="section-title">Research</h2>
                <ReturnToShip exitSection={exitSection} />
                <BackRocket exitSection={exitSection} />
            </div>
            <div>
                <ResearchProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="January 2024"
                    endDate="Present"
                    name="Geometric Optimization of Ground Effect for Small-scale Electroaerodynamic Hovercraft"
                    descriptions={["In progress."]}
                    images={[]}
                    imgStyle={""}
                    links={[]}
                    submissionStatus={""}
                />
                <ResearchProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="July 2023"
                    endDate="Present"
                    name="Ceiling Proximity Effects and Electrostatic Adhesion for Small-scale Electroaerodynamic Thrusters"
                    descriptions={["In progress."]}
                    images={[]}
                    imgStyle={""}
                    links={[]}
                    submissionStatus={""}
                />
                <ResearchProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="July "
                    endDate="September 2023"
                    name="Empirical Study of Ground Proximity Effects for Small-scale Electroaerodynamic Thrusters"
                    descriptions={icra2024desc}
                    images={icra2024photos}
                    imgStyle={{ objectFit: "contain", marginLeft: "auto", width: "unset" }}
                    links={[{ href: "https://arxiv.org/abs/2309.10919", text: "arxiv.org/abs/2309.10919 (preprint)" }]}
                    submissionStatus={"To appear in 2024 IEEE International Conference on Robotics and Automation (ICRA) Proceedings"}
                />
                <ResearchProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="August 2022"
                    endDate="September 2023"
                    name="An Integer Programming Approach to Observation Scheduling for Space Domain Awareness"
                    descriptions={sda_ip_desc}
                    images={[]}
                    imgStyle={{ objectFit: "contain", marginLeft: "auto", width: "unset" }}
                    links={[]}
                    submissionStatus={"To appear in 2024 IEEE Aerospace Proceedings"}
                />
            </div>
        </div>
    )
}

export default ResearchSection;
