import logo from '../assets/logo1.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name='inicio'
      className='flex min-h-screen w-full bg-gradient-to-b from-[#F6F6E9] to-[#F6F6E9] items-center justify-center'
    >
      <div className='flex flex-col md:flex-row items-center justify-center h-full px-4'>
        {/* Logo y texto centrados y más responsivos */}
        <img
          src={logo}
          alt='homePicture'
          className='rounded-xl w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4' // Tamaños dinámicos para el logo
        />
        <div className='w-full md:w-1/3 mb-4 text-center md:text-left'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-semibold'>
            BIENVENIDO!
          </h1>{' '}
          {/* Tamaños dinámicos para el texto */}
          <p className='text-[#191914] font-semibold'>
            No busques mas! Aqui tenemos la solucion a tus problemas.
            <Link
              to='contacto'
              smooth
              duration={500}
              className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#F6F6E9] to-green-800 cursor-pointer'
            >
              Pide ya!
              <span className='group-hover:rotate-90 duration-300 ml-3'>
                <FaLongArrowAltRight />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
