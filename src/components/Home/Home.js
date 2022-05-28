import React from "react";
import "./home.css";
import sideMountains from "../../assets/sideMountain.png";
import homeMessage from "../../assets/text.png";
import triangleHome from "../../assets/triangle.png";
import Navbar from "../Navbar/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Home() {
  return (
    <div className="home">
      <img src={sideMountains} alt="" className="side-mountains" />
      <img src={homeMessage} alt="" className="home-message" />
      <img src={triangleHome} alt="" className="triangle-home" />
      <Navbar />
      <div className="home-content">
        <div className="left-side">
          <div className="title-container">
            <div className="small-title">
              <h2 className="jelly-letter">I</h2>
              <h2 className="jelly-letter">'</h2>
              <h2 className="diff att">m</h2>
            </div>
            <div className="title">
              <h1 className="jelly-letter">
                <span className="span-light">D</span>
              </h1>
              <h1 className="jelly-letter">
                <span className="span-light">A</span>
              </h1>
              <h1 className="jelly-letter">
                <span className="span-light">N</span>
              </h1>
              <h1 className="jelly-letter">
                <span className="span-light">N</span>
              </h1>
              <h1 className="jelly-letter">
                <span className="span-light">I</span>
              </h1>
            </div>
          </div>
          <div className="info-btns">
            <p>
              <a href="#2">Explore My Portofolio</a>
            </p>
            <p>
              <a href="#1">Connect With Me &#8594;</a>
            </p>
          </div>
        </div>
        <div className="right-side">
          <a className="icons facebook-icon">
            <FacebookIcon />
          </a>
          <a className="icons github-icon">
            <GitHubIcon />
          </a>
          <a className="icons linkedin-icon">
            <LinkedInIcon />
          </a>
          <a className="icons instagram-icon">
            <InstagramIcon />
          </a>
          <a className="icons twitter-icon">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
