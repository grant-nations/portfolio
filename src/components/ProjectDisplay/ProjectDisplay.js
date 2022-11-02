import "./ProjectDisplay.css";
import {useEffect, useState} from "react";
import ExplodedPhoto from "../ExplodedPhoto/ExplodedPhoto";

function ProjectDisplay({startDate, setLockScroll, endDate, name, number, descriptions, images, links}) {

    const [photoView, setPhotoView] = useState({img: null, imgName: null})
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const exitPhotoView = () => {
        setPhotoView({img: null, imgName: null});
        setLockScroll(false);
    }

    let mobile = windowSize.innerWidth <= 900;

    return (
        <div className="project-display">
            <div>
                <h4 className="project-name">{number}. {name} <span
                    className="project-dates">{startDate || endDate ? "|" : ""} {startDate}{endDate ? " — " : ""}{endDate}</span>
                </h4>
                {descriptions.map(desc => {
                    return <p key={desc} className="section-text project-description">{desc}</p>
                })}
                {links && <div className="project-links-container">
                    {links.map(link => <a key={link.text} className="project-link"
                                          href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>)}
                </div>}
            </div>
            <div className="project-images-corral">
                {images.map(image => {
                    return <div key={image.name} className="image-stall">
                        <div className="image-box">
                            <img className="project-image"
                                 onClick={!mobile ? () => {
                                         setLockScroll(true);
                                         setPhotoView({img: image.img, imgName: image.name});

                                 } : null}
                                 // onClick={() => {
                                 //     if(!mobile){
                                 //         setLockScroll(true);
                                 //         setPhotoView({img: image.img, imgName: image.name});
                                 //     }
                                 // }}
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

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default ProjectDisplay;
