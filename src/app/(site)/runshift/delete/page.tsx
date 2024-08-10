import Breadcrumb from "@/components/Common/Breadcrumb"
import ScrollUp from "@/components/Common/ScrollUp"
import { Metadata } from "next";

type Props = {}

export const metadata: Metadata = {
  title:
    " | Logos360 - Innovating Digital Solutions",
};

const page = (props: Props) => {
  return (
    <div>
       <ScrollUp />

      <Breadcrumb pageName="Delete Account" />
      <div className="max-w-5xl mx-auto px-5 lg:px-0 my-10">
        <p>Please email admin@logos360.co.uk with details of what you want deleted and we will get back to you within 24 hours</p>
      </div>

    </div>
  )
}

export default page