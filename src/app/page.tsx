import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo360 - Innovating Digital Solutions",
  description: " From developing dynamic websites and intuitive mobile apps to creating secure e-commerce platforms and providing comprehensive tech training, we ensure that our clients stay ahead in the competitive digital landscape.",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
