import Card from "./Card";
import Delimiter from "./Delimiter";

const Home = () => {
  return (
    <div className="flex flex-col mt-[0.25rem] w-full justify-center items-center">
      <span className="text-xl md:text-2xl font-SpaceMono-regular w-[75vw] text-center">
        Check out our newest release,
        <span className="font-SpaceMono-bold">CRYSTAL</span>
        <span className="font-Inter-li">!</span>
      </span>
      <div className="flex flex-row mb-4 md:mb-8 w-screen">
        <div className="flex flex-1 card-container text-shadow-lg transition-all ease-in-out duration-300 justify-center items-center">
          <Card />
        </div>
      </div>
      <Delimiter />
    </div>
  );
};

export default Home;
