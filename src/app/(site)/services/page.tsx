import Breadcrumb from "@/components/Common/Breadcrumb"
import ScrollUp from "@/components/Common/ScrollUp"
import Features from "@/components/Features";
import Services from "@/components/services"
import { Metadata } from "next";

type Props = {}

export const metadata: Metadata = {
  title:
    "Services | Logo360 - Innovating Digital Solutions",
  description: "Logo360 Services",
};

const page = (props: Props) => {
  return (
    <div>
       <ScrollUp />

      <Breadcrumb pageName="Services" />
      <Services />
      <Features />

    </div>
  )
}

export default page