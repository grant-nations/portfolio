import "./ExplodedPhoto.css";

function ExplodedPhoto({img, imgName, exitView}) {

    return (
        <div onClick={exitView} className="exploded">
            <div className="implode"/>
            <div className="exploded-img-container">
                <img className="exploded-img" src={img} alt={imgName ? imgName : "OH NO!"}/>
            </div>
        </div>
    )
}

export default ExplodedPhoto;
