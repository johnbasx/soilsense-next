import ContactSection from '@/components/contact/ContactSection'
import Location from '@/components/contact/Location'
import LookingForCareer from '@/components/contact/LookingForCareer'
import Layout from '@/components/layout/Layout'
// import Layout from "@/components/layout/Layout";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
// import { useTranslation } from "next-i18next";

const ContactPage = () => {
  // const { t } = useTranslation("contact");
  return (
    // <Layout title={t("title")}>
    <Layout title="Contact - Soil Sense | Plantation with Tech">
      <ContactSection />
      <Location />
      <LookingForCareer />
      {/* <GetInTouch /> */}
    </Layout>
    // </Layout>
  )
}

export default ContactPage

// export const getStaticProps = async ({ locale }: any) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["contact", "common"])),
//   },
// });

// import ContactSection from "@/components/contact/ContactSection";
// import GetInTouch from "@/components/contact/GetInTouch";
// import LookingForCareer from "@/components/contact/LookingForCareer";
// import { Footer } from "@/components/footer/Footer";
// import { Header } from "@/components/Header";
// import React from "react";

// const ContactPage = () => {
//   return (
//     <div>
//       <Header />
//       {/* Header */}

//       {/* Contact Section */}
//       <ContactSection />
//       {/* <GetInTouch /> */}

//       {/* CTA Section */}
//       <LookingForCareer />
//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;
