const UpcomingEvents = () => {
  return (
    <div className="w-[95%] md:w-[80%] h-[80%] flex flex-col event-card text-end hover:bg-blue-800/50 transition-colors duration-300 ease-in-out overflow-hidden">
      <div className="flex flex-1 flex-row border-b-[1px] items-center justify-evenly rounded-t-[32px] hover:bg-blue-800/20 transition-colors duration-300 ease-in-out">
        <div className="flex flex-col whitespace-nowrap text-md xl:text-lg font-Inter-li fixed right-[5.5rem] lg:right-[6.5rem] xl:right-[7.5rem]">
          <p className="">Vox Nauseum Incarnate</p>
          <p className="">Noordwal 1, 1021 PX</p>
          <p className="hidden xl:block">Amsterdam</p>
        </div>
        <div className="bg-black rounded-full w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 fixed right-3"></div>
      </div>

      <div className="flex flex-1 flex-row items-center justify-evenly hover:bg-blue-800/20 transition-colors duration-300 ease-in-out">
        <div className="flex flex-col whitespace-nowrap text-md xl:text-lg font-Inter-li fixed right-[5.5rem] lg:right-[6.5rem] xl:right-[7.5rem]">
          <p className="">Vox Nauseum Incarnate</p>
          <p className="">Noordwal 1, 1021 PX</p>
          <p className="hidden xl:block">Amsterdam</p>
        </div>
        <div className="bg-black rounded-full w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 fixed right-3"></div>
      </div>

      <div className="flex flex-1 items-center border-t-[1px] justify-evenly rounded-b-[32px] hover:bg-blue-800/20 transition-colors duration-300 ease-in-out">
        <div className="flex flex-col whitespace-nowrap text-md xl:text-lg font-Inter-li fixed right-[5.5rem] lg:right-[6.5rem] xl:right-[7.5rem]">
          <p className="">Vox Nauseum Incarnate</p>
          <p className="">Noordwal 1, 1021 PX</p>
          <p className="hidden xl:block">Amsterdam</p>
        </div>
        <div className="bg-black rounded-full w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 fixed right-3"></div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
