import React from 'react'
import Accordion from './Accordion'
import { accordionItems } from '@/app/utils/utils'

function FAQ() {
    return (
        <section>
            <div className='bg-[url("/faq.png")] lg:bg-[url("/faq-desktop.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] max-w-[300px] lg:max-w-full font-semibold
                         text-white text-center font-barlow'>Frequently Asked Questions</h1>
                        <p className='text-gray90 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[360px] lg:max-w-[950px] 
                        tracking-[0.5px]'>Still you have any questions? Contact our Team via hello@squareup.com</p>
                    </div>
                </div>
            </div>
            <Accordion items={accordionItems} />
        </section>
    )
}

export default FAQ