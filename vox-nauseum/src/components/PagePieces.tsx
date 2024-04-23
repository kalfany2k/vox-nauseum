import "../styles/general.scss";

const PagePieces = () => {
  const len = 12;
  const skeletons = new Array(len).fill(null).map((_, index) => index + 1);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[80%] h-[60vh] xl:w-[65%] m-6 xl:h-[720px] rounded-lg">
        <div className="w-full h-full flex justify-center xl2:justify-between flex-wrap">
          {skeletons.map((skeleton) => (
            <div key={skeleton} className="item">
              <div className="w-full lg:w-[45%] h-full bg-black"></div>
              <div className="hidden lg:inline-block w-[55%] h-full m-4 text-xl">
                <p>
                  Vox Nauseum n.4- Our forth issue was one of significant steps
                  forward. First, it is so far our only purely digital release,
                  incorporating musical and video elements to utilize the new
                  medium. It also greatly expands our team of writers and
                  introduces subtitles, both key elements of our present
                  workflow.
                </p>
              </div>
            </div>
          ))}
          <div className="w-full h-[6px] bg-transparent"></div>
        </div>
      </div>
      {/* <div className="mt-5 font-Arial-rounded-mt-bold text-fuchsia-500">
        <DisplacedText
          turbulence="1.5"
          text="SUBMIT A PIECE"
          color={isChrome ? "orangered" : "slategrey"}
          smallSize="text-[2rem]"
          largeSize="lg:text-[3rem]"
        />
      </div> */}
    </div>
  );
};

export default PagePieces;
