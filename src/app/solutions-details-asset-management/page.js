import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import capitalRaise from "@/assets/images/capital-raise.jpeg";
import SolutionsLinks from "@/components/solutions/SolutionsLinks";
import Navbar from "@/components/wanika/Navbar";
import logo from "@/assets/images/logo.png";

const page = ({ fullHeight = false }) => {
  return (
    <>
      <Navbar logo={ logo } />
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={medienSturmer}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-70 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white">
            Home/solutions/details/asset management
          </p>
          <h2 className="text-2xl text-white md:text-3xl">Asset Management</h2>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={capitalRaise} alt="capital raising" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 text-custorm-green md:text-3xl">
                Idwala Asset Management
              </h2>
              <p className="text-base ">
              IDWALA Asset Management is a leading boutique financial services firm based in Zimbabwe&apos;s financial hub. We deliver tailored investment solutions and personalized wealth management strategies through a disciplined approach, helping clients achieve their financial objectives. 
              </p>
              <p className="pt-5 text-base">
              Our team of experienced professionals is committed to excellence and client success, offering a comprehensive range of services including:
              </p>
              <ul className="pt-5 pl-5 text-base list-disc">
                <li>Customized portfolio management</li>
                <li>Tailored financial planning</li>
                <li>Advanced risk management solutions</li>
              </ul>
              <p className="pt-5 text-base">
              Through rigorous research, analysis, and strategic decision-making, we aim to maximize investment returns and minimize risk for our clients. Guided by innovation, integrity, and transparency, we empower clients to navigate global financial markets with confidence.
              </p>
              <p className="pt-5 text-base">
              With a relentless focus on excellence and client satisfaction, we are a trusted partner in achieving financial prosperity and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
