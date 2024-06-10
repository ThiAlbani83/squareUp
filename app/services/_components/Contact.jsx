import Button from '@/app/_components/Button'
import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col items-center'>
      <div className='bg-[url("/contact-mobile.png")] lg:bg-[url("/contact-desktop.png")] bg-no-repeat bg-center bg-cover w-full'>
        <div className='w-full h-full bg-black/70'>
          <div className='py-[50px] lg:py-[80px] flex flex-col items-center gap-3'>
            <Image src={'/logo.jpg'} width={53} height={53} alt='logo' />
            <h1 className='text-[28px] lg:text-[38px] max-w-[300px] lg:max-w-full font-semibold
                         text-white text-center font-barlow'>Let us Bring your Ideas to Life in the Digital World.</h1>
            <p className='text-gray90 px-1 text-[14px] lg:text-[16px] xl:text-[18px] text-center font-barlow max-w-[360px] lg:max-w-[950px] 
                        tracking-[0.5px]'>No matter which services you choose, we are committed to delivering exceptional
              results that exceed your expectations. Our multidisciplinary team works closely together to ensure
              seamless collaboration and a unified vision for your digital product.</p>
            <div className='mt-10'>
              <Button title={'Start Project'} primary={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact