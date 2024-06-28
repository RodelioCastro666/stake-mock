export default function MoneyDeatails() {
  return (
    <>
      <div className="w-[50%] px-5  text text-white flex-col   bg-black/50 border-[1px] text-center place-content-center  m-auto  rounded-full">
        <div className=" ">
          <p className="text  text  leading-3">balance</p>
          <p className="truncate text leading-3">$0</p>
        </div>
      </div>
      <div className="w-[50%] px-5   text-white flex-col   bg-black/50 border-[1px] text-center place-content-center  m-auto  rounded-full">
        <div className="">
          <p className="truncate text  leading-3">Total Bet</p>
          <p className="truncate text leading-3">$0</p>
        </div>
      </div>
    </>
  );
}
