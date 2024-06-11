import React from 'react'
import OpeningsCards from './OpeningsCards'

function QAJobs() {
    return (
        <section>
            <div className='pt-[40px] flex flex-col gap-2 border border-gray15 pb-10 px-10'>
                <h2 className='text-gray60 font-barlow font-medium text-xl'>{"Development Job Openings"}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <OpeningsCards icon={'/qa-tester-icon.png'} title={"QA Tester"} description={"Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience."} />
                <OpeningsCards icon={'/sql-tester-icon.png'} title={"SQL Tester"} description={"Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data."} />
                <OpeningsCards icon={'/manual-tester-icon.png'} title={"Manual Tester"} description={"Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance."} />
            </div>
        </section>
    )
}

export default QAJobs