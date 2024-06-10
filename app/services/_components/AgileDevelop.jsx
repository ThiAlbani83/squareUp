import React from 'react'
import ServicesCard from './ServicesCard'

function AgileDevelop() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Agile Development"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/agile-1.png'} title={"Requirements Gathering and Analysis"} />
        <ServicesCard image={'/agile-2.png'} title={"Project Roadmap and Timeline Development"} />
        <ServicesCard image={'/agile-3.png'} title={"Resource Allocation and Task Assignment"} />
        <ServicesCard image={'/agile-4.png'} title={"Risk Assessment and Mitigation Strategies"} />
      </div>
    </section>
  )
}

export default AgileDevelop