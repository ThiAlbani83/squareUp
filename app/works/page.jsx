import React from 'react'
import Hero from './_components/Hero'
import Topics from '../_components/Topics'
import NotableWorks from './_components/NotableWorks'
import Contact from '../services/_components/Contact'
import Container from '../_components/Container'

function Works() {
  return (
    <Container>
      <Hero />
      <Topics title={"At SquareUp"} description={"We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."} tag={"Here are ten examples of our notable works:"} />
      <NotableWorks />
      <Contact />
    </Container>
  )
}

export default Works