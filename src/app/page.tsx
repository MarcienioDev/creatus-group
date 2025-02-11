import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Welcome from "./components/welcome";
import About from "./components/about";

export default function Home() {
  return (
    <>
    <Navbar />
    <Welcome />
    <Services />
    <About />
    <Contact />
    <Footer />
    </>
  );
}
