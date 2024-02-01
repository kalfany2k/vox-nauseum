import Card from "./Card";
import Delimiter from "./Delimiter";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-2xl font-ex font-SpaceMono-regular mt-4 md:mt-6 xl:mt-10 w-[75vw] text-center">
        Check out our newest release,
        <span className="font-SpaceMono-bold">CRYSTAL</span>
        <span className="font-Inter-li">!</span>
      </span>
      <div className="flex flex-row release-class w-screen">
        <div className="events-text sm:flex">
          <span>Upcoming events</span>
        </div>
        <div className="flex flex-1 card-container text-shadow-lg transition-all ease-in-out duration-300 justify-center items-center">
          <Card />
        </div>
        <div className="events-text md:flex">
          <span>Previous events</span>
        </div>
      </div>
      <Delimiter />
    </div>
  );
};

export default Home;
