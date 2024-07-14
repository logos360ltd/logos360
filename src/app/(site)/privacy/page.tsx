import Breadcrumb from "@/components/Common/Breadcrumb"
import ScrollUp from "@/components/Common/ScrollUp"
import PrivacyPolicy from "@/components/Privacy/Privacy";
import { Metadata } from "next";

type Props = {}

export const metadata: Metadata = {
  title:
    "Privacy Policy | Logos360 - Innovating Digital Solutions",
  description: "Logos360 Privacy Policy",
};

const page = (props: Props) => {
  return (
    <div>
       <ScrollUp />

      <Breadcrumb pageName="Privacy Policy" />
      <PrivacyPolicy />

    </div>
  )
}

export default page