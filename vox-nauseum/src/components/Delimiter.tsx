import "../styles/delimiter.scss";

const Delimiter = () => {
  return (
    <div className="flex items-center justify-center overflow-x-clip drop-shadow-xl mb-1">
      <div className="delimiter-front" />
      <div className="delimiter-back" />
    </div>
  );
};

export default Delimiter;
