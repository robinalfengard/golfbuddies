import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Tournaments from "../components/Sections/Tournaments";
import News from "../components/Sections/News";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Tournaments />
      <News />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


