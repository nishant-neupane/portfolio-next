import React from "react";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Services from "./component/services/Service";
import Work from "./component/work/Work";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

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
