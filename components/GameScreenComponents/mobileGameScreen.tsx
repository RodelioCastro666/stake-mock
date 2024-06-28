import Image from "next/image";
import BaccaratScreenLogo from "@/Images/BaccaratScreenLogo.avif";
import { FaRegStar } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import DollarCoinLogo from "@/Images/icons8-dollar-coin-30.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import Toggle from "@/components/GameScreenComponents/toggle";
import { IoIosPlay } from "react-icons/io";
export default function mobileGameScreen() {
  return (
    <>
      <div className="bg-[#0f212e] flex flex-col gap-3 rounded-lg p-2">
        <div className="w-full h-auto  flex p-2 gap-4">
          <div className="w-[40%] ">
            <Image
              src={BaccaratScreenLogo}
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-rows-3 gap-7">
            <div className="row-start-2">
              <h2 className=" font-semibold">Baccarat</h2>
              <p className="text-xs font-semibold text-[#B1BAD3]">
                Pragmatic Play
              </p>
            </div>
            <div className="row-start-3 flex justify-around  items-center ">
              <FaRegStar color="#B1BAD3" />
              <ImStatsBars color="#B1BAD3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3  p-2">
          <p>Select your display balance</p>
          <div className="flex items-center gap-2 ">
            <p className="text-[#B1BAD3]"> Balance displayed in</p>
            <Image
              src={DollarCoinLogo}
              alt="Picture of the author"
              className="w-[25px]"
            />
            <span className="text-white font-semibold text-sm">USD</span>
            <RiArrowDropDownLine size="25px" color="white" />
          </div>
          <div className="flex items-center ">
            {/* <label className="inline-flex items-center me-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label> */}
            <Toggle />

            <p className="text-[#B1BAD3]">Play in Full Screen</p>
          </div>

          <button className="bg-[#00e701] text-black text-sm w-[50%] px-2 py-2 rounded-md font-semibold ">
            <IoIosPlay className="inline-block mb-[1px]" size="25px" />
            Play
          </button>
        </div>
      </div>
    </>
  );
}
