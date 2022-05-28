import React, { useState } from "react";
import "./contact.css";
import topToPixel from "../../assets/topToPixel.png";

function Contact() {
  const [letters, setLetters] = useState("");

  function handleClick(e) {
    setLetters(letters.concat(e.target.textContent));
  }

  function addSpace(l) {
    l = letters;
    setLetters(l.concat(" "));
  }

  function deleteLast(l) {
    l = letters;
    setLetters(l.slice(l.length));
  }

  return (
    <div className="contact-section" id="3">
      <img src={topToPixel} className="top-to-pixel" />

      <div className="contact-title">
        <p className="contact-glitch">
          <span aria-hidden="true">CONTACT ME</span>
          CONTACT ME
          <span aria-hidden="true">CONTACT ME</span>
        </p>
      </div>

      <div className="contact-content">
        <form className="form">
          <input type="text" placeholder="Your name..." />
          <input type="email" placeholder="Your email..." />
          <input type="text" placeholder="Your message..." />
          <button type="submit">SUBMIT</button>
        </form>

        <div className="keyboard">
          <label htmlFor="special-message">
            Your buttons are not working? Try this... :)
          </label>
          <input
            type="text"
            value={letters}
            onChange={handleClick}
            name="special-message"
            className="special-message"
          />
          <div className="keyboard-container">
            <div className="first-row-keyboard">
              <p className="key-letter" onClick={handleClick}>
                Q
              </p>
              <p className="key-letter" onClick={handleClick}>
                W
              </p>
              <p className="key-letter" onClick={handleClick}>
                E
              </p>
              <p className="key-letter" onClick={handleClick}>
                R
              </p>
              <p className="key-letter" onClick={handleClick}>
                T
              </p>
              <p className="key-letter" onClick={handleClick}>
                Y
              </p>
              <p className="key-letter" onClick={handleClick}>
                U
              </p>
              <p className="key-letter" onClick={handleClick}>
                I
              </p>
              <p className="key-letter" onClick={handleClick}>
                O
              </p>
              <p className="key-letter" onClick={handleClick}>
                P
              </p>
            </div>
            <div className="second-row-keyboard">
              <p className="key-letter" onClick={handleClick}>
                A
              </p>
              <p className="key-letter" onClick={handleClick}>
                S
              </p>
              <p className="key-letter" onClick={handleClick}>
                D
              </p>
              <p className="key-letter" onClick={handleClick}>
                F
              </p>
              <p className="key-letter" onClick={handleClick}>
                G
              </p>
              <p className="key-letter" onClick={handleClick}>
                H
              </p>
              <p className="key-letter" onClick={handleClick}>
                J
              </p>
              <p className="key-letter" onClick={handleClick}>
                K
              </p>
              <p className="key-letter" onClick={handleClick}>
                L
              </p>
            </div>
            <div className="third-row-keyboard">
              <p className="key-letter" onClick={handleClick}>
                Z
              </p>
              <p className="key-letter" onClick={handleClick}>
                X
              </p>
              <p className="key-letter" onClick={handleClick}>
                C
              </p>
              <p className="key-letter" onClick={handleClick}>
                V
              </p>
              <p className="key-letter" onClick={handleClick}>
                B
              </p>
              <p className="key-letter" onClick={handleClick}>
                N
              </p>
              <p className="key-letter" onClick={handleClick}>
                M
              </p>
            </div>
            <div className="fourth-row-keyboard">
              <p className="key-letter" onClick={addSpace}>
                SPACE
              </p>
              <p className="key-letter" onClick={deleteLast}>
                &#8592;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
