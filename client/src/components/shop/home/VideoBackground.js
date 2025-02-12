import React, { Fragment } from "react";
import videoFile from "./video.mp4"; // Import the video file from the same folder

const VideoBackground = () => {
  return (
    <Fragment>
      <div className="relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
            DRAKON
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            Unleash Your Style. Redefine Elegance.
          </p>
          <a
            href="#shop"
            className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoBackground;
