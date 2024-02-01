import { useEffect } from "react";

const GradientBackground = () => {
  var tgX = 0;
  var tgY = 0;
  var curX = 0;
  var curY = 0;

  useEffect(() => {
    const interactive = document.getElementById("gr-interactive");

    function move() {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;

      if (interactive) {
        interactive.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      console.log(curX, curY);
      requestAnimationFrame(() => move());
    }

    window.addEventListener("mousemove", (event) => {
      console.log(tgX, tgY);
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className="bg-gradient z-[-10]">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradient-container">
        <div className="gr1"></div>
        <div className="gr2"></div>
        <div className="gr3"></div>
        <div className="gr4"></div>
        <div className="gr5"></div>
        <div className="gr6"></div>
        <div className="gr-interactive" id="gr-interactive"></div>
      </div>
    </div>
  );
};

export default GradientBackground;
