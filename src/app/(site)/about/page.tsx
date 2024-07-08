import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Logo360 - Innovating Digital Solutions",
  description: "About Logo360",
};

const AboutPage = () => {
  return (
    <main>
      <ScrollUp />
      <Breadcrumb pageName="About Us Page" />
      <About />
      {/* <Team /> */}
    </main>
  );
};

export default AboutPage;
