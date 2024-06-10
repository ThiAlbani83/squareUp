import React from 'react'
import ServicesCard from './ServicesCard'
import Image from 'next/image'
import Button from '../Button'

function Services() {
    return (
        <div className='mt-10 lg:mt-16'>
            <div className='bg-[url("/services.png")] lg:bg-[url("/services-desktop.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] font-semibold text-white text-center font-barlow'>Our Services</h1>
                        <p className='text-gray90 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[380px] lg:max-w-[800px] 
                        tracking-[0.5px]'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>
                <ServicesCard icon={<Image src={'/design-icon.png'} width={58} height={58} alt='design-icon' />}
                    title={'Design'}
                    description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your
            audience and elevate your brand. We believe that great design is not just about aesthetics, it's about creating
            seamless and intuitive user experiences."
                    button={<Button title={'Learn More'} />} />

                <ServicesCard icon={<Image src={'/engineering-icon.png'} width={58} height={58} alt='engineering-icon' />}
                    title={'Engineering'}
                    description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital 
                solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
                    button={<Button title={'Learn More'} />} />

                <ServicesCard icon={<Image src={'/project-icon.png'} width={58} height={58} alt='project-icon' />}
                    title={'Project Management'}
                    description="Our experienced project management team ensures that your projects are delivered on time, 
                within budget, and according to your specifications. We follow industry-standard methodologies and employ 
                effective communication and collaboration tools to keep you informed throughout the development process."
                    button={<Button title={'Learn More'} />} />
            </div>
        </div>
    )
}

export default Services