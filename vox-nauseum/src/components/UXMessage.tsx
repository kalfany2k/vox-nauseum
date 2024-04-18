import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const UXMessage = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("firstEnter") != "no") {
      localStorage.setItem("firstEnter", "yes");
    }
    setTimeout(() => {
      setOpacity(1);
    }, 500);
  }, []);

  const closePopup = () => {
    setOpacity(0.0001);

    setTimeout(() => {
      localStorage.setItem("firstEnter", "no");
      setOpacity(0);
    }, 500);
  };

  return (
    <div
      className="h-[4.5rem] md:h-16 w-[20rem] md:w-[30rem] text-sm text-center items-center justify-center absolute top-[80%] md:top-0 p-4 m-4 rounded-xl flex flex-row transition-opacity duration-1000 ease-in-out bg-slate-400/20"
      style={{
        opacity: opacity,
        display:
          localStorage.getItem("firstEnter") == "yes" ? "inherit" : "none",
      }}
    >
      <p>
        For the best user experience, we recommend using a desktop device
        alongside Google Chrome
      </p>
      <FaCheckCircle
        size="50"
        className="pl-[0.2rem] hover:cursor-pointer hover:fill-red-800 transition-colors duration-300 ease-out"
        onClick={() => closePopup()}
      />
    </div>
  );
};

export default UXMessage;
