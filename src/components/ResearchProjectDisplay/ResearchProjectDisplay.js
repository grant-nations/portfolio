import "../ProjectDisplay/ProjectDisplay.css";
import { useEffect, useState } from "react";
import ExplodedPhoto from "../ExplodedPhoto/ExplodedPhoto";
import "./ResearchProjectDisplay.css"

function ResearchProjectDisplay({ startDate, setLockScroll, endDate, name, descriptions, images, links, imgStyle, submissionStatus }) {

    const [photoView, setPhotoView] = useState({ img: null, imgName: null })
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
        setPhotoView({ img: null, imgName: null });
        setLockScroll(false);
    }

    let mobile = windowSize.innerWidth <= 900;

    return (
        <div className="project-display">
            <h4 className="project-name">{name} <span
                className="project-dates">{startDate || endDate ? "//" : ""} {startDate}{endDate ? " — " : ""}{endDate}</span>
            </h4>
            {descriptions.map(desc => {
                return <p key={desc} className="section-text project-description">{desc}</p>
            })}
            <div className="project-images-corral">
                {images.map(image => {
                    return <div key={image.name} className="image-stall">
                        <div className="image-box">
                            <img className="research-image"
                                onClick={!mobile ? () => {
                                    setLockScroll(true);
                                    setPhotoView({ img: image.img, imgName: image.name });

                                } : null}
                                src={image.img} alt={image.name}
                                style={imgStyle ? imgStyle : {}}
                            />
                        </div>
                        <p className="section-text project-image-caption">{image.caption}</p>
                    </div>
                })}
            </div>
            {submissionStatus && <div className="sub-status-container"><p className="sub-status">{submissionStatus}</p></div>}
            {links && <div className="project-links-container">
                {links.map(link => <a key={link.text} className="project-link"
                    href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>)}
            </div>}
            {photoView.img && <ExplodedPhoto img={photoView.img} imgName={photoView.imgName} exitView={exitPhotoView} />}
        </div>
    )
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default ResearchProjectDisplay;
