import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Contact Us | Logo360 - Innovating Digital Solutions",
  description: "Contact Logo360",
};

const ContactPage = () => {
  return (
    <>
      <ScrollUp />

      <Breadcrumb pageName="Contact" />

      <Contact />
    </>
  );
};

export default ContactPage;
