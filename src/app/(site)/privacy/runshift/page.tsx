import Breadcrumb from "@/components/Common/Breadcrumb"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb pageName="Run Shift Privacy Policy" />
       <div className="overflow-y-auto pb-5">
      <div className="px-6">
        <p className=" text-base pb-4 font-poppins text-[18px]">
          This Privacy Policy describes how Logos360 (we, us, or our) collects, uses, and discloses your information through our run shift app (the App).
        </p>
        <p className=" text-base font-poppins text-[18px]">
          Please read these carefully before using our Run Shift app.
        </p>
      </div>

      {/* Terms */}
      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">1. Information We Collect</p>
        <p className=" text-base pl-2 pb-1 font-poppins text-[18px]">
          User Information: We collect user information such as your name, email address, and phone number (optional) when you register for an account.
        </p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          Usage Data: We collect usage data such as how you use the App, including the features you access, the frequency of your use, and the device you use to access the App.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">2. How We Use Your Information</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          We collect and use your information to operate the run shift, manage your account, send you updates, improve our services, and comply with legal obligations.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">3. Sharing Your Information</p>
        <p className=" text-base pl-2 pb-1 font-poppins text-[18px]">
          We may share your information with third-party service providers who help us operate the App, such as data storage providers and analytics providers. We will only share your information with these providers to the extent necessary to perform their services.
        </p>
        <p className=" text-base pl-2 pb-1 font-poppins text-[18px]">
          We will not share your information with any third-party for marketing purposes without your consent.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">4. Data Security</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is ever completely secure. We cannot guarantee the security of your information.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">5. Your Choices</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          You can access and update your information in the App settings.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">6. Childrens Privacy</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          Our App is not directed to children under the age of 13. We do not knowingly collect information from children under 13. If you are a parent or guardian and you believe your child has provided us with information, please contact us. We will take steps to remove the information from our servers.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">7. Changes to This Privacy Policy</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base pb-2 font-poppins text-[20px]">8. Contact Us</p>
        <p className=" text-base pl-2 font-poppins text-[18px]">
          If you have any questions about these Terms, please contact us at info@logos360.com.
        </p>
      </div>

      <div className="pt-4 px-6">
        <p className=" text-base font-poppins text-[18px]">
          This Privacy Policy is effective as of June 18, 2024.
        </p>
      </div>
    </div>
      
    </div>
  )
}

export default page