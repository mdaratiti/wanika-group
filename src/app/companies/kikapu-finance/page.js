import Hero from "@/components/kikapu/Hero";
import AboutUs from "@/components/kikapu/AboutUs";
import Solutions from "@/components/kikapu/Solutions";
import ConsultationBanner from "@/components/kikapu/ConsultationBanner";
import Services from "@/components/kikapu/Services";
import DiscoverMore from "@/components/kikapu/DiscoverMore";
import Commercials from "@/components/kikapu/Commercials";
import Navbar from "@/components/wanika/Navbar";
import kikapuLogo from "@/assets/images/kikapu-logo.png";

export const metadata = {
  title: {
    absolute: "Kikapu Finance"
   
  },
}

const page = () => {
  return (
    <>
      <Navbar logo={ kikapuLogo }  logoWidth={135} logoHeight={60} />
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
