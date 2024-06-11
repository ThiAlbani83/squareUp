import React from 'react'
import OpeningsCards from './OpeningsCards'

function ManagementJobs() {
    return (
        <section>
            <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
                <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Development Job Openings"}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <OpeningsCards icon={'/ba-manager-icon.png'} title={"BA Manager"} description={"Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts."} />
                <OpeningsCards icon={'/project-manager-icon.png'} title={"Project Manager"} description={"Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success."} />
                <OpeningsCards icon={'/hr-manager-icon.png'} title={"HR Manager"} description={"Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture."} />
            </div>
        </section>
    )
}

export default ManagementJobs