import React from 'react';

export function Video() {
  return (
    <video
      className=" h-96"
      width="500"
      height="500"
      preload="none"
      autoPlay
      loop
      muted
    >
      {/* Reference the video file from the public folder */}
      <source src="/michaelHDDark.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
