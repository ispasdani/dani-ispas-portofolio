import React, { useState } from "react";
import "./navbar.css";
import meImg from "../../assets/meNav.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="lds-dual-ring"></div>
      {!showMenu ? (
        <div
          className="hamburger-not-active"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <>
          <div
            className="hamburger-active"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar-on">
            <div className="nav-links">
              <h1
                className="nav-link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <a href="#1">ABOUT ME</a>
              </h1>
              <h1
                className="nav-link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <a href="#2">PORTOFOLIO</a>
              </h1>
              <h1
                className="nav-link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <a href="#3">CONTACT</a>
              </h1>
              <img src={meImg} alt="my-potrait-but-pixelated" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
