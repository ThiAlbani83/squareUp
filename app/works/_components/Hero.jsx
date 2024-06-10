import React from 'react'

function Hero() {
    return (
        <div>
            <div className='bg-[url("/services.png")] lg:bg-[url("/services-desktop.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full h-full bg-black/70'>
                    <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
                        <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] font-semibold text-white text-center font-barlow'>Our Works</h1>
                        <p className='text-gray90 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[380px] lg:max-w-[800px] 
                        tracking-[0.5px]'>Discover a portfolio of visually stunning and strategically crafted digital projects
                            that showcase our creativity and expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero