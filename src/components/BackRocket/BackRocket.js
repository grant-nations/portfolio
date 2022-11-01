import "./BackRocket.css";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function BackRocket({exitSection}) {
    return (
        <div onClick={exitSection} className="back-rocket">
            <FontAwesomeIcon className="rocket-icon" size="2xl" icon={faRocket}/>
        </div>
    )
}

export default BackRocket;
