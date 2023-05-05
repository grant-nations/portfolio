import "./ResearchSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";
import BackRocket from "../../components/BackRocket/BackRocket";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";
import {useState} from "react";

function ResearchSection({exitSection}) {
    const [lockScroll, setLockScroll] = useState(false);

    const twenty84Description = ["Space Domain Awareness (SDA) is the process of monitoring and understanding both natural and artificial objects in space. SDA is crucial for various applications such as space exploration, communication, national defense, and military operations. However, scheduling ground-based observations in SDA is a complex task due to several factors. One of the major challenges is that sensor observations are subject to numerous constraints, such as the target position, sun separation, galactic latitude, and moon illumination.",
        "The scheduling problem is not just about meeting these constraints but also recognizing priorities assigned to observations. Some observations are of higher importance than others, and an optimal schedule needs to take into account both the constraints and the priority of the observations. To address this problem, this study proposes a model and solution approach that treats the ground-based SDA scheduling problem as an unrelated parallel machine scheduling problem with sequence-dependent setup times and a fixed time horizon.",
        "The objective of this research is to explore solving the NP-hard problem of assigning observation blocks (jobs) to sensors (machines) such that the total observational reward is maximized while considering the reward of each block, the transition time between blocks, and the sensor-specific restricted windows for realistic problem sizes. I am currently working on this project as an operations research engineering intern at KBR and hope to complete my research in the next few months."    ]

    return (
        <div className={`section ${lockScroll ? "scroll-lock" : "scroll-auto"}`}>
            <div className="section-header">
                <h2 className="section-title">Research</h2>
                <ReturnToShip exitSection={exitSection}/>
                <BackRocket exitSection={exitSection}/>
            </div>
            <div>
                <ProjectDisplay
                    setLockScroll={setLockScroll}
                    startDate="August 2022"
                    endDate="Current"
                    name="Optimal Observational Scheduling within Space Domain Awareness"
                    descriptions={twenty84Description}
                    images={[]}
                    imgStyle={{objectFit: "contain", marginLeft: "auto", width: "unset"}}
                    links={[]}
                />
            </div>
        </div>
    )
}

export default ResearchSection;
