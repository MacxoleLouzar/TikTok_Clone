import React, {useRef, useState} from 'react';
import VideoFooter from './VideoFooter.js';
import VideoSideBar from './VideoSideBar.js';
import './Video.css'

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }
  return (
    <div className="video">
        <video 
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
         src="https://www.youtube.com/watch?v=450p7goxZqg">
        </video>

        <VideoFooter />
        <VideoSideBar />
    </div>
  );
}

export default Video;
