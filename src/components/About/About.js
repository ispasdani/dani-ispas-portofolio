import React, { useState } from "react";
import "./about.css";
import topToPixel from "../../assets/topToPixel.png";
import bottomToPixel from "../../assets/bottomToPixel.png";
import AboutFolder from "../AboutFolder/AboutFolder";
import SkillsFolder from "../SkillsFolder/SkillsFolder";

function About() {
  const [showTab, setShowTab] = useState(false);
  const [closeOpenWindow, setCloseOpenWindow] = useState(false);

  return (
    <div className="about" id="1">
      <img
        src={topToPixel}
        className="top-to-pixel"
        alt="transition-from-smooth-to-pixel"
      />

      <div className="quote">
        <div className="quote-letters">
          <div className="responsive-words">
            <h3 className="jelly-letter">"</h3>
            <h3 className="jelly-letter">P</h3>
            <h3 className="jelly-letter">R</h3>
            <h3 className="jelly-letter">O</h3>
            <h3 className="jelly-letter">G</h3>
            <h3 className="jelly-letter diff">R</h3>
            <h3 className="jelly-letter">A</h3>
            <h3 className="jelly-letter">M</h3>
            <h3 className="jelly-letter">M</h3>
            <h3 className="jelly-letter">I</h3>
            <h3 className="jelly-letter">N</h3>
            <h3 className="jelly-letter">G</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter">I</h3>
            <h3 className="att-about">S</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter">L</h3>
            <h3 className="jelly-letter">I</h3>
            <h3 className="jelly-letter">K</h3>
            <h3 className="jelly-letter diff">E</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter">P</h3>
            <h3 className="jelly-letter">E</h3>
            <h3 className="jelly-letter">R</h3>
            <h3 className="jelly-letter">F</h3>
            <h3 className="jelly-letter">O</h3>
            <h3 className="jelly-letter">R</h3>
            <h3 className="jelly-letter">M</h3>
            <h3 className="jelly-letter">I</h3>
            <h3 className="jelly-letter">N</h3>
            <h3 className="jelly-letter">G</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter"> A</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter">M</h3>
            <h3 className="jelly-letter">A</h3>
            <h3 className="att-about">G</h3>
            <h3 className="jelly-letter">I</h3>
            <h3 className="jelly-letter">C</h3>
          </div>
          <div className="responsive-words">
            <h3 className="break jelly-letter">T</h3>
            <h3 className="jelly-letter">R</h3>
            <h3 className="jelly-letter">I</h3>
            <h3 className="jelly-letter">C</h3>
            <h3 className="jelly-letter">K</h3>
            <h3 className="jelly-letter">"</h3>
          </div>
        </div>
        <div className="reference">
          <h4 className="jelly-letter"> &#40;</h4>
          <h4 className="jelly-letter"> M</h4>
          <h4 className="jelly-letter"> e</h4>
          <h4 className="jelly-letter"> ,</h4>
          <h4 className="jelly-letter"> 2</h4>
          <h4 className="jelly-letter"> 0</h4>
          <h4 className="jelly-letter"> 2</h4>
          <h4 className="jelly-letter"> 2</h4>
          <h4 className="jelly-letter"> &#41;</h4>
        </div>
      </div>

      <p className="glitch">
        <span aria-hidden="true">ABOUT ME</span>
        ABOUT ME
        <span aria-hidden="true">ABOUT ME</span>
      </p>

      <AboutFolder />
      <SkillsFolder />

      <img
        src={bottomToPixel}
        className="bottom-to-pixel"
        alt="transition-from-pixel-to-smooth"
      />
    </div>
  );
}

export default About;
