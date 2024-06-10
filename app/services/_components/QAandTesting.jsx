import React from 'react'
import ServicesCard from './ServicesCard'

function QAandTesting() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Quality Assurance and Testing"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/qa-1.png'} title={"Test Planning and Execution"} />
        <ServicesCard image={'/qa-2.png'} title={"Functional and Usability Testing"} />
        <ServicesCard image={'/qa-3.png'} title={"Performance and Security Testing"} />
        <ServicesCard image={'/qa-4.png'} title={"Bug Tracking and Issue Resolution"} />
      </div>
    </section>
  )
}

export default QAandTesting