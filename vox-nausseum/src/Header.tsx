const Header = () => {
  return (
    <div className="h-24 w-full bg-fuchsia-500 flex flex-row justify-center items-center drop-shadow-xl">
      <div className="flex-1 flex justify-evenly">
        <p>SOVVVVVVVvv</p>
        <p>SOVVVVVVVvv</p>
        <p>SOVVVVVVVvv</p>
      </div>
      <div className="w-[312px]">
        <p className="font-semibold text-4xl text-shadow-sm shadow-black text-amber-400 cursor-pointer">
          Vox Nausseum
        </p>
      </div>
      <div className="flex-1 flex justify-evenly">
        <p>SOVVVVVVVvv</p>
        <p>SOVVVVVVVvv</p>
        <p>SOVVVVVVVvv</p>
      </div>
    </div>
  );
};

export default Header;
