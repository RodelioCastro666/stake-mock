import { TbCoins } from "react-icons/tb";
import Chip1 from "@/Images/Chip1.png";
import Chip2 from "@/Images/Chip2.png";
import Chip3 from "@/Images/Chip3.png";
import Chip4 from "@/Images/Chip4.png";
import Chip5 from "@/Images/Chip4.png";
import Chip6 from "@/Images/Chip4.png";
import Image from "next/image";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
export default function GameScreenFooter() {
  return (
    <>
      <div className="flex-1 flex gap-3 items-center ">
        <TbCoins
          className="bg-gray-700 p-[0.2rem] rounded-full w-[100%]  "
          style={{ width: "25px", height: "25px" }}
        />
        <div className="flex-1 flex flex-col ">
          <p className="text p-0 m-0 	leading-[0.8rem] ">Balance</p>
          <p className="text leading-[0.3rem]">$0.00</p>
        </div>
      </div>
      <div className="flex-2  flex  gap-1 justify-center items-center  h-full ">
        <MdOutlineSettingsBackupRestore className="text-white w-[100%] h-[100%] p-[0.3rem]  bg-slate-600 rounded-md  " />

        <Image
          src={Chip1}
          alt="Picture of the author"
          className="w-full h-full"
        />
        <Image
          src={Chip1}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={Chip1}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={Chip3}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={Chip4}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={Chip5}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={Chip6}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        <LuRefreshCw className="text-white  p-[0.3rem]  w-[100%] h-[100%]  bg-slate-600 rounded-md " />
      </div>
      <div className="flex-1 flex flex-col p-0 justify-center items-end ">
        <p className="text p-0 m-0 	leading-[0.8rem] ">Total Bet</p>
        <p className="text leading-[0.3rem] indent-4">$0.00</p>
      </div>
    </>
  );
}
