const Header = () => {
  return (
    <div className="h-48  w-full bg-fuchsia-500 flex flex-col items-center drop-shadow-xl">
      <div className="w-[40%] h-[70%] bg-black flex items-center justify-center overflow-hidden">
        <p className="text-white text-7xl cursor-pointer font-Inter-md">
          VOX NAUSEUM
        </p>
      </div>
      <div className="w-[40%] h-[30%] bg-white flex flex-row text-center text-xl font-medium items-center">
        <div className="flex-1 cursor-pointer">
          <p className="hover:text-[1.5rem] transition-all duration-300">
            Pieces
          </p>
        </div>
        <div className="flex-1 cursor-pointer">
          <p className="hover:text-[1.5rem] transition-all duration-300">
            Print archive
          </p>
        </div>
        <div className="flex-1 cursor-pointer">
          <p className="hover:text-[1.5rem] transition-all duration-300">
            Multimedia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
