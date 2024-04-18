import "../styles/general.scss";
import DisplacedText from "./DisplacedText";

const PagePieces = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[80%] h-[70vh] rounded-lg bg-slate-500/20"></div>
      <div className="mt-5 font-Arial-rounded-mt-bold bg-black/10 px-3 rounded-xl">
        <div className="-mb-2">
          <DisplacedText
            turbulence="1.5"
            text="SUBMIT A PIECE"
            color="black"
            smallSize="text-[1.5rem]"
            largeSize="lg:text-[3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default PagePieces;
