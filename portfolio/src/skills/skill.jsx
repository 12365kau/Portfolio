import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <hr />
      <div className="skillsection">
        <h1>Programming Languages And Frameworks:</h1>
        <hr />
        <div className="frontend">
          <div className="frontend-container">
            <span className="language-1"> HTML</span>
            <span className="language-2">CSS</span>
            <span className="language-3">JAVA SCRIPT</span>
            <span>FRONT-END LANGUAGES</span>
          </div>
        </div>

        <div className="frameworks">
          <div className="framework-container">
            <span className="framework-1"> REACT JS</span>
            <span className="framework-2"> DJANGO</span>
            <span>FRAMEWORKS</span>
          </div>
        </div>

        <div className="backend">
          <div className="backend-container">
            <span className="blanguage-1"> PYTHON</span>
            <span>BACK-END LANGUAGES</span>
          </div>
        </div>

        <div className="database">
          <div className="database-container">
            <span className="dlanguage-1"> MY STRUCTURED QUERY LANGUAGE (MySQL)</span>
            <span>DATABASE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;