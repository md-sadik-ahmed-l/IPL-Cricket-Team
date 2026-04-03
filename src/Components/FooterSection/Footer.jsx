import React from 'react';
import LogoFooter from '../../assets/logo-footer.png'
import BgShadow from '../../assets/bg-shadow.png'

const Footer = () => {

    return (

        <footer className='bg-[#06091A] mt-60 relative'>

            <div className='max-w-330 m-auto'>
                <div className='border rounded-2xl m-2 border-white  absolute left-1/2 -translate-x-1/2 -top-50 w-full max-w-5xl'>
                    <div 
                        className='bg-white rounded-2xl py-11 sm:py-22 m-3 sm:m-6 p-2 flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-pink-200 via-yellow-100 to-orange-200' 
                        
                        >
                        <h1 className='font-bold text-2xl sm:text-4xl'>Subscribe to our Newsletter</h1>

                        <p className='font-medium text-[16px] sm:text-2xl'>Get the latest updates and news right in your inbox!</p>

                        <div className=''>

                            <input 
                                className='border py-2 px-5 rounded-xl mr-4 mb-4'
                                type="email" name='email' placeholder='Enter your email' 
                            />

                            <button className='font-bold  py-2 px-5 rounded-xl  bg-gradient-to-r from-pink-500 to-yellow-400 text-black'>Subscribe</button>

                        </div>
                    </div>
                </div>

                <div className='text-white  mt-9 pt-55'>

                    <div className='flex flex-col items-center'>
                        <img src={LogoFooter} alt="" />
                    </div>

                    <div className='flex flex-wrap justify-between my-17 sm:gap-8'>

                        <div className=' max-w-50 '>
                            <h4 className='font-semibold text-xl mb-4'>About Us</h4>
                            <p>We are a passionate team dedicated to providing the best services to our customers.</p>

                        </div>

                        <div className='flex flex-col items-center'>

                            <h4 className='font-semibold text-xl mb-4'>Quick Links</h4>

                            <div>
                                <li>Home</li>
                                <li>Fixture</li>
                                <li>Teams</li>
                                <li>Schedules</li>
                            </div>

                        </div>

                        <div className='max-w-70 '>

                            <h4 className='font-semibold text-xl mb-4'>Subscribe</h4>
                            <p className='pb-5'>Subscribe to our newsletter for the latest updates.</p>

                            <div className='flex '>
                                <input 
                                    className='border py-2 px-5 rounded-tl-2xl rounded-bl-2xl '
                                    type="email" name='email' placeholder='Enter your email' 
                                />
                                <button className='border py-3 px-5 rounded-tr-2xl rounded-br-2xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 text-black'>Subscribe</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className='text-white flex flex-col items-center border border-black border-t-white'>

                <p className='my-8 '>@2024 Your Company All Rights Reserved.</p>

            </div>

        </footer>

    );

};

export default Footer;