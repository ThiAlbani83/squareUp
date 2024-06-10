import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import StyledCheckbox from '../StyledCheckbox'
import RangeSlider from '../RangeSlider'

function Contact() {
    return (
        <section className='flex flex-col border border-gray15 items-center'>
            <div className='bg-[url("/contact-mobile.png")] lg:bg-[url("/contact-desktop.png")] bg-no-repeat bg-center bg-cover w-full'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <Image src={'/logo.jpg'} width={53} height={53} alt='logo' />
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] max-w-[300px] lg:max-w-full font-semibold
                         text-white text-center font-barlow'>Thank you for your Interest in SquareUp.</h1>
                        <p className='text-gray90 px-1 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[360px] lg:max-w-[950px] 
                        tracking-[0.5px]'>We would love to hear from you and discuss how we can help bring your digital ideas to life.
                            Here are the different ways you can get in touch with us.</p>
                        <div className='mt-10'>
                            <Button title={'Start Project'} primary={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 items-center sm:border-x sm:border-b  sm:border-gray15 py-7 w-fit justify-center  px-6 md:px-10'>
                <div className='flex flex-col sm:flex-row gap-7 w-full'>
                    <div className='w-full flex flex-col px-6 py-[18px] gap-3 bg-[#242424]/50 border border-gray15 rounded-md'>
                        <label className='text-white font-barlow font-medium text-base'>Full Name</label>
                        <div>
                            <input className='border-b border-b-gray15 outline-none bg-transparent pb-1 text-white placeholder:text-gray40'
                                type="text" name="name" id="name" placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex w-full flex-col px-6 py-[18px] gap-3 bg-[#242424]/50 border border-gray15 rounded-md'>
                        <label className='text-white font-barlow font-medium text-base'>Email</label>
                        <div>
                            <input className='border-b border-b-gray15 outline-none decoration-slate-400 bg-transparent pb-1 text-white placeholder:text-gray40'
                                type="email" name="email" id="email" placeholder='Type here' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full items-start justify-center px-6 md:px-16 md:gap-10 py-[30px] gap-[30px] bg-[#242424]/50 border border-gray15 rounded-md'>
                    <label className='text-white font-barlow font-medium text-base md:text-[18px] lg:text-[22px]'>Why are you contacting us?</label>
                    <div className='grid sm:grid-cols-2 gap-4 md:gap-x-20 md:gap-y-4'>
                        <StyledCheckbox label={"Web Design"} />
                        <StyledCheckbox label={"Collaboration"} />
                        <StyledCheckbox label={"Mobile App Design"} />
                        <StyledCheckbox label={"Others"} />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center px-6 md:px-16 md:gap-10 py-[30px] gap-[14px] bg-[#242424]/50 border border-gray15 rounded-md w-full">
                    <label className='text-white font-barlow font-medium text-base md:text-[18px] lg:text-[22px]'>Your Budget</label>
                    <span className='text-gray60 text-[14px] font-barlow md:text-base'>Slide to indicate your budget range</span>
                    <div className="w-full max-w-lg my-4 md:mt-0">
                        <RangeSlider min={500} max={50000} step={10} />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center px-6 md:px-16 md:gap-10 py-[30px] gap-[14px] bg-[#242424]/50 border border-gray15 rounded-md w-full">
                    <label className='text-white font-barlow font-medium text-base md:text-[18px] lg:text-[22px]'>Your Message</label>
                    <textarea placeholder='Type here' className='w-full h-[150px] resize-none bg-gray15 text-white border-gray60 outline-none
                    placeholder:text-gray60 rounded-md p-2'/>
                </div>
                <Button title="Submit" primary={true}/>
            </div>


        </section>
    )
}

export default Contact