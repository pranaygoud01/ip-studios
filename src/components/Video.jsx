import React from 'react';

const Video = () => {
  return (
    <div className="w-full h-[60vh] max-lg:h-[50vh] ">
      <video 
        src="https://videos.pexels.com/video-files/18069233/18069233-uhd_1440_2560_24fps.mp4" 
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Video;
