import React, { useState } from "react";
import "./about.css";
import topToPixel from "../../assets/topToPixel.png";
import bottomToPixel from "../../assets/bottomToPixel.png";
import aboutMeImg from "../../assets/meGreen.png";
import folderIcon from "../../assets/folder.png";
import DownloadIcon from "@mui/icons-material/Download";
import myResume from "../../assets/myResume.pdf";

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
      {!closeOpenWindow ? (
        <div className="browser-window">
          <div className="window-top-bar">
            <div className="window-left-side">
              <p
                onClick={() => {
                  setShowTab(false);
                }}
              >
                about me
              </p>
              <p
                onClick={() => {
                  setShowTab(true);
                }}
              >
                skills
              </p>
            </div>
            <div className="window-right-side">
              <p
                onClick={() => {
                  setCloseOpenWindow(true);
                }}
              >
                &#45;
              </p>
              <p>&#9633;</p>
              <p
                onClick={() => {
                  setCloseOpenWindow(true);
                }}
              >
                &#215;
              </p>
            </div>
          </div>
          {!showTab ? (
            <div className="window-content">
              <div className="image-side">
                <img
                  src={aboutMeImg}
                  alt="my-face-neon"
                  className="about-me-img"
                />
              </div>
              <div className="about-me-side">
                <h1>Hi, there</h1>
                <p>
                  My name is{" "}
                  <span className="attention-name">Ispas Daniel-Nicolae</span>
                  and I'm a Front-End &#38; Software Developer who's aiming to
                  become a Full-Stack Developer.
                </p>
                <p>
                  Long story made short about me. Ex professional tennis player
                  who realised that he is not going to be the next Rafael Nadal,
                  so dream over.
                </p>
                <p>
                  My journey as a programmer started a few years ago but I
                  already had some experience with it. My first contact with a
                  programming language was with C++, then I made the transition
                  to Java.{" "}
                </p>
                <p>
                  Soon, after that I felt like I wanted to build things that
                  will reach people more easily and I started my journey as a
                  UI/UX Designer. On top of that I added technologies like HTML,
                  CSS and Javascript. From that moment to present all my
                  attention was on Web Development.
                </p>
                <p className="resume-button">
                  <a href={myResume} download>
                    My Resume
                    <span>
                      <DownloadIcon />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      ) : (
        <div className="folders-container">
          <div className="folder-format">
            <button
              className="folder-icon-btn"
              onClick={() => {
                setCloseOpenWindow(false);
              }}
            >
              <img src={folderIcon} alt="folder-icon" className="folder-img" />
            </button>
            <p>about &#38; skills</p>
          </div>
        </div>
      )}
      <img
        src={bottomToPixel}
        className="bottom-to-pixel"
        alt="transition-from-pixel-to-smooth"
      />
    </div>
  );
}

export default About;
