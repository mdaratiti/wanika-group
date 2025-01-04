import Hero from "@/components/sekela/Hero";
import AboutUs from "@/components/sekela/AboutUs";
import Solutions from "@/components/sekela/Solutions";
import ConsultationBanner from "@/components/sekela/ConsultationBanner";
import Services from "@/components/sekela/Services";
import DiscoverMore from "@/components/sekela/DiscoverMore";
import Commercials from "@/components/sekela/Commercials";
import Navbar from "@/components/wanika/Navbar";
import sekelaLogo from "@/assets/images/sekela-logo.png";

export const metadata = {
  title: {
    absolute: "Sekela Micro Finance",
  },
};

const page = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Navbar remains visible */}
        <Navbar logo={sekelaLogo} logoWidth={100} logoHeight={60} />

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
