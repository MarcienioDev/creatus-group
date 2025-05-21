import Image from "next/image";

export default function About({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="font-poppins flex flex-col md:flex-row p-6 md:p-12 lg:p-20 bg-secondary text-white gap-8 md:gap-16"
    >
      <div className="w-full mt-4 md:mt-6">
        <h1 className="mb-4 md:mb-6 text-2xl md:text-3xl font-sports">
          QUEM SOMOS?
        </h1>
        <p className="leading-relaxed text-sm md:text-base">
          Na Hagbyte, a gente acredita que tecnologia boa é aquela que facilita sua vida —
          seja com um site que impressiona ou com um sistema que faz o trabalho chato sozinho.
          <br /><br />
          Somos uma empresa jovem, mas com fome de código e sede de inovação.
          Trabalhamos com desenvolvimento web responsivo, moderno e funcional, e também criamos soluções de automação pra deixar sua rotina mais leve (e produtiva!).
          <br /><br />
          Aqui, cada projeto é único. Escutamos, planejamos e entregamos com carinho, atenção e um toque de criatividade que faz a diferença.
          Nosso compromisso é entregar resultados que fazem sentido pro seu negócio — com agilidade, transparência e qualidade.
          <br /><br />
          Se você quer tirar uma ideia do papel ou melhorar o que já tem, cola com a gente.
          Bora transformar tecnologia em solução de verdade!
        </p>
      </div>

      <div className="w-full md:w-1/3">
        <Image
          src="/img/img-7.jpg"
          width={400}
          height={400}
          alt="HAGBYTE STUDIOS"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
