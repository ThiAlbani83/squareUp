import React from 'react'
import Container from '../_components/Container'
import HeroSection from '../_components/HeroSection'
import Topics from '../_components/Topics'
import CarreersCards from './_components/CarreersCards'
import Section from './_components/Section'
import DesignJobs from './_components/DesignJobs'
import DevelopmentJobs from './_components/DevelopmentJobs'
import ManagementJobs from './_components/ManagementJobs'
import QAJobs from './_components/QAJobs'
import CTA from '../_components/CTA'

function page() {
    return (
        <Container>
            <HeroSection title={"Join Our Team at SquareUp"} description={"Unlock your potential and join our team of innovators and problem solvers."} />
            <Topics title={"Welcome to SquareUp, where talent meets opportunity!"} description={"At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."} tag={"Why Work at SquareUp?"} />
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <CarreersCards title={"Innovative and Impactful Projects"} description={"At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."} />
                <CarreersCards title={"Supportive Environment"} description={"At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."} />
                <CarreersCards title={"Continuous Learning and Growth"} description={"We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies."} />
                <CarreersCards title={"Challenging and Rewarding Work"} description={"Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life."} />
            </div>
            <Section title={"Current Openings"} description={"We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions."}/>
            <DesignJobs />
            <DevelopmentJobs />
            <ManagementJobs />
            <QAJobs />
            <CTA />
        </Container>
    )
}

export default page