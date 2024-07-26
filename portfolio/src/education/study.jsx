import React from "react";
import "./Study.css";

const Education = () => {
  return (
    <>
      <div>
      <hr />
        <div className="secondsection">
          <span>what I have done so far</span>
          <h1>Education:</h1>
          <hr />

          <div className="study">
            <div class=" classes">
              <div class="card">
                <div class="front-content">
                  <p>Class 10th</p>
                </div>
                <div class="content">
                  <p class="heading"> (2017)</p>
                  <p>
                    <b>School:</b> Inderprasth, Senior, Secondary, School
                    (Hisar)
                    <br />
                  </p>
                  <p>
                    <b>Percentage:</b> 82.2%{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="classes">
              <div class="card">
                <div class="front-content">
                  <p>Class 12th</p>
                </div>
                <div class="content">
                  <p class="heading"> (2019)</p>
                  <p>
                    <b>School:</b> Diamond International School (Fatehabad)
                    <br />
                  </p>
                  <p>
                    <b>Stream:</b> Science
                  </p>
                  <p>
                    <b>Percentage:</b> 67%
                  </p>
                </div>
              </div>
            </div>

            <div class="classes">
              <div class="card">
                <div class="front-content">
                  <p>Bachelor's of <br/>
                     Science</p>
                </div>
                <div class="content">
                  <p class="heading"> (2023)</p>
                  <p>
                    <b>College:</b>Om Sterling Global University(Hisar)
                    <br />
                  </p>
                  <p>
                    <b>Course:</b> Electronics
                  </p>
                  <p>
                    <b>Percentage:</b> 7 CGPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="detail">
          Looking for an opportunity to work in a challenging position combining my skills in Software Engineering
          which provides professional development, intersting experiences and personal growth.
        </div>
      </div>
    </>
  );
};

export default Education;