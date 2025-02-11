import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./card";
import { FaPencilAlt, FaUserCog, FaRocket, FaLightbulb } from "react-icons/fa";
import { Button } from "./button";

export default function Services(){
    return(
        <section className="p-24 flex justify-center flex-col gap-16 font-poppins">
            <div>
                <h1 className="font-poppins text-blue-950 font-semibold text-2xl flex justify-center">CONHEÇA OS NOSSOS SERVIÇOS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
                <Card className="shadow-lg hover:scale-105">
                    <CardHeader>
                        <CardTitle className="text-blue-800 font-semibold text-2xl"><FaRocket className="w-40 h-40" />Tráfego Pago</CardTitle>
                        <CardDescription>Gestão de seus anúncios online.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-full text-gray-500"><b className="text-gray-600">Resultados rápidos</b> – Acelera o crescimento e gera conversões em pouco tempo.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Público segmentado</b> – Anúncios alcançam exatamente quem tem interesse no produto.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600"> Escalabilidade</b> – Permite aumentar vendas e alcance conforme o investimento cresce.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:scale-105">
                    <CardHeader>
                        <CardTitle className="text-blue-800 font-semibold text-2xl"><FaPencilAlt className="w-32 h-32 mb-4 mt-4 " />Criativos</CardTitle>
                        <CardDescription>Artes personalizadas que engajam e geram resultados reais.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-full text-gray-500"><b className="text-gray-600">Impacto visual</b> – Designs estratégicos que capturam atenção e engajam público-alvo.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Identidade forte</b> – Criativos personalizados para destacar sua marca no digital.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Escalabilidade</b> – Artes otimizadas que aumentam cliques, interações e vendas.</li>
                        </ul>
                    </CardContent>
                </Card> 
                <Card className="shadow-lg hover:scale-105">
                    <CardHeader>
                        <CardTitle className="text-blue-800 font-semibold text-2xl"><FaUserCog className="w-40 h-40" />CRM</CardTitle>
                        <CardDescription>Gerencie o relacionamento com seu cliente em um só lugar</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-full text-gray-500"><b className="text-gray-600">Gestão de clientes</b> – Organize, acompanhe e fortaleça o relacionamento com seu público.    </li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Automação inteligente</b> –  Otimize processos e ganhe eficiência com fluxos automatizados.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Análises estratégicas</b> – Tenha insights valiosos para tomar decisões mais assertivas.</li>
                        </ul>
                    </CardContent>
                </Card> 
                <Card className="shadow-lg hover:scale-105">
                    <CardHeader>
                        <CardTitle className="text-blue-800 font-semibold text-2xl"><FaLightbulb className="w-36 h-36 mb-4" />Soluções Comerciais</CardTitle>
                        <CardDescription>Seu marketing gerenciado por profissionais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-full text-gray-500"><b className="text-gray-600">Estratégias eficientes</b> – Soluções personalizadas para impulsionar vendas e crescimento.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Otimização de processos</b> – Automatize e simplifique tarefas para mais produtividade.</li>
                            <li className="w-full text-gray-500"><b className="text-gray-600">Resultados escaláveis</b> – Expanda seu negócio com estratégias focadas em performance.</li>
                        </ul>
                    </CardContent>
                </Card> 
            </div>
            <Button className="self-center w-1/3 h-12 text-lg">Contratar Agora</Button>
        </section>
    )
}