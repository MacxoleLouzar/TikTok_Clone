import React from 'react';
import './VideoFooter.css';
import { BsMusicNoteBeamed}  from 'react-icons/bs'
import Ticker from 'react-ticker';


function VideoFooter() {
  return (
    <div className="videofooter">
        <div className="videofooter_text">
            <h3>@louzar</h3>
            <p>This is a description tab</p>
            <div className="videofooter_ticker">
                <BsMusicNoteBeamed className="videofooter_icon"/>
                <Ticker mode="smooth">
                    {({index}) =>(
                        <>
                         <h1>I'm a song thats playing now </h1>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
        <img 
        className="videofooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""/>
    </div>
  );
}

export default VideoFooter;
