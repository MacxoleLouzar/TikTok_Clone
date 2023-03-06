import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter.js";
import VideoSideBar from "./VideoSideBar.js";
import "./Video.css";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video 
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
         src={url}
         />

        <VideoFooter 
         channel = {channel}
         description = {description}
         song = {song}
         />
        <VideoSideBar 
        likes ={likes}
        shares ={shares}
        messages ={messages}
        />
    </div>
  );
}

export default Video;
