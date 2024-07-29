
import React from 'react';

const Video: React.FC = () => {
  return (
    <div>
      <video 
        className="w-[500px] h-[370px] object-cover" 
        src="/reklam2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
    </div>
  );
};

export default Video;
