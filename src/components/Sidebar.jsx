"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
    src: "./home.svg",
  },
  {
    name: "Orders",
    link: "/orders",
    src: "./orders.svg",
  },
  {
    name: "Products",
    link: "/product",
    src: "./product.svg",
  },
  {
    name: "Delivery",
    link: "/delivery",
    src: "./delivery.svg",
  },
  {
    name: "Marketing",
    link: "/marketing",
    src: "./marketing.svg",
  },
  {
    name: "Analytics",
    link: "/analytics",
    src: "./analytics.svg",
  },
  {
    name: "Payments",
    link: "/payments",
    src: "./payments.svg",
  },
  {
    name: "Tools",
    link: "/tools",
    src: "./tools.svg",
  },
  {
    name: "Discounts",
    link: "/discount",
    src: "./discount.svg",
  },
  {
    name: "Audience",
    link: "/audience",
    src: "./audience.svg",
  },
  {
    name: "Appearance",
    link: "/appearance",
    src: "./appearance.svg",
  },
  {
    name: "Plugins",
    link: "/plugins",
    src: "./plugins.svg",
  },
];

function Sidebar() {
  const pathname = usePathname();

  function openSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = "0";
    // sidebar.style.display = "flex";
  }

  function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-224px";
    // sidebar.style.display = "none";
  }

  return (
    <>
      <div>
        <nav className="h-[64px] flex justify-between items-center bg-white px-4 medium:px-8 border-b-2 border-[#a5a2a2] md:ml-[224px]">
          <div className="flex">
            <Image
              src="./hamburger.svg"
              width={14}
              height={14}
              className="block cursor-pointer md:hidden mr-2"
              onClick={openSidebar}
            />
            <p className="mr-2 phone:mr-4 flex items-center justify-center">
              Payments
            </p>
            <p className="text-[12px] text-[#4D4D4D] flex items-center">
              <Image
                src="./Help.svg"
                width={14}
                height={14}
                className="rounded w-[14px] h-[14px] inline mr-1"
              />
              How it works
            </p>
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              className="bg-[#F2F2F2] h-10 w-64 medium:w-[400px] rounded-md px-2 py-4 text-[#808080] text-base pl-7 outline-none"
              placeholder="Search features, tutorials etc."
            />
            <Image
              src="./search.svg"
              width={16}
              height={16}
              className="rounded w-4 h-4 absolute top-6 mx-2"
            />
          </div>

          <div className="flex justify-center items-center gap-x-3">
            <Image
              src="./searchNav.svg"
              width={40}
              height={40}
              className="rounded w-10 h-10 cursor-pointer md:hidden"
            />
            <Image
              src="./message.svg"
              width={40}
              height={40}
              className="rounded w-7 h-7 phone:w-10 phone:h-10 cursor-pointer"
            />
            <Image
              src="./arrow.svg"
              width={40}
              height={40}
              className="rounded w-7 h-7 phone:w-10 phone:h-10 cursor-pointer"
            />
          </div>
        </nav>
        {/* sidenav */}
        <div
          className="bg-sideNavColor w-[224px] m-0 box-border p-4 h-full overflow-auto fixed flex flex-col justify-between left-[-224px] md:left-0 top-0 ease-in duration-300 z-10"
          id="sidebar"
        >
          {/* <div className="flex flex-col gap-6"> */}
          <div className="flex flex-row justify-between align-middle p-2 mb-6">
            <div className="flex gap-3">
              <Image
                src="./logo.svg"
                width={39}
                height={39}
                className="rounded"
              ></Image>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white">
                  Nishyan
                </span>
                <a
                  href=""
                  className="font-normal underline text-[13px] text-opaque"
                >
                  Visit store
                </a>
              </div>
            </div>
            <Image
              src="./dropdown.svg"
              width={20}
              height={20}
              className="cursor-pointer"
            ></Image>
            <Image
              src="./cross.svg"
              width={20}
              height={20}
              className="cursor-pointer md:hidden"
              onClick={closeSidebar}
            ></Image>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-2">
              {navItems.map((items) => (
                <li
                  className={`p-2 rounded ${
                    items.link === pathname ? "bg-opaque2" : "hover:bg-opaque2"
                  }`}
                >
                  <Link href={items.link} className="flex align-middle gap-4">
                    <Image src={items.src} width={20} height={20}></Image>
                    <span className="font-medium text-sm text-opaque">
                      {items.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* </div> */}
          <div className="p-2 bg-opaque2 rounded flex gap-4 mt-6">
            <div className="p-2 bg-opaque2 rounded">
              <Image src="wallet.svg" height={24} width={24}></Image>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-opaque">Available credits</span>
              <span className="text-base text-white">222.10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
