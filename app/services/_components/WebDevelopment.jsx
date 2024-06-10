import React from 'react'
import ServicesCard from './ServicesCard'

function WebDevelopment() {
  return (
    <section>
      <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
        <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Web Development"}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <ServicesCard image={'/web-1.png'} title={"Front-End Development (HTML, CSS, JavaScript)"} />
        <ServicesCard image={'/web-2.png'} title={"Back-End Development (PHP, Python, Ruby)"} />
        <ServicesCard image={'/web-3.png'} title={"Content Management System (CMS) Development (WordPress, Drupal)"} />
        <ServicesCard image={'/web-4.png'} title={"E-Commerce Platform Development (Magento, Shopify)"} />
      </div>
    </section>
  )
}

export default WebDevelopment