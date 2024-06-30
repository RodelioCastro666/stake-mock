import Image from "next/image";

// Images

// ____________________________________________

//Components
import TableResult from "@/components/GameScreenComponents/tableResult";
// import mobileGameScreen from "@/components/mobileGameScreen";
import Roadmap from "@/components/GameScreenComponents/roadmap";
import RightRoadMap from "@/components/GameScreenComponents/roadsMap";
import VideoPlayer from "@/components/GameScreenComponents/videoPlayer";
import Menu from "@/components/GameScreenComponents/menu";
import BeadRoadMap from "@/components/GameScreenComponents/beadRoadmap";

import GameScreenFooter from "@/components/GameScreenComponents/gameScreenFooter";
import Header from "@/components/header";
import SideNav from "@/components/sideNav";
import MoneyDeatails from "@/components/GameScreenComponents/moneyDetails";
import BettingChips from "@/components/GameScreenComponents/bettingChips";
import RightOption from "@/components/GameScreenComponents/rightOptions";
import Counter from "@/components/GameScreenComponents/counter";
import GameFooterOptions from "@/components/GameScreenComponents/gameFooterOptions";
// ____________________________________________

// ICONS

// ____________________________________________

export default function Home() {
  return (
    <main className="bg-[#1a2c38] w-full h-screen  flex flex-col">
      {/* <MobileGameScreen /> */}
      {/*
       */}
      <div className="flex">{/* <SideNav /> */}</div>
      <div className=" flex flex-col  rounded-t-lg gap-4">
        <Header />
        <div className="bg-[#0f212e] w-full h-auto row-start-2 col-start-2 col-span-12 grid grid-rows-[auto_2fr_1fr] px-2 relative rounded-md grid-flow-col">
          <div className="absolute w-full h-full ">{/* <VideoPlayer /> */}</div>

          <div className="z-10  grid grid-cols-2  p-1">
            <Menu />
          </div>

          <div className="z-10 text-white grid grid-cols-3 grid-rows-3">
            <div>
              <input
                type="text"
                placeholder="Click to chat"
                className="bg-black w-50 text opacity-[0.4] px-4  py-1 rounded-full border-white border-[1px]"
              />
            </div>

            <div className="row-start-2 col-start-2  flex flex-col items-center ">
              <div className="w-[80%] p-2 text-center bg-gradient-to-l from-black/[0.001]  via-black/50  to-black/[0.001] ">
                <div className=" opacity-[0.8] bg-gradient-to-l from-black/[0.01]   via-red-500  to-black/[0.01] text-[length:calc(1vw+0.2rem)]  md:p-2 ">
                  Banker
                </div>
              </div>
            </div>
            <div className="row-start-3 col-start-2  flex justify-center items-start">
              <Counter />
            </div>
          </div>

          <div className="z-10 flex   flex-col gap-7  md:gap-12 lg:gap-18  ">
            <div className="flex  gap-4 ">
              <div className=" w-[35%]  h-full flex  flex-col  justify-between bg-slate-500 ">
                <BeadRoadMap />
                {/* <img src={beadRoadmap} /> */}
              </div>
              <div className="relative w-[30%] h-full ">
                <div className="w-full absolute  top-[-20%] md:top-[-50%] flex flex-col gap-5">
                  <TableResult />
                </div>
              </div>

              <div className=" w-[35%] h-full flex flex-col   gap-1 relative">
                <RightRoadMap />

                {/* <img src={bigRoadmap} /> */}

                {/* <img src={eyeRoadmap} className="w-full h-full" />
                  <img src={smallRoadmap} className="w-full h-full" />
                  <img src={cockRoachRoadmap} className="w-full h-full" /> */}
              </div>
            </div>
            <div className="flex w-full justify-between   relative  overflow-hidden ">
              <div className=" basis-1/4 flex  ">
                <MoneyDeatails />
              </div>

              <div className="relative basis-1/2 p-2 flex  ">
                <BettingChips />
              </div>
              <div className="basis-1/4 flex justify-end">
                <RightOption />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F212E]  h-14  rounded-b-lg ">
        <div className="flex items-center gap-7 p-3 h-full">
          <GameFooterOptions />
        </div>
      </div>
    </main>
  );
}
