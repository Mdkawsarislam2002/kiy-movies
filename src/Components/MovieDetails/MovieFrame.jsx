import React from "react";
import TestImg from "../../assets/netflixBanner.jpg";

const MovieFrame = ({ currentKey }) => {
  // https://www.youtube.com/watch?v=3Zibb6lVCRw
  let source = "https://www.youtube.com/embed/" + currentKey;
  return (
    <>
      <iframe
        width="100%"
        height="315"
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default MovieFrame;
