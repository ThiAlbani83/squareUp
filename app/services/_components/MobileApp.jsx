import React from 'react'
import ServicesCard from './ServicesCard'

function MobileApp() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Mobile App Development"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/mobile-1.png'} title={"Native iOS and Android App Development"} />
        <ServicesCard image={'/mobile-2.png'} title={"Cross-Platform App Development (React Native, Flutter)"} />
        <ServicesCard image={'/mobile-3.png'} title={"App Prototyping and UI/UX Design Integration"} />
        <ServicesCard image={'/mobile-4.png'} title={"App Testing, Deployment, and Maintenance"} />
      </div>
    </section>
  )
}

export default MobileApp