import { ReactNode } from "react";
import Header from "../components/Header";
import GradientBackground from "./GradientBackground";
import { isFirefox } from "react-device-detect";

interface Props {
  currentPage: ReactNode;
}

function Landing({ currentPage }: Props) {
  return (
    <>
      <div
        className="flex flex-col w-screen h-screen overflow-hidden"
        style={{ color: isFirefox ? "black" : "white" }}
      >
        <div className="w-screen h-24">
          <Header />
        </div>
        {/* Divider bar */}
        <div className="h-1 w-full self-center rounded-md bg-white/40 drop-shadow-xl"></div>
        {currentPage}
      </div>
      {!isFirefox && <GradientBackground />}
    </>
  );
}

export default Landing;
