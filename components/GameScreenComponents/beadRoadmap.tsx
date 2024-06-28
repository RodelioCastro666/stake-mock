import Image from "next/image";
import LeftPanel from "@/Images/beadRoadmap.png";
export default function BeadRoadMap() {
  return (
    <>
      <div className="">
        <Image
          src={LeftPanel}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="rounded-lg"
        />
      </div>
    </>
  );
}
