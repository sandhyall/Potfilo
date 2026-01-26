import React from "react";
import HomeSection from "../Section/HomeSection";
import AboutSection from "../Section/AboutSection";
import Services from "../Section/Services";
import ProjectSection from "../Section/ProjectSection";
import ContactSection from "../Section/ContactSection";

const Home = () => {
  return (
    <div className="pt-16">
      <section id="Home" className=" ">
        <h1><span><HomeSection/></span></h1>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 ><span><AboutSection/></span></h1>
      </section>

      <section id="services" className="h-screen flex ">
        <h1><span><Services/></span></h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 ><ProjectSection/></h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1><ContactSection/></h1>
      </section>
    </div>
  );
};

export default Home;
