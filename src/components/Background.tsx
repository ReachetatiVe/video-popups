// import './../styles/background.scss';

import { useRef } from "react";

function Background() {
  const videoRef = useRef();

  const pauseVideo = () => {
  }
  return (
    <div className="backround">
      <div className="background__video">
        <video
          loop
          autoPlay
          muted
          src={require("./../assets/video/Volvo_trucks_video.mp4")}
        />
      </div>
    </div>
  );
}

export default Background;
