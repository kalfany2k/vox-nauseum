const UpcomingEvent = () => {
  return (
    <div className="w-[95%] md:w-[80%] h-[80%] flex flex-col drop-shadow-md hover:drop-shadow-xl event-card hover:bg-purple-800/50 transition-all duration-300 ease-in-out overflow-hidden pb-[0.75rem]">
      <div className="flex h-[33%] w-full flex-row border-b-[1px] pb-[-0.375rem] pt-[-0.375rem] items-center justify-evenly rounded-t-[32px] hover:bg-purple-800/20 transition-colors duration-300 ease-in-out">
        <div className="bg-black rounded-full w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 fixed left-3 cursor-pointer"></div>
        <div className="flex flex-col whitespace-nowrap text-md xl:text-lg font-Inter-li fixed left-[5.5rem] lg:left-[6.5rem] xl:left-[7.5rem] cursor-pointer">
          <p className="font-Inter-bold">Vox Nauseum Incarnate</p>
          <p className="">Noordwal 1, 1021 PX</p>
          <p className="hidden xl:block font-Inter-md">Amsterdam</p>
        </div>
      </div>
      <div className="h-[66%] w-full flex pr-3 pl-4 mt-[0.5rem] justify-center items-start overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-black scrollbar-thumb-rounded-full">
        <p className="font-Inter-li text-sm lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id commodo
          velit. Sed et sapien lobortis, finibus enim eu, lacinia nunc. Morbi
          diam sapien, lobortis pharetra aliquam in, ornare ut erat. Fusce eu
          lectus vitae tellus lacinia condimentum. Sed dictum tincidunt
          accumsan. Quisque felis justo, vestibulum sed magna ut, pretium tempus
          mi. Nulla metus nunc, semper a semper non, ultrices id metus. Etiam
          semper lacus ipsum, sed pulvinar lectus aliquam in. Nam egestas
          posuere nunc, eget tristique mauris venenatis id.
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvent;
