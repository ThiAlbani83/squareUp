import React from 'react'
import ServicesCard from './ServicesCard'

function ProjectManagement() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Project Planning and Scoping"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/planing-1.png'} title={"Requirements Gathering and Analysis"} />
        <ServicesCard image={'/planing-2.png'} title={"Project Roadmap and Timeline Development"} />
        <ServicesCard image={'/planing-3.png'} title={"Resource Allocation and Task Assignment"} />
        <ServicesCard image={'/planing-4.png'} title={"Risk Assessment and Mitigation Strategies"} />
      </div>
    </section>
  )
}

export default ProjectManagement