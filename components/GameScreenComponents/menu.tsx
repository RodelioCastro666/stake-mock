import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgMaximizeAlt } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

import { IoVideocamOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

export default function Menu() {
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <IoMdClose
          color="white"
          className="bg-gray-800 p-[0.1rem] rounded-full text-lg"
        />

        <p className="text text-nowrap ">Stake Speed Baccarat $0.2 - $150</p>
        <RiArrowDropDownLine color="white" className="dropdownLogo " />
      </div>

      <div className="flex  justify-end gap-1">
        <SlEarphones className="rightPanelLogo" />
        <FaHistory className="rightPanelLogo" />
        <HiMiniQuestionMarkCircle className="rightPanelLogo" />
        <HiMiniSpeakerWave className="rightPanelLogo" />
        <IoIosSettings className="rightPanelLogo" />
        <IoVideocamOutline className="rightPanelLogo" />
        <CgMaximizeAlt className="rightPanelLogo" />
      </div>
    </>
  );
}
