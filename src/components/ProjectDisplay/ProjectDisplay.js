import "./ProjectDisplay.css";
import {useState} from "react";
import ExplodedPhoto from "../ExplodedPhoto/ExplodedPhoto";

function ProjectDisplay({startDate, endDate, name, number, descriptions, images, links}) {

    const [photoView, setPhotoView] = useState({img: null, imgName: null})

    const exitPhotoView = () => {
        setPhotoView({img: null, imgName: null});
    }

    return (
        <div className="project-display">
            <div>
                <h4 className="project-name">{number}. {name} <span
                    className="project-dates">{startDate || endDate ? "|" : ""} {startDate}{endDate ? " — " : ""}{endDate}</span>
                </h4>
                {descriptions.map(desc => {
                    return <p key={desc} className="section-text project-description">{desc}</p>
                })}
                {links && links.map(link => <a key={link.text} className="project-link"
                                               href={link.href}>{link.text}</a>)}
            </div>
            <div className="project-images-corral">
                {images.map(image => {
                    return <div key={image.name} className="image-stall">
                        <div className="image-box">
                            <img className="project-image"
                                 onClick={() => {
                                     setPhotoView({img: image.img, imgName: image.name})
                                 }}
                                 src={image.img} alt={image.name}/>
                        </div>
                        <p className="section-text project-image-caption">{image.caption}</p>
                    </div>
                })}
            </div>
            {photoView.img && <ExplodedPhoto img={photoView.img} imgName={photoView.imgName} exitView={exitPhotoView}/>}
        </div>
    )
}

export default ProjectDisplay;
