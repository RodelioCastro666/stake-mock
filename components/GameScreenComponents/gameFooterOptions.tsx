import { RiFullscreenLine } from "react-icons/ri";
import { LuRectangleHorizontal } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { RiStarSLine } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

export default function GameFooterOptions() {
  return (
    <>
      <RiFullscreenLine className="text-[#AAB3CB]" />
      <LuRectangleHorizontal className="text-[#AAB3CB]" />
      <ImStatsBars className="text-[#AAB3CB]" />
      <RiStarSLine className="text-[#AAB3CB]" />
      <div className="flex gap-1">
        <FaBitcoin className="text-[#6CDE07]" />
        <p>USD</p> <FaChevronDown className="text-[#AAB3CB]" />
      </div>
      <div className="border-[1px] border-b-lime-50 h-full"></div>
    </>
  );
}
