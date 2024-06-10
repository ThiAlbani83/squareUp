import Image from 'next/image'
import React from 'react'
import Container from '../Container'

function Hero() {
  return (
    <section>
      <div className='bg-[url("/hero-mobile.png")] lg:bg-[url("/hero-tablet.png")] xl:bg-[url("/hero-desktop.png")] 
      w-full h-[565px] lg:h-[690px] xl:h-[780px] bg-center bg-cover bg-no-repeat flex flex-col items-center gap-[30px]'>
        <h1 className='px-4 pt-20 text-[30px] lg:text-[48px] xl:text-[68px] max-w-[358px] lg:max-w-[540px] xl:max-w-[750px] text-white text-center font-semibold] font-barlow'>
          A Digital Product Studio
          that will Work
        </h1>
        <p className='text-gray60 lg:text-white text-center px-5 py-4 bg-gray15 lg:bg-gray15/20 lg:backdrop-blur-md max-w-[340px] 
        lg:max-w-[700px] text-base xl:text-[18px] font-barlow rounded-lg'>
          For <span className='tag'>startups</span>, <span className='tag'>enterprise</span>, <span className='tag'>leaders</span>, <span className='tag'>media & publishers</span>, and <span className='tag'>social good</span>.
        </p>
        <div className='flex items-center text-sm xl:text-[18px] gap-3'>
          <button className='px-5 py-[14px] border border-gray20 text-white backdrop-blur-lg rounded-lg'>Our Works</button>
          <button className='px-5 py-[14px] bg-green50 rounded-lg'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero


{/* <Image src={'/hero-mobile.png'} width={390} height={565} className='w-full md:hidden' />
      <Image src={'/hero-tablet.png'} width={1280} height={1090} className='w-full h-full hidden md:block' /> */}