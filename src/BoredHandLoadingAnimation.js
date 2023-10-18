// src/BoredHandLoadingAnimation.js
import React from "react";
import Lottie from "react-lottie";
import boredHandLoadingAnimationData from "./resources/animation_lnex7x6d.json";

const BoredHandLoadingAnimation = () => {
  const animationStyles = {
    width: "500px",
    height: "500px",
    // Add any other CSS styles you need here
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: boredHandLoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={animationStyles}>
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
};

export default BoredHandLoadingAnimation;
