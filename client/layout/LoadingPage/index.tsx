import React from "react";
import { LoadingScreenWrapper } from "./styles";

const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper>
      <div className="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
