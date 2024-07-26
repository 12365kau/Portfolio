import React from "react";
import "./Header.css";
import Abt from "../about/about";



const Head = () => {
  return (
    <>
      <nav>
        <div className="left">Sahil Kaushik</div>
        <div className="right">
          <ul>
            <li>
              <a href="/"> HOME</a>
            </li>
            <li>
              <a href="Abt"> ABOUT</a>
            </li>
            <li>
              <a href="/"> EDUCATION</a>
            </li>
            <li>
              <a href="/"> SKILLS</a>
            </li>
            <li>
              <a href=""> CONTACT ME</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Head;
