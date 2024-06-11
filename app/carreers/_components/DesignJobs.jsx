import React from 'react'
import OpeningsCards from './OpeningsCards'

function DesignJobs() {
    return (
        <section>
            <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
                <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Design Jobs Openings"}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <OpeningsCards icon={'/ui-icon.png'} title={"UI Designer"} description={"Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."} />
                <OpeningsCards icon={'/ux-icon.png'} title={"UX Designer"} description={"Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys."} />
                <OpeningsCards icon={'/design-head-icon.png'} title={"Design Head"} description={"Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs."} />
            </div>
        </section>
    )
}

export default DesignJobs