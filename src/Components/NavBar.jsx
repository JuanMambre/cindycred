import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'inicio'
    },
    {
      id: 2,
      link: 'nosotros'
    },
    {
      id: 3,
      link: 'contacto'
    },
    {
      id: 4,
      link: 'preguntas frecuentes'
    }
  ]

  return (
    <div className='flex justify-cneter items-center w-full h-20 text-black fixed bg-gradient-to-r from- to-blue-800'>
      <div className='flex items-center ml-10'>
        {/* <img
          src={Logo}
          alt='logo'
          className='h-12 md:h-16 lg:h-20 w-auto ml-4 md:ml-0 max-w-[200px]'
        /> */}
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-bold text-black relative group'
          >
            <Link
              to={link}
              smooth
              duration={500}
            >
              {' '}
              {link}{' '}
            </Link>
            <span className=' absolute -bottom-0 top-[1.30rem] w-0 left-0 h-0.5 bg-gradient-to-r from-green-600 to-green-900 transition-all group-hover:w-full' />
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-white-500 md:hidden'
      >
        {nav ? (
          <FaTimes
            size={30}
            color='white'
          />
        ) : (
          <FaBars size={30} />
        )}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {' '}
                {link}{' '}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
