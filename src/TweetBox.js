import React, {useState} from "react";
import "./Tweetbox.css";
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:'nexza navo',
            username:'nexzanavod',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/1203894530770178051/LFcrypWR_400x400.jpg"
        })
    }
    return (
        <div className = "tweetBox">
           <form>
               <div className="tweetBox__input">
                   <Avatar src = "https://pbs.twimg.com/profile_images/1203894530770178051/LFcrypWR_400x400.jpg"></Avatar>
                   <input 
                    onChange = {(e) => setTweetMessage(e.target.value)}
                         value={tweetMessage}
                         placeholder = "What's Happening?" 
                         type ="text" 
                    />
            </div>
               <input
                    value={tweetImage}
                    onChange = {(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder = "Optional:Enter Image URL" 
                    type ="text" 
                    />

               <Button 
                   onClick ={sendTweet}
                   type="submit" 
                   className="tweetBox__tweetButton">
                       SEND
                </Button>
           </form>
        </div>
    ) 
}

export default TweetBox
