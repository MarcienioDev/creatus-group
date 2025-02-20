import { Button } from "./button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome({ id }: { id?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  // Verificando se a seção entrou na tela
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
    handleScroll(); // Checa imediatamente se o elemento está visível

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`flex items-center p-16 font-montserrat bg-[url(/img/img-6.jpg)] bg-cover text-start transform transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div className="p-5">
        <h1 className="flex justify-start text-4xl font-semibold pb-5 text-blue-800">
          Seja bem-vindo á{" "}
          <p className="text-blue-950 ml-2 px-2 py-1 bg-white rounded-md">
            Creatus Group
          </p>
        </h1>
        <p className="lg:text-xl md:text-sm text-white font-semibold tracking-widest">
          Acelere seu negócio com nossa agência de marketing digital 🚀
        </p>
        <Button asChild className="p-6 text-lg mt-11">
          <Link href="/services">Saiba mais!</Link>
        </Button>
      </div>
    </section>
  );
}
