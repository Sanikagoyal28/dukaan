"use client";

import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-[224px]">
        <div className="p-4 sm:p-8">
          <div className="flex justify-between pb-6 ">
            <p className="text-[#1A181E] font-bold text-xl">Overview</p>
            <select className="bg-white h-9 w-[137px] border rounded">
              <option value="">Last Month</option>
            </select>
          </div>

          <div className="flex-col justify-start items-start flex phone:flex-row gap-x-4 w-full">
            <div className="w-full phone:w-1/2 bg-white flex-col p-5 rounded shadow-lg mb-3 phone:mb-0">
              <p className="text-[#4D4D4D] mb-4">Online Orders</p>
              <p className="text-xl text-[#1A181E]">231</p>
            </div>
            <div className="w-full phone:w-1/2 bg-white flex-col p-5 rounded shadow-lg">
              <p className="text-[#4D4D4D] mb-4">Amount received</p>
              <p className="text-xl text-[#1A181E]">₹ 23,92,312.19</p>
            </div>
          </div>

          <div className="mt-8 ">
            <p className="text-[#1A181E] font-bold text-xl mb-5 ">
              Transactions | This Month
            </p>
            <div className="bg-white rounded-lg px-3 shadow-xl flex-col justify-center items-center">
              <div className="flex justify-between mt-3">
                <div>
                  <input
                    type="text"
                    className="border h-9 w-44 small:w-[248px] rounded-md px-2 py-4 text-[#999999] text-sm pl-7 outline-none"
                    placeholder="Search by order id"
                  />
                  <Image
                    src="./search.svg"
                    width={16}
                    height={16}
                    className="rounded w-4 h-4 relative bottom-[26px] mx-2"
                  />
                </div>

                <div className="flex gap-x-3">
                  <div className="border h-9 w-9 phone:w-20 rounded-md phone:px-[6px] phone:py-[12px] text-[#4D4D4D] text-base overflow-hidden flex justify-center phone:justify-start items-center cursor-pointer">
                    <span className="hidden phone:inline">Sort</span>
                    <Image
                      src="./Sort.svg"
                      width={16}
                      height={16}
                      className="rounded w-5 phone:w-4 h-5 phone:h-4 phone:relative phone:left-3"
                    />
                  </div>
                  <div className="border h-9 w-9 rounded-md overflow-hidden flex justify-center items-center cursor-pointer">
                    <Image
                      src="./download.svg"
                      width={20}
                      height={20}
                      className="rounded w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <Table />

              <div className="flex w-fit m-auto my-6">
                <button className="h-8 w-24 border rounded text-[#4D4D4D]">
                  &lt; Previous
                </button>
                <div className="flex gap-x-2 mx-6">
                  <button className="p-1 rounded">1</button>
                  <button className="p-1 rounded">...</button>
                  <button className="text-white bg-[#146EB4] p-2 rounded">
                    10
                  </button>
                  <button className="p-1 rounded hidden sm:block">11</button>
                  <button className="p-1 rounded hidden sm:block">12</button>
                  <button className="p-1 rounded hidden sm:block">13</button>
                  <button className="p-1 rounded hidden sm:block md:hidden medium:block">14</button>
                  <button className="p-1 rounded hidden sm:block md:hidden medium:block">15</button>
                  <button className="p-1 rounded hidden sm:block md:hidden medium:block" >16</button>
                  <button className="p-1 rounded hidden sm:block md:hidden medium:block">17</button>
                  <button className="p-1 rounded hidden sm:block md:hidden medium:block">18</button>
                </div>
                <button className="h-8 w-[74px] border rounded text-[#4D4D4D]">
                  Next &gt;{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
