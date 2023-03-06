import React from 'react';
import './VideoFooter.css';
import { BsMusicNoteBeamed}  from 'react-icons/bs'
import Ticker from 'react-ticker';


function VideoFooter({channel, description, song}) {
  return (
    <div className="videofooter">
        <div className="videofooter_text">
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className="videofooter_ticker">
                <BsMusicNoteBeamed className="videofooter_icon"/>
                <Ticker mode="smooth">
                    {({index}) =>(
                        <>
                         <p>{song}</p>
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
