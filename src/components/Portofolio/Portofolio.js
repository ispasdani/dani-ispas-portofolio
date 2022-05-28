import React from "react";
import "./portofolio.css";
import imgPort1 from "../../assets/portofolioImgs/port1.jpg";
import imgPort2 from "../../assets/portofolioImgs/port2.jpg";
import imgPort3 from "../../assets/portofolioImgs/port3.jpg";
import imgPort4 from "../../assets/portofolioImgs/port4.jpg";
import imgPort5 from "../../assets/portofolioImgs/port5.jpg";
import imgPort6 from "../../assets/portofolioImgs/port6.jpg";
import imgPort7 from "../../assets/portofolioImgs/port7.jpg";
import imgPort8 from "../../assets/portofolioImgs/port8.jpg";
import imgPort9 from "../../assets/portofolioImgs/port9.jpg";
import imgPort10 from "../../assets/portofolioImgs/port10.jpg";
import imgPort11 from "../../assets/portofolioImgs/port11.jpg";
import imgPort12 from "../../assets/portofolioImgs/port12.jpg";
import imgPort13 from "../../assets/portofolioImgs/port13.jpg";
import imgPort14 from "../../assets/portofolioImgs/port14.jpg";
import imgPort15 from "../../assets/portofolioImgs/port15.jpg";
import imgPort16 from "../../assets/portofolioImgs/port16.jpg";
import imgPort17 from "../../assets/portofolioImgs/port17.jpg";
import imgPort18 from "../../assets/portofolioImgs/port18.jpg";
import imgPort19 from "../../assets/portofolioImgs/port19.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

function Portofolio() {
  return (
    <div className="portofolio-section" id="2">
      <p className="glitch porto-glitch">
        <span aria-hidden="true">PORTOFOLIO</span>
        PORTOFOLIO
        <span aria-hidden="true">PORTOFOLIO</span>
      </p>
      <div className="grid-images">
        <div className="row">
          <div className="column">
            <div className="img-container-effect">
              <img
                src={imgPort1}
                alt="portofolio"
                className="portofolio-img img-one"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    School project where I tried to create an AR app for testing
                    products in your car
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                  <p className="language">ThreeJS</p>
                  <p className="language">Augumented Reality</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort2} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Web3 Cryptopunk clone. Display your minted NFT's
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">ThirdWeb</p>
                  <p className="language">Axios</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort3} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    School project for a cool coffee shop in Aarhus.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort7} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    School project for a car rental company. The assigment was
                    to use sessionStorage.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                  <p className="language">ThreeJS</p>
                  <p className="language">Blender</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort19}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Simple React quiz app. I build it just to try the Context
                    API
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Hooks</p>
                  <p className="language">Context API</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort10}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    In this app I have added multiple 3D objects and I have
                    applied different orbit controls settings.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">react-three-fiber</p>
                  <p className="language">ThreeJS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="img-container-effect">
              <img src={imgPort4} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    This is my exam project. It's a presentation website for
                    Crib Barbershop.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort8} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Storytelling website. This is for someone who is interested
                    in being a student in Aarhus.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Framer Motion</p>
                  <p className="language">Animista</p>
                  <p className="language">react-intersection-observer</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort5} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Presentation website about a recycling company in Romania.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort6} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    This is a showcase of how powerful these two technologies
                    are: GSAP and ThreeJS
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                  <p className="language">ThreeJS</p>
                  <p className="language">GSAP</p>
                  <p className="language">NodeJS</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img src={imgPort9} alt="portofolio" className="portofolio-img" />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Cool horizontal scroll effect.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Framer Motion</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort11}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Crypto Dashboard with real time prices and 3D coin models
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">AXIOS</p>
                  <p className="language">react-three-fiber</p>
                  <p className="language">ThreeJS</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort12}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Recipe app where you can search a recipee from 1000.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">API Food</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort17}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    ToDo CRUD app with Vanilla JavaScript. Everything is saving
                    in localstorage.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                  <p className="language">localstorage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="img-container-effect">
              <img
                src={imgPort15}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    Just a cool website about Monsters that are visible only in
                    the light. Try turn it off!
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort16}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">Website for a pizza place.</p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Framer Motion</p>
                  <p className="language">API</p>
                  <p className="language">Redux</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort14}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    CRUD app made with Vanilla Javascript
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">HTML</p>
                  <p className="language">CSS</p>
                  <p className="language">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="img-container-effect">
              <img
                src={imgPort13}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    ReactJS Stopwatch app. Start, stop, pause and resume.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Hooks</p>
                </div>
              </div>
            </div>

            <div className="img-container-effect">
              <img
                src={imgPort18}
                alt="portofolio"
                className="portofolio-img"
              />
              <div className="overlay">
                <div className="project-short-description">
                  <p className="text-description">
                    ReactJS CRUD ToDo app with Firebase Storage.
                  </p>
                </div>
                <div className="project-technologies">
                  <p className="language">ReactJS</p>
                  <p className="language">Firebase</p>
                  <p className="language">CRUD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portofolio-sub-section">
        <p className="small-glitch">
          <span aria-hidden="true">Check out my - </span>
          Check out my -<span aria-hidden="true">Check out my - </span>
        </p>
        <div className="portofolio-icon">
          <a href="https://github.com/ispasdani">
            <GitHubIcon />
          </a>
        </div>
        <p className="small-glitch">
          <span aria-hidden="true"> - for more!</span>- for more!
          <span aria-hidden="true"> - for more!</span>
        </p>
      </div>
    </div>
  );
}

export default Portofolio;
