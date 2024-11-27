import {headerLogo} from '../assets/images/index';
import { navLinks } from '../Constants';
import { close, hamburger } from '../assets/icons';
import { useState } from 'react';

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

  return (
    <header className='padding-x py-8  w-full relative z-10'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="Nike Logo" width={130} height={29}/>
            </a>

            <ul className=' flex max-lg:hidden flex-1 justify-center items-center gap-16 '>
            {navLinks.map((item) => (
                <li key={item.label} className='hover:text-black group'>
                    <a href={item.href} className='group-hover:text-black font-montserrat leading-normal text-lg text-slate-gray'>
                        {item.label}
                    </a>
                </li>
            )) }
            </ul>

            <div className=' max-lg:block lg:hidden cursor-pointer ' onClick={() => setDropdown(true)}>
                <img src={hamburger} alt="hamburger" width={25} height={25} className='' />
            </div>


            { <div className={`bg-white absolute z-20  top-0 left-0 h-screen w-screen ${ dropdown ? "max-lg:block" : "max-lg:hidden"} lg:hidden`}>
                <div className='flex justify-between px-16 py-6'>
                    <a href="/">
                        <img src={headerLogo} alt="Nike Logo" width={130} height={29}/>
                    </a>
                    <div className=' cursor-pointer ' onClick={() => setDropdown(false)}>
                        <img src={close} alt="hamburger" width={25} height={25} className='' />
                    </div>
                </div>
                <hr className='bg-black  border-black'/>
                <ul className=' flex-col flex-1 justify-center items-center gap-16'>
                    {navLinks.map((item) => (
                        <li key={item.label} className='p-8 text-center  font-palanquin text-[12px] font-semibold hover:bg-slate-50 hover:cursor-pointer border-b-2 group'>
                            <a href={item.href} className='font-montserrat leading-normal text-2xl text-slate-gray group-hover:text-black'>
                                {item.label}
                             </a>
                        </li>
                    )) }
                </ul>
            </div>}
        </nav>
    </header>
  )
}

export default Navbar
