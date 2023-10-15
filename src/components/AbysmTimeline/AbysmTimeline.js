import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import "./AbysmTimeline.css";

const AbysmTimeline = () => {
    return (
        <div className='abysm-timeline'>
            <TwitterTweetEmbed
                // sourceType="profile"
                // screenName="abysm_bot"
                tweetId={'1708680194977104214'}
                options={{
                    // tweetLimit: "10",
                    // width: "100%",
                    // height: "276px",
                    theme: "dark"
                }}
                // noHeader="true"
                // theme="dark"
                // noScrollbar="true"
                />
        </div>
    );
}

export default AbysmTimeline;

