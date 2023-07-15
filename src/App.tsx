import { Botao, Footer, Header } from "./components/icones";


export function App(){
    return (
        <div className="w-full mx-auto sm:p-10 p-5 sm:rounded-[32px] sm:border sm:border-[#334155]" id="container">
            <div className="flex flex-col">
                <Header />
                <main className="flex flex-col sm:mx-20 mx-10 sm:my-7 my-8 gap-5">
                    <Botao icon='code' text='Gerador de códigos' />
                    <Botao icon='imageSquare' text='Edição de fotos' />
                    <Botao icon='playCircle' text='Geração de vídeos' />
                    <Botao icon='musicNotes' text='Criador de áudios e musicas' />
                </main>
                <Footer />
            </div>
        </div>
    )
}