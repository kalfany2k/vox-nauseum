import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isChrome, isMobile } from "react-device-detect";

interface Props {
  turbulence?: string;
  text: string;
  color?: string;
  smallSize: string;
  largeSize: string;
}

const DisplacedText = ({
  turbulence = "",
  text,
  color = "",
  smallSize,
  largeSize,
}: Props) => {
  const [seed, setSeed] = useState("2");

  // set seed to at most 69
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 69).toString());
  }, []);

  return (
    <div className="">
      <svg id="header-svg">
        <filter id="turbulent-filter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.002 0.008"
            numOctaves="2"
            seed={seed}
            stitchTiles="stitch"
            result="turbulence"
          />
          <feColorMatrix
            type="saturate"
            values="30"
            in="turbulence"
            result="colormatrix"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 150 -15"
            in="colormatrix"
            result="colormatrix1"
          />
          <feComposite
            in="SourceGraphic"
            in2="colormatrix1"
            operator="in"
            result="composite"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="colormatrix1"
            scale={turbulence != "" ? turbulence : isMobile ? "2" : "7"}
            xChannelSelector="R"
            yChannelSelector="A"
            result="displacementMap"
          />
        </filter>
      </svg>

      <div
        className={`displaced-text text-center ${smallSize} ${largeSize} mt-4 sm:mt-0`}
        style={{
          color: color != "" ? color : !isChrome ? "darkred" : "yellow",
        }}
      >
        <Link to={text === "VOX NAUSEUM" ? "/" : "/pieces/submit"}>
          <p>{text}</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplacedText;
