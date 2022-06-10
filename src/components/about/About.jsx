import React from "react";
import "./about.scss";

export default function about() {
  return (
    <div className="about" id="about">
      <div className="left">
        <img src="assets/conn.jpeg" alt="connor-head-shot" />
      </div>
      <div className="right">
        <div classname="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Connor McCrory</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  );
}
