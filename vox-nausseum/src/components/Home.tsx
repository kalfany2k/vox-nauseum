import Card from "./Card";
import Delimiter from "./Delimiter";
import PreviousEvents from "./PreviousEvents";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-evenly items-center">
      <span className="text-2xl font-ex font-SpaceMono-regular mt-4 md:mt-6 w-[75vw] text-center">
        Check out our newest release,
        <span className="font-SpaceMono-bold">CRYSTAL</span>
        <span className="font-Inter-li">!</span>
      </span>
      <div className="flex flex-row w-screen">
        <div className="mt-4 sm:flex flex-col flex-1 hidden justify-evenly items-center overflow-hidden">
          <span className="font-Inter-md text-lg lg:text-xl">
            Upcoming events
          </span>
          <UpcomingEvents />
        </div>
        <div className="flex flex-1 card-container text-shadow-lg transition-all ease-in-out duration-300 justify-center items-center">
          <Card />
        </div>
        <div className="mt-4 font-Inter-md text-xl xl:flex flex-col flex-1 hidden justify-evenly items-center">
          <span>Previous events</span>
          <PreviousEvents />
        </div>
      </div>
      <Delimiter />
    </div>
  );
};

export default Home;
