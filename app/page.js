import Image from "next/image";
import Hero from "./_components/home_page/Hero";
import SocialProof from "./_components/home_page/SocialProof";
import Services from "./_components/home_page/Services";
import Reasons from "./_components/home_page/Reasons";
import ClientOpinion from "./_components/home_page/ClientOpinion";
import Contact from "./_components/Contact";
import Container from "./_components/Container";
import FAQ from "./_components/home_page/FAQ";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SocialProof />
      <Services />
      <Reasons />
      <ClientOpinion />
      <FAQ />
      <Contact />
    </Container>
  );
}
