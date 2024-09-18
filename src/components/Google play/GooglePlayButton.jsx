import React from "react";
import "./GooglePlayButton.css";
import GooglePlay from "../../assets/images/GooglePlay.png";

const GooglePlayButton = () => {
  return (
    <a
      href="https://play.google.com/store/apps"
      className="google-play-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GooglePlay} alt="Google Play" className="google-play-icon" />
      <span className="google-play-text">
        Get it on <br /> <b>Google Play</b>
      </span>
    </a>
  );
};

export default GooglePlayButton;
