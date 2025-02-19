"use client";

import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Welcome from "./components/welcome";
import About from "./components/about";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  return (
    <>
    <Navbar />
    <Welcome id="Welcome" />
    <Services id="Services"/>
    <About id="About"/>
    <Contact id="Contact"/>
    <BackToTopButton />
    <Footer />
    </>
  );
}
