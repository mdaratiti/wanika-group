import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-black">
      <div className="py-24 mx-auto ">
        <div className="grid grid-cols-1 gap-5 px-2 md:grid-cols-4 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
          <div className="flex items-center justify-center md:col-span-1">
            <p className="text-xl font-bold text-center text-custorm-green md:text-left">
              Discover financial solutions with Wanika Group.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="pb-6 text-xl font-bold text-custorm-green md:text-base">
              Solutions
            </p>
            <Link
              href="/solutions-details-asset-management"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Asset Management
            </Link>
            <Link
              href="/solutions-details-commodity-trading"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Commodity Trading
            </Link>
            <Link
              href="/solutions-details-event-management"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Event Management
            </Link>
            <Link
              href="/solutions-details-micro-finance"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Micro Finance
            </Link>
            <Link
              href="/solutions-details-structured-finance"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Structured Finance
            </Link>
            <Link
              href="/solutions-details-secretarial-service"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Secretarial Service
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="pb-6 text-xl font-bold md:text-base text-custorm-green">
              Our Companies
            </p>
            <Link
              href="/companies/mopane-capital"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Mopane Capital
            </Link>
            <Link
              href="/companies/idwala-asset-management"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Idwala Asset
            </Link>
            <Link
              href="/companies/sekela-microfinance"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Sekela Microfinance
            </Link>
            <Link
              href="/companies/naka-event-management"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Naka Events
            </Link>
            <Link
              href="/companies/watata-commodities"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Watata Commodities
            </Link>
            <Link
              href="/companies/kikapu-finance"
              className="block pb-4 text-base text-white hover:text-custorm-green"
            >
              Kikapu Finance
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="pb-6 text-xl font-bold md:text-base text-custorm-green">
              Contact
            </h3>
            <p className="pb-4 text-base text-white">
              71 Glenara Ave, Highlands, Harare
            </p>
            <p className="pb-4 text-base text-white">+263 77 448 5320</p>
            <p className="pb-4 text-base text-white">www.wanikagroup.net</p>
            <p className="pb-4 text-base text-white">info@wanikagroup.net</p>
          </div>
        </div>
      </div>

      <div className="py-10 bg-white">
        <p className="text-base text-center text-gray-500">
          Copyright 2025 Wanika Group. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
