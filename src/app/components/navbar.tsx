import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-20 top-0 shadow-lg font-montserrat">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src="/img/logo.png"
          width={150}
          height={150}
          alt="HAGBYTE STUDIOS"
        />

        {/* Botão hamburguer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Itens do menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-sports flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#Welcome"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 hover:underline"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 hover:underline"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 hover:underline"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
