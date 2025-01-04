import Hero from "@/components/watata/Hero";
import AboutUs from "@/components/watata/AboutUs";
import Solutions from "@/components/watata/Solutions";
import ConsultationBanner from "@/components/watata/ConsultationBanner";
import Services from "@/components/watata/Services";
import DiscoverMore from "@/components/watata/DiscoverMore";
import Commercials from "@/components/watata/Commercials";
import Navbar from "@/components/wanika/Navbar";
import watataLogo from "@/assets/images/watata-logo.png";

export const metadata = {
  title: {
    absolute: "Watata Commodities"
   
  },
}

const page = () => {
  return (
    <>
      <Navbar logo={watataLogo} logoWidth={300} logoHeight = {60} />
      <Hero />
      <AboutUs />
      <Solutions />
      <ConsultationBanner />
      <Services />
      <DiscoverMore />
      <Commercials />
    </>
  );
};

export default page;
