import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Service";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
