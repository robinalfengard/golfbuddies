import React from "react";
// Sections
import TopNavbar from "./Nav/TopNavbar";
import Header from "./Sections/Header";
import Services from "./Sections/Services";
import Tournaments from "./Sections/Tournaments";
import News from "./Sections/News";
import Pricing from "./Sections/Pricing";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

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
