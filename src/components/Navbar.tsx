import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { RiMenu5Fill } from 'react-icons/ri'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className='bg-primary-bg h-[6vh] mx-auto flex justify-between items-center p-4'>
        {/* Left */}
        <Link href='/' className='flex items-center gap-6'> 
            <img src='https://res.cloudinary.com/dnzdg980p/image/upload/v1684333689/Captura_de_pantalla_2023-05-17_112713_ia7x0j.jpg' alt="logo-wg" className='h-[6vh] w-auto' />
        </Link>
            <div className='hidden md:flex items-center cursor-pointer font-medium gap-4 p-1'>
                <Link href='/tienda' className='border-b-2 border-transparent text-secondary-bg ease-in duration-300'>Tienda</Link>
            </div>
            <div className='cursor-pointer md:hidden bg-secondary-bg rounded-lg p-1' onClick={() => setNav(!nav)}>
                <RiMenu5Fill size={30} className='text-primary-bg hover:scale-110 ease-in duration-300'/>
            </div>
      

        
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-200 z-20 duration-300' : 'fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer text-primary-bg hover:scale-110 ease-in duration-300' onClick={() => setNav(!nav)}/>
            {/* <Link to='/' onClick={() => setNav(false) }>
                <img src='https://res.cloudinary.com/dnqmez68n/image/upload/v1684092544/logo_pro_CICEC--02_kjvcsn.png' alt="logo-cicec" className='h-32 w-auto mx-auto mt-4' />
                <h2 className='text-2xl font-bold text-purple-900 p-4'>Cicec</h2>
            </Link> */}
                <nav>
                    <ul className='flex flex-col px-4 py-8 gap-6 text-xl text-gray-800'>
                        {/* <Link to='/conocenos' onClick={() => setNav(false) } className='hover:text-purple-900 ease-in duration-200 flex'><FaHandHoldingMedical size={25} className='mr-4'/>Conocenos</Link>
                        <Link to='/tratamientos' onClick={() => setNav(false) } className='hover:text-purple-900 ease-in duration-200 flex'><FaSyringe size={25} className='mr-4'/> Tratamientos</Link>
                        <Link to='/contactanos' onClick={() => setNav(false) } className='hover:text-purple-900 ease-in duration-200 flex'><GrMail size={25} className='mr-4'/> Contactanos</Link> */}
                    </ul>
                </nav>
            </div>
    </div>
  )
}

export default Navbar