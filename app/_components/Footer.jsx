import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className='px-[16px] py-[30px] lg:px-20 xl:px-40 flex flex-col items-center justify-between border border-gray15'>
            <div className='flex flex-col md:flex-row items-center gap-6 justify-between w-full border-b border-b-gray15 py-10'>
                <div className='flex items-center gap-3 border-b border-b-gray15 w-full md:w-fit pb-10 md:pb-0 md:border-none justify-center'>
                    <Image src={'/logo.jpg'} width={60} height={60} alt='logo'  className='h-auto'/>
                    <span className='text-white text-base lg:text-base xl:text-lg font-medium'>SquareUp</span>
                </div>
                <ul className='text-center font-barlow flex items-center justify-center flex-wrap lg:flex-nowrap gap-6 font-medium text-base lg:text-lg xl:text-lg text-gray90'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Process</li>
                    <li>About</li>
                    <li>Careers</li>
                </ul>
                <div className='flex flex-col md:flex-row gap-5 items-center justify-center border border-gray15 rounded-md px-5 py-[10px] w-full md:w-fit'>
                    <span className='text-base text-white'>Stay Connected</span>
                    <div className='flex items-center gap-[10px]'>
                        <Image src={'/facebook-icon.png'} width={50} height={50} alt='social-media-icon' />
                        <Image src={'/x-icon.png'} width={50} height={50} alt='social-media-icon' />
                        <Image src={'/linkedin-icon.png'} width={50} height={50} alt='social-media-icon' />
                    </div>
                </div>
            </div>
            <div className='w-full items-center justify-between md:items-end flex flex-col md:flex-row md:gap-10 lg:mt-10'>
                <div className='flex flex-col lg:flex-row lg:gap-10'>
                    <div className='flex items-center gap-2 border-b border-b-gray15 pb-2 w-full justify-center md:w-fit mt-6'>
                        <Image src="/email-icon.png" width={24} height={24} alt='contact-icon' />
                        <span className='text-[18px] leading-[40px] text-white font-barlow'>hello@squareup.com</span>
                    </div>
                    <div className='flex items-center gap-2 border-b border-b-gray15 pb-2 w-full justify-center md:w-fit mt-6'>
                        <Image src="/phone-icon.png" width={24} height={24} alt='contact-icon' />
                        <span className='text-[18px] leading-[40px] text-white font-barlow'>+91 91813 23 2309</span>
                    </div>
                    <div className='flex items-center gap-2 border-b border-b-gray15 pb-2 w-full justify-center md:w-fit mt-6'>
                        <Image src="/map-icon.png" width={24} height={24} alt='contact-icon' />
                        <span className='text-[18px] leading-[40px] text-white font-barlow'>Somewhere in the World</span>
                    </div>
                </div>
                <span className='text-sm text-gray60 mt-10 lg:mt-4'>© 2023 SquareUp. All rights reserved.</span>
            </div>

        </footer>
    )
}

export default Footer