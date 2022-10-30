import "./ExplodedPhoto.css";

function ExplodedPhoto({img, imgName}){
    return (
        <div>
            <img className="exploded-img" src={img} alt={imgName ? imgName : ""}/>
        </div>
    )
}

export default ExplodedPhoto;
