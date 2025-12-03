import React from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Banner from "./banner";
import Aboutus from "./aboutus";
import Founder from "./founder";
import RecentProject from "./recentprojects";
import Footer from "./footer";
const App = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Banner />
      <Aboutus />
      <Founder />
      <RecentProject />
      <Footer />
    </>
  );
};
 
export default App