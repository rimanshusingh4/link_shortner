import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* <h1>About.js page </h1> */}
      <div className="container about-container">
        <div className="left">
          <h6> About Bitly</h6>
          <h3 className="about-title">A catalyst for connections</h3>
          <p className="about-content">
            For over a decade, we’ve been the point of connection for sharers of
            digital information and their audiences. We pride ourselves in being
            a platform that is a catalyst for connections and we carry that
            commitment across everything we do.
          </p>
        </div>
        <div className="right">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1707856843/pages/wp-content/uploads/2023/10/02_diversity-page_people-illustration@2x.png"
            alt="about details"
          />
        </div>
      </div>
    </>
  );
};

export default About;
