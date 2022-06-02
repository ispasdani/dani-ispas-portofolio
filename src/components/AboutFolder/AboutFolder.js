import React, { useState } from "react";
import folderIcon from "../../assets/folder.png";
import DownloadIcon from "@mui/icons-material/Download";
import myResume from "../../assets/myResume.pdf";
import aboutMeImg from "../../assets/meGreen.png";
import "../About/about.css";

function AboutFolder() {
  const [showAboutTab, setShowAboutTab] = useState(false);
  return (
    <div className="container-size">
      {!showAboutTab ? (
        <div className="folders-container">
          <div className="folder-format">
            <button
              className="folder-icon-btn"
              onClick={() => {
                setShowAboutTab(true);
              }}
            >
              <img src={folderIcon} alt="folder-icon" className="folder-img" />
            </button>
            <p>about</p>
          </div>
        </div>
      ) : (
        <div className="browser-window">
          <div className="window-top-bar">
            <div className="window-left-side">
              <p>about me</p>
            </div>
            <div className="window-right-side">
              <p>&#45;</p>
              <p>&#9633;</p>
              <p
                onClick={() => {
                  setShowAboutTab(false);
                }}
              >
                &#215;
              </p>
            </div>
          </div>

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
                My journey as a programmer started a few years ago but I already
                had some experience with it. My first contact with a programming
                language was with C++, then I made the transition to Java.{" "}
              </p>
              <p>
                Soon, after that I felt like I wanted to build things that will
                reach people more easily and I started my journey as a UI/UX
                Designer. On top of that I added technologies like HTML, CSS and
                Javascript. From that moment to present all my attention was on
                Web Development.
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
        </div>
      )}
    </div>
  );
}

export default AboutFolder;
