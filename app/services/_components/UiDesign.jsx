import React from 'react'
import ServicesCard from './ServicesCard'

function UiDesign() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"User Interface (UI) Design"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/ui-1.png'} title={"Intuitive and Visually Appealing Interface Design"} />
        <ServicesCard image={'/ui-2.png'} title={"Custom Iconography and Illustration"} />
        <ServicesCard image={'/ui-3.png'} title={"Typography and Color Palette Selection"} />
        <ServicesCard image={'/ui-4.png'} title={"Responsive Design for Various Devices"} />
      </div>
    </section>
  )
}

export default UiDesign