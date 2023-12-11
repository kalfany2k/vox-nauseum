import {
  DragEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

interface Props {
  frames: string;
}

const Slider = ({ frames }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [position, setPosition] = useState(0);
  const [updatedPosition, setUpdatedPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [imgURL, setImgURL] = useState(`../src/assets/${frames}/DC-1.png`);
  const imageCount = parseInt(frames);

  const threshold = 10;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      setPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    if (Math.abs(position - updatedPosition) > threshold) {
      setUpdatedPosition(position);
    }
  }, [position, updatedPosition]);

  useEffect(() => {
    const movement = position - updatedPosition;
    if (Math.abs(movement) > 5) {
      setCurrentImageIndex((prevIndex) =>
        movement > 0
          ? (prevIndex % imageCount) + 1
          : ((prevIndex - 2 + imageCount) % imageCount) + 1
      );
    }
  }, [position, updatedPosition, imageCount]);

  useEffect(() => {
    const url = `../src/assets/${frames}/DC-${currentImageIndex}.png`;
    setImgURL(url);
  }, [frames, currentImageIndex]);

  return (
    <div
      className="w-[800px] h-[600px]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDragStart={handleDragStart}
    >
      <div>
        <img src={imgURL} id="ship-img" alt={`Image ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default Slider;
