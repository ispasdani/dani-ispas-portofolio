import React from "react";
import "./wave.css";

function Wave() {
  return (
    <div className="flame-animation">
      <div className="flame-up">
        <span className="wave wave1"></span>
        <span className="waveTwo wave2"></span>
        <span className="waveThree wave3"></span>
        <span className="waveFour wave4"></span>
      </div>

      <div className="flame-down">
        <span className="wave-down wave1 wave-down"></span>
        <span className="waveTwo-down wave2"></span>
        <span className="waveThree-down wave3"></span>
        <span className="waveFour-down wave4"></span>
      </div>
    </div>
  );
}

export default Wave;
