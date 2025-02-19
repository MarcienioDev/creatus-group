"use client";

import { Button } from "./button";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Welcome({ id }: { id?: string }) {
  return (
    <>
      <section id={id} className="flex items-center p-16 font-montserrat bg-[url(/img/img-6.jpg)] bg-cover text-start">
        <div className="p-5">
          <h1 className="flex justify-start text-4xl font-semibold pb-5 text-blue-800">
            Seja bem-vindo à{" "}
            <p className="text-blue-950 ml-2 px-2 py-1 bg-white rounded-md">
              Creatus Group
            </p>
          </h1>
          <div className="lg:text-xl md:text-sm text-white font-semibold tracking-widest">
            <Typewriter
              options={{
                strings: [
                  "Acelere seu negócio com nossa agência de marketing digital 🚀",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <Button asChild className="p-6 text-lg mt-11">
            <Link href="/services">Saiba mais!</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
