import React from "react";
import Aboutleftmenu from "../components/abouts/Aboutleftmenu";
import Aboutcontent from "../components/abouts/Aboutcontent";

const About = () => {
  return (
    <div>
      <div className="PageRatio flex gap-14 justify-between">
        <Aboutleftmenu />
        <Aboutcontent />
      </div>
    </div>
  );
};

export default About;
