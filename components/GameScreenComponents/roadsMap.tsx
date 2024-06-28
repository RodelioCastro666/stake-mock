import Image from "next/image";
import RightPanel from "@/Images/roadMap.png";
export default function Roadmap() {
  return (
    <>
      <div>
        <Image
          src={RightPanel}
          alt="Picture of the author"
          className="rounded-lg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
}
