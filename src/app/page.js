import "./globals.css";
import Navbar from "@/components/wanika/Navbar";
import logo from "@/assets/images/logo.png";
import Hero from "@/components/mopane/Hero";
import AboutUs from "@/components/mopane/AboutUs";
import Solutions from "@/components/mopane/Solutions";
import ConsultationBanner from "@/components/mopane/ConsultationBanner";
import Services from "@/components/mopane/Services";
import DiscoverMore from "@/components/mopane/DiscoverMore";
import Commercials from "@/components/mopane/Commercials";
import mopaneLogo from "@/assets/images/mopane-logo.png";

export const metadata = {
    title: {
        absolute: "Mopane Capital"

    },
}
export default function Home() {
  return (
    <div className="w-full min-h-screen ">
        <Navbar logo={ mopaneLogo } logoWidth={130} logoHeight={50}/>
        <Hero />
        <AboutUs />
        <Solutions />
        <ConsultationBanner />
        <Services />
        <DiscoverMore />
        <Commercials />
    </div>
  );
}
