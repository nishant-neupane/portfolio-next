import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Experience from "./component/Service";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Testimonials from "./component/Testimonials";
import Achievements from "./component/Achievements";
import CTA from "./component/CTA";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const page = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Testimonials />
      <Achievements />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
