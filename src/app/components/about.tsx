import Image from "next/image"

export default function About(){
    return(
        <>
        <section className="flex items-center p-16 font-poppins">
            <div className="p-5">
                <h1 className="flex justify-center text-4xl font-semibold pb-5 text-gray-950">Seja bem-vindo á <p className="text-blue-950 pl-2">Creatus Group</p></h1>
                <p className="text-center text-gray-700"> Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
            </div>
            <div className="w-max">
                <Image
                      src="/img/logo.png"
                      width={2000}
                      height={2000}
                      alt="Imagem 1"
                      className="rounded-lg"
                />
            </div>
        </section>
        </>
    )
}