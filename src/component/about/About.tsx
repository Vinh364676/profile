import React from "react";
import "./About.scss";

function About() {
  return (
    <div id="about"  className="about">
      <div data-aos="fade-right" className="about__container">
        <div className="about__container__image"></div>
        {/* <img src={img_about} alt="" /> */}
      </div>
      <div data-aos="fade-left" className="about__content">
        <h5 className="about__content__title">About me </h5>
        <p className="about__content__desc">
          I am actively looking for opportunities to apply the skills and
          knowledge I have accumulated into real projects in the field of web
          programming. My education has equipped me with a strong foundation in
          web programming, including languages ​​like HTML, CSS, and JavaScript,
          as well as popular frameworks like React and Node.js.
        </p>
      </div>
    </div>
  );
}

export default About;
