import React from 'react'
import ServicesCard from './ServicesCard'
import Image from 'next/image'
import Button from '../Button'
import ReasonsCard from './ReasonsCard'

function Reasons() {
    return (
        <section>
            <div className='bg-[url("/whychoose-mobile.png")] lg:bg-[url("/services-desktop.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] font-semibold text-white text-center font-barlow'>Why Choose SquareUp?</h1>
                        <p className='text-gray90 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[360px] lg:max-w-[950px] 
                        tracking-[0.5px]'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-2 items-center'>
                <ReasonsCard icon={<Image src={'/expertise-icon.png'} width={58} height={58} alt='design-icon' />}
                    title={'Expertise'}
                    description="Our team consists of highly skilled professionals who have a deep understanding of the 
                    digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." />

                <ReasonsCard icon={<Image src={'/client-icon.png'} width={58} height={58} alt='engineering-icon' />}
                    title={'Client-Centric Approach'}
                    description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, 
                    and goals, and tailor our services to meet your specific requirements. Your success is our success." />

                <ReasonsCard icon={<Image src={'/results-icon.png'} width={58} height={58} alt='project-icon' />}
                    title={'Results-Driven Solutions'}
                    description="Our primary focus is on delivering results. We combine creativity and technical 
                    expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."/>

                <ReasonsCard icon={<Image src={'/partner-icon.png'} width={58} height={58} alt='project-icon' />}
                    title={'Collaborative Partnership'}
                    description="We value long-term relationships with our clients. We see ourselves as your digital 
                    partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."/>
            </div>
        </section>

    )
}

export default Reasons