import Hero from "@/components/idwala/Hero";
import AboutUs from "@/components/idwala/AboutUs";
import Solutions from "@/components/idwala/Solutions";
import ConsultationBanner from "@/components/idwala/ConsultationBanner";
import Services from "@/components/idwala/Services";
import DiscoverMore from "@/components/idwala/DiscoverMore";
import Commercials from "@/components/idwala/Commercials";
import Navbar from "@/components/wanika/Navbar";
import idwalaLogo from "@/assets/images/idwala-logo.png";

export const metadata = {
  title: {
    absolute: "Idwala Asset Management",
  },
};

const page = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Navbar remains visible */}
        <Navbar logo={idwalaLogo} logoWidth={170} logoHeight={60} />

        {/* Blurred background content */}
        <div className="h-full pointer-events-none blur-sm">
          <Hero />
          <AboutUs />
          <Solutions />
          <ConsultationBanner />
          <Services />
          <DiscoverMore />
          <Commercials />
        </div>

        {/* Full-screen "Coming Soon" overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Coming Soon
          </h1>
        </div>
      </div>
    </>
  );
};

export default page;
