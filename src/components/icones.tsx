import arrowRight from '../assets/arrow-right.svg'
import code from '../assets/code.svg'
import imageSquare from '../assets/image-square.svg'
import magicWand from '../assets/magic-wand.svg'
import musicNotes from '../assets/music-notes-simple.svg'
import paperPlane from '../assets/paper-plane-right.svg'
import playCircle from '../assets/play-circle.svg'
import plusCircle from '../assets/plus-circle.svg'

const icons = {
    "arrowRight" : arrowRight,
    "code" : code,
    "imageSquare" : imageSquare,
    "magicWand" : magicWand,
    "musicNotes" : musicNotes,
    "paperPlane" : paperPlane,
    "playCircle" : playCircle,
    "plusCircle" : plusCircle
}

export function Botao(props){
    return (
        <section className='flex p-3 justify-between bg-[#0F172A] rounded-2xl border border-[#334155]'>
            <div className='flex gap-3 my-auto'>
                <img className='p-2 border border-[#1E293B] rounded-md' src={ icons[props['icon']] } alt="" />
                <p className='sm:text-base text-[10px] text-[#E2E8F0] font-semibold my-auto'>{ props.text }</p>
            </div>
            <img className='sm:p-1 p-2 my-auto' src={ arrowRight } alt="" />
        </section>
    )
}

export function Header(){
    return (
        <header className='flex flex-col gap-4 items-center justify-center'>
            <img className='sm:w-12 sm:h-12 w-10 h-10 p-2 bg-[#0F172A] sm:rounded-2xl rounded-xl border border-[#334155]' src={ magicWand } alt="" />
            <h1 className='text-[#F8FAFC] sm:text-2xl text-xl text-center font-semibold'>Experimente o poder da Inteligência Artificial</h1>
        </header>
    )
}

export function Footer(){
    return (
        <footer className='flex sm:pt-7 pt-8 justify-between border-t border-[#334155]'>
            <div className='w-full flex p-2 bg-[#0F172A] rounded-2xl border border-[#334155]'>
                <img className='p-1' src={ plusCircle } alt="" />
                <p className='ml-2 text-[#E2E8F0] sm:text-sm text-[10px] my-auto'>Envie uma mensagem ou digite “/” para exibir os comandos</p>
            </div>
            <div className='flex p-2 ml-3 my-auto bg-[#0F172A] rounded-xl border border-[#334155]'>
                <img className='p-1' src={ paperPlane } alt="" />
            </div>
        </footer>
    )
}