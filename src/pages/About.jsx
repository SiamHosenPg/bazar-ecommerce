import React from "react";
import Nav from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";
import Aboutleftmenu from "../components/abouts/Aboutleftmenu";
import Aboutcontent from "../components/abouts/Aboutcontent";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="PageRatio flex gap-14 justify-between">
        <Aboutleftmenu />
        <Aboutcontent />
      </div>
      <Footer />
    </div>
  );
};

export default About;
