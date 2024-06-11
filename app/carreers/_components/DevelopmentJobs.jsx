import React from 'react'
import OpeningsCards from './OpeningsCards'

function DevelopmentJobs() {
    return (
        <section>
            <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
                <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Development Job Openings"}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <OpeningsCards icon={'/front-end-icon.png'} title={"Front - End Developer"} description={"Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences."} />
                <OpeningsCards icon={'/back-end-icon.png'} title={"Back - End  Developer"} description={"Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface."} />
                <OpeningsCards icon={'/full-stack-icon.png'} title={"Full Stack Developer"} description={"Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions."} />
            </div>
        </section>
    )
}

export default DevelopmentJobs