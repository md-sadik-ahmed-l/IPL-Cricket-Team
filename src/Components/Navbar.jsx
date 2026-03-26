import React from 'react';
import Dollar from '../assets/dollar.png'
import LogoNavbar from '../assets/logo.png'
import BgShadow from '../assets/bg-shadow.png'

const Navbar = ({dollar}) => {
    return (
        <header>
            
            <nav className=''>

                <div className="flex justify-between items-center">

                    <div className="flex-1">
                        <a className=""><img src={LogoNavbar} alt="Brand Logo" /></a>
                    </div>

                    <div className="flex-none">

                        <button className="flex justify-between items-center gap-1 font-bold text-xl">
                            $ {dollar} Dollar
                            <img src={Dollar} alt="Dollar icon" />
                        </button>

                    </div>

                </div>
                
            </nav>

            <div className='bg-black rounded-3xl mt-6 mb-18'>

                <span className=''> <img className='rounded-3xl' src={BgShadow} alt="" /></span>
            </div>

        </header>
        
    );
};

export default Navbar;