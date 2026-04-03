import React from 'react';
import Dollar from '../assets/dollar.png'
import LogoNavbar from '../assets/logo.png'
import BgShadow from '../assets/bg-shadow.png'
import BannerImage from '../assets/banner-main.png'

const Navbar = ({dollar}) => {
    return (
        <header className=''>
            
            <nav className='flex justify-between items-center my-7 sticky top-0 z-50 bg-white'>

                <div className=" ">
                    <a className=""><img className='w-22' src={LogoNavbar} alt="Brand Logo" /></a>
                </div>

                <div className=''>
                    
                    <ul className=' hidden md:flex gap-5 sm:gap-10 font-medium text-xl'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    
                </div>

                <div className="">

                    <button className="flex justify-between items-center gap-1 border border-[#c3c2c2] rounded-2xl p-2 bg-[#f0efef] font-bold text-2xl">
                        $ {dollar}
                        <img src={Dollar} alt="Dollar icon" />
                    </button>

                </div>

                
                
            </nav>

            <div 
                className=' bg-black rounded-3xl mt-6 mb-22 py-16'
                style={{backgroundImage: `url(${BgShadow})`}}>

                {/* <span className=''> <img className='rounded-3xl' src={BgShadow} alt="" /></span> */}
                <div className='flex flex-col items-center gap-6'>

                    <img src={BannerImage} alt="BannerImage" />

                    <h3 className='font-semibold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                    
                    <p className='font-medium text-2xl text-[#c9c6c6]'>Beyond Boundaries Beyond Limits</p>

                    <button className='font-bold py-3 px-5 rounded-2xl bg-[#E7FE29]'>Claim Free Credit</button>

                </div>

            </div>

        </header>
        
    );
};

export default Navbar;