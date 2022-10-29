import "./ProjectDisplay.css";

function ProjectDisplay({startDate, endDate, name, number, description, images}) {
    return (
        <div className="project-display">
            <div>
                <h4 className="project-name">{number}. {name} <span className="project-dates">| {startDate}{endDate ? " — " : ""}{endDate}</span></h4>
                <p className="section-text project-description">{description}</p>
            </div>
            <div className="project-images-corral">
                {images.map(image => {
                    return <div key={image.name} className="image-stall">
                        <img className="project-image" src={image.img} alt={image.name}/>
                        <p className="section-text project-image-caption">{image.caption}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProjectDisplay;