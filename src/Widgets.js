import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';


import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed

} from "react-twitter-embed"

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening!</h2>

                <TwitterTweetEmbed tweetId={"1391005366700310538"}></TwitterTweetEmbed>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MoYS_SriLanka"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/nsbm.lk"}
                    options={{ text: "#reactjs is awsome", via: "cleverrqazi" }}
                />
            </div>
        </div>
    )
}

export default Widgets
