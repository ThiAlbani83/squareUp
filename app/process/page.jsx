import React from 'react'
import Container from '../_components/Container'
import HeroSection from '../_components/HeroSection'
import Topics from '../_components/Topics'
import ProcessCard from './_components/ProcessCard'
import Contact from './_components/Contact'

function Process() {
    return (
        <Container>
            <HeroSection title={"Process of Starting the Project"}
                description={"At SquareUp, we value transparency, collaboration, and delivering exceptional results."} />
            <Topics title={"At SquareUp"}
                description={"We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."} tag={"Here's an overview of our typical process:"} />
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <ProcessCard number={"01"} title={"Discovery"} description={"We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."} />
                <ProcessCard number={"02"} title={"Planning and Strategy"} description={"Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."} />
                <ProcessCard number={"03"} title={"Design"} description={"Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."} />
                <ProcessCard number={"04"} title={"Development"} description={"Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."} />
                <ProcessCard number={"05"} title={"Testing and Quality Assurance"} description={"We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability."} />
                <ProcessCard number={"06"} title={"Deployment and Launch"} description={"When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."} />
                < ProcessCard number={"07"} title={"Post-Launch Support"} description={"Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."} />
                <ProcessCard number={"08"} title={"Continuous Improvement"} description={"We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."} />
            </div>
            <Contact />
        </Container>
    )
}

export default Process