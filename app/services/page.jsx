import React from 'react'
import Hero from './_components/Hero'
import UxDesign from './_components/UxDesign'
import UiDesign from './_components/UiDesign'
import Branding from './_components/Branding'
import WebDevelopment from './_components/WebDevelopment'
import MobileApp from './_components/MobileApp'
import CustomSoftware from './_components/CustomSoftware'
import ProjectManagement from './_components/ProjectManagement'
import AgileDevelop from './_components/AgileDevelop'
import QAandTesting from './_components/QAandTesting'
import Contact from './_components/Contact'
import Topics from '../_components/Topics'
import Container from '../_components/Container'

function Services() {
  return (
    <Container>
      <Hero />
      <Topics title={"Design"} description="At Squareup, our design 
        team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. 
        We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
        tag={"Our design services include:"}/>
      <UxDesign />
      <UiDesign />
      <Branding />
      <Topics title={"Engineering"} description="Our engineering team combines technical expertise with a passion for 
      innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices 
      to deliver high-performance applications tailored to your specific needs."
      tag={"Our engineering services include:"}/>
      <WebDevelopment />
      <MobileApp />
      <CustomSoftware />
      <Topics title={"Project Management"} description="Our experienced project management team ensures that your projects 
      are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies 
      and employ effective communication and collaboration tools to keep you informed throughout the development process."
      tag={"Our project management services include:"}/>
      <ProjectManagement />
      <AgileDevelop />
      <QAandTesting />
      <Contact />
    </Container>
  )
}

export default Services