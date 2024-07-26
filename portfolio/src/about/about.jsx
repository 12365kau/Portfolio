import React from "react";
import "./About.css";

const Abt = () => {
  return (
    <>
      <hr />
      <div>
        <h1>About:</h1>
        <hr />
        <div className="detail">
          I am Sahil Kaushik. Enthusiastic and Competitive student eager to
          contribute to team success through hardwork, attention to detail and
          excellent organisational skills. Clear understanding of
          <span className="highlight"> HTML, CSS, PYTHON.</span> My strength is
          Web Development. I am keenly interseted in the experimental areas as
          well as coding and am well versed in{" "}
          <span className="highlight">
            ReactJS, Django and Web Development.
          </span>
          <br />
          <br />
          <span className="inshort">
            {" "}
            <h>Languages:</h> Python, HTML, CSS, JavaScript
          </span>{" "}
          <br />
          <span className="inshort">
            {" "}
            <h>Databases:</h> MySQL
          </span>{" "}
          <br />
          <span className="inshort">
            {" "}
            <h>Frameworks:</h> Django, ReactJS, Bootstrap
          </span>
          <br />
          <span className="inshort">
            {" "}
            <h>Tools and Libraries:</h> Redux Toolkit, MS Office, Jupyter Notebook
          </span>
        </div>
      </div>
    </>
  );
};

export default Abt;