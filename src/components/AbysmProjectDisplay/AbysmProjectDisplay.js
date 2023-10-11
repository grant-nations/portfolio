import AbysmTimeline from "../AbysmTimeline/AbysmTimeline";

function AbysmProjectDisplay() {

    return (
        <div className="project-display">
            <div>
                <h4 className="project-name">Abysm <span
                    className="project-dates">// August 2023</span>
                </h4>
                <p className="section-text project-description">
                    THIS IS THE ABYSM PROJECT DISPLAY DESCRIPTION
                </p>
                <AbysmTimeline />
                <div className="project-links-container">
                    <a
                        className="project-link"
                        href="https://twitter.com/abysm_bot"
                        target="_blank"
                        rel="noopener noreferrer">
                        twitter.com/abysm_bot
                    </a>
                    <a
                        className="project-link"
                        href="https://github.com/grant-nations/turnoff"
                        target="_blank"
                        rel="noopener noreferrer">
                        github.com/grant-nations/turnoff
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AbysmProjectDisplay;
