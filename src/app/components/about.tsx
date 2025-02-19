export default function About({ id }: { id?: string }) {
    return (
        <section id={id} className="font-poppins flex flex-row p-24 bg-blue-800 text-white ">
            <div className="w-full">
                <h1 className="mb-5 text-3xl font-semibold">QUEM SOMOS?</h1>
                <p>Na Creatus Group, acreditamos que o sucesso de uma marca é construído sobre bases sólidas. Nossa abordagem é guiada por princípios conservadores que valorizam a disciplina, a clareza e o compromisso com resultados tangíveis. Enxergamos o marketing não como um jogo de modismos passageiros, mas como uma estratégia bem estruturada que respeita a história, a identidade e o propósito de cada cliente.
Observamos o mercado com um olhar atento e analítico, identificando oportunidades com precisão e desenvolvendo soluções inteligentes. Trabalhamos para transformar visão em ação, com técnicas que se mantêm eficazes ao longo do tempo.
Se você busca uma agência que prioriza a consistência, a eficiência e o crescimento sustentável, a Creatus Group está pronta para ser sua parceira estratégica.</p>
            </div>
            <div className="flex flex-col justify-between ml-16 w-full text-sm">
                <div className="flex flex-row items-center text-lg">
                    <div>
                        <p className="text-5xl font-semibold">+15</p>
                        <p>Estados</p>
                    </div>  
                    <div>
                        <p className="ml-4">Atuamos em cada lugar conhecendo a sua realidade e entendendo a necessidade de cada parceiro. Somos uma agência de marketing digital que atua de forma personalizada.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-lg">
                    <div>
                        <p className="text-5xl font-semibold">+90</p>
                        <p>Projetos</p>
                    </div>
                    <div>
                        <p className="ml-4">Trabalhamos com uma variedade de projetos, desde landing pages e sites completos, atendendo a todas as necessidades da sua empresa.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-lg">
                    <div>
                    <p className="text-5xl font-semibold">+120</p>
                    <p>Clientes</p>
                    </div>
                    <div>
                        <p className="ml-4">Trabalhamos com uma variedade de projetos, desde landing pages e sites completos, atendendo a todas as necessidades da sua empresa.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}