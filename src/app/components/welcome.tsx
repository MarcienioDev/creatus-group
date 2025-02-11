import { Button } from "./button"
import Link from "next/link"

export default function Welcome(){
    return(
        <>
        <section className="flex items-center p-16 font-montserrat bg-[url(/img/img-6.jpg)] bg-cover text-start">
            <div className="p-5">
                <h1 className="flex justify-start text-4xl font-semibold pb-5 text-blue-800">Seja bem-vindo á <p className="text-blue-950 ml-2 px-2 py-1 bg-white rounded-md">Creatus Group</p></h1>
                <p className="lg:text-xl md:text-sm text-white font-semibold tracking-widest">Acelere seu negócio com nosssa agência de marketing digital 🚀</p>
                <Button asChild className="p-6 text-lg mt-11">
                    <Link href="/services">Sabia mais!</Link>
                </Button>
            </div>
        </section>
        </>
    )
}