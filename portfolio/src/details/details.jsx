import React from "react";

import "./Detail.css";

const Detail = () => {
  return (
    <>
      <div className="main">
        <div className="firstsection">
          <div className="leftsection">
            <img src="src/details/Sahil.jpg" alt="" />
          </div>

          <div className="rightsection">
            Hi, I am
            <span className="self">  SAHIL</span> 
                
            <br />
            <br />
            Self-driven, quick starter, passionate programmer with a curious
            mind who enjoys solving a complex and challenging real-world
            problems.
            <br />
            {/* <span className="highlight">
              <u>
                <i>Web developer.</i>
                </u>
                </span> */}
            <br />
            <button class="button">
              <a href="src/details/Sahil CV.pdf">
                {" "}
                <span class="button-content">Download CV</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;