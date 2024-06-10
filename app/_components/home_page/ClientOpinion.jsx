import React from 'react'
import ClientOpinionCard from './ClientOpinionCard'
import { cardInfo } from '../../utils/utils.js'

function ClientOpinion() {
    return (
        <section>
            <div className='bg-[url("/whychoose-mobile.png")] lg:bg-[url("/services-desktop.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] max-w-[300px] lg:max-w-full font-semibold text-white text-center font-barlow'>What our Clients say About us</h1>
                        <p className='text-gray90 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[360px] lg:max-w-[950px] 
                        tracking-[0.5px]'>At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our
                            clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center lg:grid lg:grid-cols-2 items-center'>
                {cardInfo.map((item, index) => (
                    <ClientOpinionCard key={index} title={item.title} description={item.description}
                        icon={item.icon} name={item.name} role={item.role} />
                ))}
            </div>
        </section>

    )
}

export default ClientOpinion