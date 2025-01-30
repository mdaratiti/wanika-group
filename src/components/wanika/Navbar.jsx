"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  {
    label: "Our Companies",
    link: "/services",
    children: [
      { label: "Wanika Group", link: "/companies/wanika-group" },
      { label: "Mopane Capital", link: "/companies/mopane-capital" },
      {
        label: "Idwala Asset Management",
        link: "/companies/idwala-asset-management",
      },
      { label: "Watata Commodities", link: "/companies/watata-commodities" },
      { label: "Sekela Microfinance", link: "/companies/sekela-microfinance" },
      { label: "Kikapu Financial Services", link: "/companies/kikapu-finance" },
      {
        label: "Naka Event Management",
        link: "/companies/naka-event-management",
      },
    ],
  },
  { label: "Services", link: "/services" },
  { label: "Solutions", link: "/solutions" },
  { label: "Contact Us", link: "/contact-us" },
];

export default function Navbar({logo, logoWidth = 120, logoHeight = 40}) {
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className="absolute top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="flex items-center justify-between w-full px-4 py-3 mx-auto bg-transparent md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <section className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Website logo"
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
            />
          </Link>
        </section>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="items-center hidden gap-4 transition-all lg:flex">
          {navItems.map((data, index) => (
            <div key={index} className="relative group">
              <Link
                href={data.link ?? "#"}
                className="relative px-2 py-3 transition"
                onClick={() => closeSideMenu()}
              >
                <p className="flex items-center gap-2 text-lg font-bold cursor-pointer text-custorm-green md:text-base group-hover:text-black">
                  <span>{data.label}</span>
                  {data.children && (
                    <IoIosArrowDown className="transition-all rotate-180 group-hover:rotate-0" />
                  )}
                </p>
              </Link>
              {data.children && (
                <div className="absolute right-0 flex-col hidden w-auto gap-1 py-3 mt-2.5 transition-all bg-white rounded-lg shadow-md top-10 group-hover:flex">
                  {data.children.map((child, childIndex) => (
                    <SingleNavItem
                      key={childIndex}
                      child={child}
                      closeSideMenu={closeSideMenu}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <FiMenu
          onClick={openSideMenu}
          className="text-4xl text-black cursor-pointer md:block lg:hidden"
        />
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  const [isItemOpen, setItemOpen] = useState({});
  const [animationParent] = useAutoAnimate();

  function toggleItem(index) {
    setItemOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function handleLinkClick(event, link) {
    event.preventDefault(); // Prevent default link behavior
    closeSideMenu();
    window.location.href = link; // Navigate programmatically
  }

  return (
    <div className="fixed top-0 left-0 flex justify-end w-full h-full min-h-screen bg-black/60 lg:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-4xl cursor-pointer"
          />
        </section>
        <div
          ref={animationParent}
          className="flex flex-col gap-2 text-base transition-all"
        >
          {navItems.map((data, index) => (
            <div key={index} className="relative group">
              {data.children ? (
                <>
                  <div
                    onClick={() => toggleItem(index)}
                    className="relative px-2 py-3 transition cursor-pointer"
                  >
                    <p className="flex items-center gap-2 text-lg text-neutral-400 group-hover:text-black">
                      <span>{data.label}</span>
                      <IoIosArrowDown
                        className={`text-xs transition-all ${
                          isItemOpen[index] ? "rotate-180" : ""
                        }`}
                      />
                    </p>
                  </div>
                  {isItemOpen[index] && (
                    <div className="flex flex-col w-auto gap-1 py-3 transition-all bg-white rounded-lg shadow-md">
                      {data.children.map((child, childIndex) => (
                        <SingleNavItem
                          key={childIndex}
                          child={child}
                          closeSideMenu={closeSideMenu}
                          handleLinkClick={handleLinkClick}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={data.link ?? "#"}
                  onClick={(event) => handleLinkClick(event, data.link)}
                  className="relative px-2 py-3 text-lg transition cursor-pointer text-neutral-400 group-hover:text-black" // Ensure text-lg is added here
                >
                  {data.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ child, closeSideMenu }) {
  return (
    <Link
      href={child.link ?? "#"}
      className="flex items-center px-4 py-2 text-lg text-gray-800 cursor-pointer md:text-base hover:bg-gray-100" // Ensure text-lg is added here
      onClick={() => closeSideMenu()}
    >
      <span className="whitespace-nowrap">{child.label}</span>
    </Link>
  );
}
