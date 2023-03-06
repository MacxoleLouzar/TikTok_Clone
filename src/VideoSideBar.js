import React,{useState} from 'react';
import './VideoSideBar.css'

import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'

function VideoSideBar({likes, shares, messages}) {
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
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="videoSidebar_button">
            <AiOutlineMessage fontSize="large"/>
            <p>{messages}</p>
        </div>
        <div className="videoSidebar_button">
            <IoMdShareAlt fontSize="large"/>
            <p>{shares}</p>
        </div>
    </div>
  );
}

export default VideoSideBar;
