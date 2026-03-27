import React from 'react';
import LogoFooter from '../../assets/logo-footer.png'
import BgShadow from '../../assets/bg-shadow.png'

const Footer = () => {

    return (

        <footer className='bg-[#06091A] mt-80'>

            <div className='max-w-330 m-auto'>
                <div className='border g'>
                    <div 
                        className='bg-white py-22 flex flex-col items-center' 
                        style={{backgroundImage: `url(${BgShadow})`}}
                        >
                        <h1 className='font-bold text-4xl'>Subscribe to our Newsletter</h1>

                        <p className='font-medium text-2xl'>Get the latest updates and news right in your inbox!</p>

                        <div className=''>

                            <input 
                                className='border py-2 px-5 rounded-xl mr-4'
                                type="email" name='email' placeholder='Enter your email' 
                            />

                            <button className='font-bold border py-2 px-5 rounded-xl '>Subscribe</button>

                        </div>
                    </div>
                </div>

                <div className='text-white flex flex-col items-center'>
                    <div>
                        <img src={LogoFooter} alt="" />
                    </div>
                    <div className='flex '>

                        <div>
                            <h4>About Us</h4>
                            <p>We are a passionate team dedicated to providing the best services to our customers.</p>

                        </div>

                        <div>

                            <h4>Quick Links</h4>

                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>

                        </div>

                        <div>

                            <h4>Subscribe</h4>
                            <p>Subscribe to our newsletter for the latest updates.</p>

                            <div>
                                <input type="email" name='email' placeholder='Enter your email' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-white flex flex-col items-center'>
                <p>@2024 Your Company All Rights Reserved.</p>
            </div>

        </footer>

    );

};

export default Footer;