import Image from 'next/image'
import React from 'react'

function SocialProof() {
    return (
        <section>
            <div className='flex flex-col items-center justify-center px-4 '>
                <span className='text-sm px-6 py-4 bg-gray10 rounded-full border border-gray15 text-white -mt-6'>Trusted By 250+ Companies</span>
                <div className='flex flex-wrap flex-1 items-center gap-10 lg:gap-[74px] xl:gap-[80px] justify-center mt-6 w-full h-full'>
                    <Image src={'/zapier.png'} width={80} height={40} alt='zapier' className='h-auto'/>
                    <Image src={'/spotify.png'} width={116} height={40} alt='spotify' className='h-auto'/>
                    <Image src={'/zoom.png'} width={81} height={40} alt='zoom' className='h-auto'/>
                    <Image src={'/slack.png'} width={100} height={40} alt='slack' className='h-auto'/>
                    <Image src={'/amazon.png'} width={91} height={40} alt='amazon' className='h-auto'/>
                    <Image src={'/adobe.png'} width={110} height={40} alt='adobe' className='h-auto'/>
                </div>
            </div>
        </section>
    )
}

export default SocialProof