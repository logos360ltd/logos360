import Breadcrumb from "@/components/Common/Breadcrumb"
import ScrollUp from "@/components/Common/ScrollUp"
import Terms from "@/components/Terms/Terms";
import { Metadata } from "next";

type Props = {}

export const metadata: Metadata = {
  title:
    "Terms and Conditions | Logso360 - Innovating Digital Solutions",
  description: "Logos360 Terms and Conditions",
};

const page = (props: Props) => {
  return (
    <div>
       <ScrollUp />

      <Breadcrumb pageName="Terms and Conditions" />
      <Terms />

    </div>
  )
}

export default page