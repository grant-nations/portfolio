import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import "./AbysmTimeline.css";

const AbysmTimeline = () => {
    return (
        <div className='abysm-timeline'>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="abysm_bot"
                options={{
                    tweetLimit: "10",
                    width: "100%",
                    height: "276px",
                }}
                noHeader="true"
                theme="dark"
                noScrollbar="true"/>
        </div>
    );
}

export default AbysmTimeline;

