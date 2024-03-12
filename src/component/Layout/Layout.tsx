import React from "react";
import HeaderLayout from "../header/header";
import Profile from "../profile/profile";
import About from "../about/About";
import Contact from "../contact/Contact";
import "./Layout.scss";
import Skill from "../skill/Skill";
import Experience from "../experience/Experience";

function Layout() {
  return (
    <div className="layout"
    >
      <HeaderLayout />
      <Profile />
      <div  className="layout__content">
      <About/>
      <Skill/>
      <Experience/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default Layout;
