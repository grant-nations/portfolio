import "./ProjectDisplay.css";

function ProjectDisplay({startDate, endDate, name, number, descriptions, images, links}) {
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
                            <img className="project-image" src={image.img} alt={image.name}/>
                        </div>
                        <p className="section-text project-image-caption">{image.caption}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProjectDisplay;
