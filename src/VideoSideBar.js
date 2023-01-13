import React,{useState} from 'react';
import './VideoSideBar.css'

import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'

function VideoSideBar() {
const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
        <div className="videoSidebar_button">
            {
                liked ? (
                    <MdFavorite fontSize="large"/>
                ):(
                    <MdFavoriteBorder 
                      fontSize="large"
                      onClick={(e)=>setLiked(true)} />
                )
            }
            <p>342</p>
        </div>
        <div className="videoSidebar_button">
            <AiOutlineMessage fontSize="large"/>
            <p>198</p>
        </div>
        <div className="videoSidebar_button">
            <IoMdShareAlt fontSize="large"/>
            <p>32</p>
        </div>
    </div>
  );
}

export default VideoSideBar;
