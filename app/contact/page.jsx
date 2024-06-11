import React from 'react'
import Container from '../_components/Container'
import HeroSection from '../_components/HeroSection'
import Contact from '../_components/Contact'
import FAQ from '../_components/home_page/FAQ'
import CTA from '../_components/CTA'

function page() {
    return (
        <Container>
            <HeroSection title={"Contact Us"} description={"Get in touch with us today and let us help you with any questions or inquiries you may have."} />
            <Contact isImage={false}/>
            <FAQ />
            <CTA />
        </Container>
    )
}

export default page