import { ReactNode } from "react";
import Header from "../components/Header";
import GradientBackground from "./GradientBackground";
import { isChrome } from "react-device-detect";
import "../styles/general.scss";
import UXMessage from "./UXMessage";

interface Props {
  currentPage: ReactNode;
}

function Landing({ currentPage }: Props) {
  return (
    <div
      className="flex flex-col w-screen h-[200vh] md:h-screen overflow-y-scroll lg:overflow-y-hidden "
      style={{
        color: !isChrome ? "black" : "white",
      }}
    >
      {!isChrome && <UXMessage />}
      <div className="w-screen">
        <Header />
      </div>
      {/* Divider bar */}
      {/* <div
        className="h-1 absolute top-[6rem] w-full self-center bg-white/80 rounded-md drop-shadow-xl"
        style={{ backgroundColor: isFirefox ? "black" : "" }}
      ></div> */}
      <div className="flex items-center justify-center">{currentPage}</div>
      {isChrome ? <GradientBackground /> : <div className="bg-div" />}
    </div>
  );
}

export default Landing;
