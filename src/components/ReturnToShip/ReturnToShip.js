import "./ReturnToShip.css";

function ReturnToShip({exitSection}){
    return (
        <button onClick={exitSection} type="button" className="return-to-ship">
            Return to ship
        </button>
    )
}

export default ReturnToShip;
