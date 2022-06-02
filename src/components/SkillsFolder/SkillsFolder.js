import React, { useState } from "react";
import folderIcon from "../../assets/folder.png";
import "../About/about.css";

function Skills() {
  const [showSkillsTab, setShowSkillsTab] = useState(false);

  return (
    <div className="container-size">
      {!showSkillsTab ? (
        <div className="folders-container">
          <div className="folder-format">
            <button
              className="folder-icon-btn"
              onClick={() => {
                setShowSkillsTab(true);
              }}
            >
              <img src={folderIcon} alt="folder-icon" className="folder-img" />
            </button>
            <p>skills</p>
          </div>
        </div>
      ) : (
        <div className="browser-window">
          <div className="window-top-bar">
            <div className="window-left-side">
              <p>skills</p>
            </div>
            <div className="window-right-side">
              <p>&#45;</p>
              <p>&#9633;</p>
              <p
                onClick={() => {
                  setShowSkillsTab(false);
                }}
              >
                &#215;
              </p>
            </div>
          </div>
          <div className="window-content-skills">
            <div className="all-skills">
              <h1 className="skills-title">Designer</h1>
              <p className="skills-content">
                I like to be creative and design strange things.
              </p>
              <p className="skills-content attention">Things I design:</p>
              <p className="skills-content">
                Web, Mobile, UX, UI, Gaming assets
              </p>
              <p className="skills-content attention">
                Tools I use for design:
              </p>
              <p className="skills-content">
                Photoshop, Adobe XD, Figma, Pixil Art, Blender, Spline, Unity
              </p>
            </div>
            <div className="all-skills">
              <h1 className="skills-title">Programmer</h1>
              <p className="skills-content">
                This is what I love to do and where all my focus is.
              </p>
              <p className="skills-content attention">Languages I speak:</p>
              <p className="skills-content">
                HTML, CSS, JavaScript (focused on), Java, C# (focused on)
              </p>
              <p className="skills-content attention">Tools I use:</p>
              <p className="skills-content">
                ReactJS, NodeJS, ExpressJS, MongoDB, ThreeJS
              </p>
            </div>
            <div className="all-skills">
              <h1 className="skills-title">Personal</h1>
              <p className="skills-content">My beliefs</p>
              <p className="skills-content attention">Mindset</p>
              <p className="skills-content">
                " the key with me is that no one will outwork me "
              </p>
              <p className="skills-content attention">Latest Achivements</p>
              <p className="skills-content">Certified Java Developer</p>
              <p className="skills-content">Certified ReactJS Developer</p>
              <p className="skills-content">
                Business Academy Aarhus, Front-End Developer specialization
                student
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
