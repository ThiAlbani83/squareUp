import React from 'react'
import ServicesCard from './ServicesCard'

function CustomSoftware() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Custom Software Development"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/custom-1.png'} title={"Enterprise Software Development"} />
        <ServicesCard image={'/custom-2.png'} title={"Custom Web Application Development"} />
        <ServicesCard image={'/custom-3.png'} title={"Integration with Third-Party APIs and Systems"} />
        <ServicesCard image={'/custom-4.png'} title={"Legacy System Modernization and Migration"} />
      </div>
    </section>
  )
}

export default CustomSoftware