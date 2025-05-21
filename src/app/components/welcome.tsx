import { Button } from "./button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome({ id }: { id?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id || "");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`flex items-center justify-center px-4 py-12 md:py-16 md:px-12 lg:px-16 font-montserrat bg-[url(/img/img-1.jpg)] bg-cover text-start transform transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div className="p-4 md:p-6 lg:p-8 bg-black/50 rounded-lg max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-sports pb-4 md:pb-5 text-secondary">
          Seja bem-vindo à{" "}
          <span className="text-secondary px-2 ml-2 bg-white rounded-md">
            HAGBYTE
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-white font-poppins tracking-wider">
          Onde cada byte se transforma em soluções criativas, moldando histórias que conectam pessoas, impulsionam negócios e constroem um futuro mais inovador. 🚀
        </p>
        <div className="mt-8 md:mt-10">
          <Button asChild className="px-6 py-3 text-base md:text-lg">
            <Link href="#Services">Saiba mais!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

