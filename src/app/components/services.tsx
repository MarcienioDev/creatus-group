import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { DiCode } from "react-icons/di";
import { AiOutlineRobot } from "react-icons/ai";

export default function Services({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="px-4 py-12 md:py-16 md:px-12 lg:px-24 flex justify-center flex-col gap-10 md:gap-16 font-poppins"
    >
      <div>
        <h1 className="font-sports text-secondary text-xl md:text-2xl flex justify-center text-center">
          CONHEÇA OS NOSSOS SERVIÇOS
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10">
        {/* Card Desenvolvimento Web */}
        <Card className="shadow-lg hover:scale-105 transition-transform w-full md:w-64">
          <CardHeader>
            <div className="flex justify-center items-center mb-4">
              <DiCode className="w-16 h-16 md:w-20 md:h-20 text-secondary" />
            </div>
            <CardTitle className="text-secondary font-poppins tracking-wide text-center">
              Desenvolvimento Web
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm text-center">
              Tá precisando de um site bonito, rápido e que funcione em qualquer tela? <br />
              A gente cuida disso pra <b>VOCÊ</b>! <br />
              Do layout ao código, tudo feito com capricho e tecnologia de ponta. <br />
              Seu site com a sua cara, do jeitinho que o seu negócio merece.
            </p>
          </CardContent>
        </Card>

        {/* Card Automação */}
        <Card className="shadow-lg hover:scale-105 transition-transform w-full md:w-64">
          <CardHeader>
            <div className="flex justify-center items-center mb-4">
              <AiOutlineRobot className="w-16 h-16 md:w-20 md:h-20 text-secondary" />
            </div>
            <CardTitle className="text-secondary font-poppins tracking-wide text-center">
              Automação de Processos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm text-center">
              Sabe aquelas tarefas repetitivas que só tomam tempo? <br />
              A gente automatiza tudo isso pra <b>VOCÊ</b>! <br />
              Mais agilidade, menos erro e mais tempo pro que realmente importa. <br />
              Deixa que os sistemas trabalham por você, simples assim!
            </p>
          </CardContent>
        </Card>
      </div>

      <a
        href="#Contact"
        className="self-center w-full md:w-1/3 h-12 text-base md:text-lg font-sports bg-secondary text-white flex justify-center items-center rounded-lg hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 transition-colors"
      >
        Entre em contato
      </a>
    </section>
  );
}

