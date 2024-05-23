import Bienvenida from '../assets/bienvenida.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="inicio" className='h-screen w-full bg-gradient-to-b from-[#F6F6E9]  to-green-300'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className=' text-green-950 text-4xl sm:text-7xl font-bold '> Bienvenido CindyCred</h2>
                <p className=' text-[#191914] font-semibold py-4 max-w-md '>
                En CindyCred, ofrecemos préstamos personales de manera rápida y segura. Ya sea para financiar un proyecto o cubrir gastos imprevistos, estamos aquí para ayudarte. ¡Solicita tu préstamo hoy con CindyCred!
                </p>
                <div>
                    <Link to='contacto' smooth duration={500} className=' group text-black w-fit px-6 p-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#F6F6E9] to-green-800 cursor-pointer '> 
                        Pide ya!
                            <span className=' group-hover:rotate-90 duration-300 ml-3  '>
                                <FaLongArrowAltRight/>
                            </span> 
                    </Link>
                </div>
            </div>
            <div>
                <img src={Bienvenida} alt="homePicture" className=' rounded-xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home