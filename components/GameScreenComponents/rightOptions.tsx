import { FaPlus } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
export default function RightOption() {
  return (
    <>
      <div className="w-[50%] text-white flex-col   bg-black/50 border-[1px] text-center place-content-center  m-auto  rounded-full">
        <div className=" flex  justify-center items-center gap-1 p-1">
          <FaPlus />
          <p className="truncate text">Table</p>
        </div>
      </div>

      <div className="w-[50%] text-white bg-black/50 border-[1px] text-center place-content-center  m-auto  rounded-full">
        <div className=" flex  justify-center items-center  gap-1 p-1">
          <IoIosLeaf />
          <p className="truncate text">Lobby</p>
        </div>
      </div>
    </>
  );
}
