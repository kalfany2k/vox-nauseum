import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const UXMessage = () => {
  const [opacity, setOpacity] = useState(0);
  const [hidden, setHidden] = useState(false);

  const closePopup = () => {
    setOpacity(0);

    setTimeout(() => {
      localStorage.setItem("firstEnter", "no");
      setHidden(true);
    }, 500);
  };

  useEffect(() => {
    setOpacity(0.0001);
    setTimeout(() => {
      setOpacity(1);
    }, 1000);
    setTimeout(() => {
      closePopup();
    }, 6000);
    if (localStorage.getItem("firstEnter") != "yes") {
      localStorage.setItem("firstEnter", "yes");
    }
  }, []);

  return (
    <div
      className={`h-[4.5rem] md:h-16 w-[20rem] md:w-[30rem] text-sm text-center items-center justify-center absolute top-[80%] md:top-0 p-4 m-4 rounded-xl flex flex-row transition-opacity duration-500 ease bg-slate-400/20 z-50 cursor-default`}
      style={{
        display:
          localStorage.getItem("firstEnter") === "yes" ? "inherit" : "none",
        opacity: opacity,
      }}
    >
      <p>
        For the best user experience, we recommend using a desktop device
        alongside Google Chrome.
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
