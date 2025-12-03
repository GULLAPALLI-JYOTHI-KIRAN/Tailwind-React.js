import React from "react";
import Navabar from "./navbar";
import Banner from "./banner";
import OurSkills from "./ourskill";
import SpecialSideCard from "./specailSideCard";
import Projects from "./projects";
import Footer from "./footer";
const App = () => {
  return (
    <>
      <Navabar />
      <Banner />
      <OurSkills />
      <SpecialSideCard />
      <Projects />
      <Footer />
    </>
  );
};
 
export default App;