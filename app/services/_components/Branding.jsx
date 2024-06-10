import React from 'react'
import ServicesCard from './ServicesCard'

function Branding() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Branding and Identity"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/branding-1.png'} title={"Logo Design and Visual Identity Development"} />
        <ServicesCard image={'/branding-2.png'} title={"Brand Strategy and Positioning"} />
        <ServicesCard image={'/branding-3.png'} title={"Brand Guidelines and Style Guides"} />
        <ServicesCard image={'/branding-4.png'} title={"Marketing Collateral Design (Brochures, Business Cards, etc.)"} />
      </div>
    </section>
  )
}

export default Branding