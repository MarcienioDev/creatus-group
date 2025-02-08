import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Services from "./components/services";

export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}
