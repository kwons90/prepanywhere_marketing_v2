import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Results from "../components/Sections/Results";
import Team from "../components/Sections/Team";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Results />
      <Team />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}


