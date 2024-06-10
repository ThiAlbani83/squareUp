import Image from 'next/image'
import React from 'react'
import ServicesCard from './ServicesCard'

function UxDesign() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"User Experience (UX) Design"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/ux-1.png'} title={"User Research and Persona Development"} />
        <ServicesCard image={'/ux-2.png'} title={"Information Architecture and Wireframing"} />
        <ServicesCard image={'/ux-3.png'} title={"Interactive Prototyping and User Testing"} />
        <ServicesCard image={'/ux-4.png'} title={"UI Design and Visual Branding"} />
      </div>
    </section>
  )
}

export default UxDesign