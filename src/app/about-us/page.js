import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import hero from "@/assets/images/hero.webp";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/wanika/DiscoverMore";
import Navbar from "@/components/wanika/Navbar";
import logo from "@/assets/images/logo.png";

export const metadata = {
  title: {
    default: "About",
   
  },
 
};
const values = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Asset Management",
    description: "Idwala Asset Mnagement delivers tailored investment solutions and personalized wealth management strategies through a disciplined approach, helping clients achieve their financial objectives"
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Commodity Trading",
    description: "At Watata Commodities we are a leading international trade company specializing in the procurement and distribution of bulk commodities crucial to national economies"
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Event Management",
    description: "At Naka Events our creative team collaborates with clients to design and plan events that align with their vision, ensuring seamless execution and an unforgettable experience"
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Micro Finance",
    description: "Sekela Microfinace offers tailored financial products including microloans, savings accounts, and insurance services, aimed at empowering entrepreneurs and small businesses to reach their full potential."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Structured Finance",
    description: "Mopane Consultancy assist companies in raising capital and managing supply chains, especially those unable to access conventional banking system"
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Secretarial Service",
    description: "At Kikapu financial services we specialize in corporate governance, company compliance, and regulatory adherence, ensuring clients operate within legal frameworks"
  }
];


const Page = ({ fullHeight = false }) => {
  return (
    <>
      <Navbar logo={logo} />
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={adeolu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-80 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">Home/ About-Us</p>
          <h2 className="text-2xl text-white md:text-3xl ">About Us</h2>
        </div>
      </section>

      {/*About Us*/}

      <section className="py-24">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={hero}
              width={600}
              height={500}
              alt="Wanika Group Overview"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-lg font-bold md:pt-0 text-custorm-green md:text-base">WHO WE ARE</p>
            <h2 className="pb-5 text-3xl font-bold text-custorm-green">
              Wanika Group: Innovating Financial Solutions
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 border-custorm-green text-regal-blue bg-custorm-gray">
              &quot;Wanika&quot; means &quot;to find&quot; in Shona, reflecting our mission to discover innovative financial solutions.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Wanika Group is a diversified financial services conglomerate, committed to innovation, agility, and value creation. We offer competitive pricing, high-quality products, and efficient services, serving diverse client needs through our seven subsidiaries.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Our subsidiaries specialize in capital raising, asset management, commodity financing, microfinance, secretarial services, and event management.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/*Banner*/}

      <DiscoverMore />

      {/*Company Values*/}

      <section className="px-2 py-24 bg-white md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div>
          <h2 className="pb-10 text-2xl font-bold text-center text-custorm-green md:text-3xl ">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray">
              <div>{value.icon}</div>
              <div>
                <h3 className="pb-5 text-xl font-bold text-custorm-green">{value.title}</h3>
                <p className="text-base">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
