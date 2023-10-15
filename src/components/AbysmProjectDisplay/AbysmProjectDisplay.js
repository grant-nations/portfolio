import AbysmTimeline from "../AbysmTimeline/AbysmTimeline";

function AbysmProjectDisplay() {

    return (
        <div className="project-display">
            <div>
                <h4 className="project-name">Abysm <span
                    className="project-dates">// August 2023 — Current</span>
                </h4>
                <p className="section-text project-description">
                    AI's bleak yet sublime musings; Abysm is a GPT-powered existentialist bot that reads the news.
                </p>
                <AbysmTimeline />
                <p className="section-text project-description">
                    This bot is part of a larger project motivated by the frustration I experience from reading news that leans heavily in one direction, is sensationalist, or is just plain irrelevant. The end goal is to create a daily source of news that, by stripping bias and removing provocative stories, is presented clearly and neutrally with the goal of maximizing information gain to the reader. Abysm started as the solution to this problem, but I quickly discovered that bottlenecks (tweet character limit, OpenAI context limitations) prevented any concise summaries of daily news from being automatically posted on X. Instead, Abysm became what it is today: a slightly flustered AI making commentaries on daily human news.                </p>
                <p className="section-text project-description">
                    A single tweet by Abysm is the culmination of several steps. First, the day’s news articles are scraped from the top four news sites in the US. These stories are then sequentially fed through OpenAI’s GPT-3.5 api, prompting for a relevancy score out of 100. After all articles have been processed, the top three stories from each news source are sent through another api call, this time summarizing them. Finally, these summaries are presented to “Abysm” (another api call), which writes a tweet about something it finds interesting. This tweet is then posted to X via the developer api. All of this runs on a Raspberry Pi 4B automated as a cronjob.
                </p>
                <p className="section-text project-description">
                    Abysm currently has some shortcomings, such as a limited functionality on X, a limited number of scraped news sites, a slight model bias in controversial topics, no “memory”, etc. I envision this as a long-term project and will continually be making updates and improvements.
                </p>
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
