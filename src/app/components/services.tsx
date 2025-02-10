import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./card";
import { IoIosGlobe } from "react-icons/io";

export default function Services(){
    return(
        <section className="p-24 flex justify-center flex-col gap-16">
            <div>
                <h1 className="font-poppins text-blue-950 font-semibold text-2xl flex justify-center">CONHEÇA OS NOSSOS SERVIÇOS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-blue-950 font-semibold text-2xl"><IoIosGlobe className="w-40 h-40" />Tráfego Pago</CardTitle>
                        <CardDescription>Gestão de seus anúncios online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-96"><b>Resultados rápidos</b> – Acelera o crescimento e gera conversões em pouco tempo.</li>
                            <li className="w-96"><b>Público segmentado</b> – Anúncios alcançam exatamente quem tem interesse no produto.</li>
                            <li className="w-96"><b> Escalabilidade</b> – Permite aumentar vendas e alcance conforme o investimento cresce.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-blue-950 font-semibold text-2xl"><IoIosGlobe className="w-40 h-40" />Tráfego Pago</CardTitle>
                        <CardDescription>Gestão de seus anúncios online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-96"><b>Resultados rápidos</b> – Acelera o crescimento e gera conversões em pouco tempo.</li>
                            <li className="w-96"><b>Público segmentado</b> – Anúncios alcançam exatamente quem tem interesse no produto.</li>
                            <li className="w-96"><b> Escalabilidade</b> – Permite aumentar vendas e alcance conforme o investimento cresce.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card> 
                <Card>
                    <CardHeader>
                        <CardTitle className="text-blue-950 font-semibold text-2xl"><IoIosGlobe className="w-40 h-40" />Tráfego Pago</CardTitle>
                        <CardDescription>Gestão de seus anúncios online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-96"><b>Resultados rápidos</b> – Acelera o crescimento e gera conversões em pouco tempo.</li>
                            <li className="w-96"><b>Público segmentado</b> – Anúncios alcançam exatamente quem tem interesse no produto.</li>
                            <li className="w-96"><b> Escalabilidade</b> – Permite aumentar vendas e alcance conforme o investimento cresce.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card> 
                <Card>
                    <CardHeader>
                        <CardTitle className="text-blue-950 font-semibold text-2xl"><IoIosGlobe className="w-40 h-40" />Tráfego Pago</CardTitle>
                        <CardDescription>Gestão de seus anúncios online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm">
                            <li className="w-96"><b>Resultados rápidos</b> – Acelera o crescimento e gera conversões em pouco tempo.</li>
                            <li className="w-96"><b>Público segmentado</b> – Anúncios alcançam exatamente quem tem interesse no produto.</li>
                            <li className="w-96"><b> Escalabilidade</b> – Permite aumentar vendas e alcance conforme o investimento cresce.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card> 
            </div>
        </section>
    )
}