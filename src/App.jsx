import { useState, useEffect } from "react";
import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  const [Videos, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/v1/posts/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="app">
      <div className="app_videos">
        {Videos.length > 0 &&
          Videos.map(
            (
              { url, channel, description, song, likes, messages, shares },
              index
            ) => (
              <Video
                key={index}
                url={url}
                channel={channel}
                likes={likes}
                song={song}
                messages={messages}
                description={description}
                shares={shares}
              />
            )
          )}
      </div>
    </div>
  );
}

export default App;
