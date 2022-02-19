import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT BLOG GO</h1>
        <h4 className="aboutDesc">
          Hello visitors!! Welcome to <span>BLOG Go</span>.
        </h4>
        <p>
          <span>Blog Go </span>is a blogging platform which provides you
          interesting content.
          <span> fashion, health, tourism, self care</span> blogs with a focus on
          dependability and health & self care. 
        </p>
        <h2>Want to write a blog??</h2>
        <Link to="/write">
          <button>Start writing a blog</button>
        </Link>
      </div>
    </div>
  );
}
