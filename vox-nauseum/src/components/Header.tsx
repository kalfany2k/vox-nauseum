import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import DisplacedText from "./DisplacedText";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[50%] mt-3 hidden xl:flex flex-row text-center text-xl font-Inter-md text-shadow-lg items-center whitespace-nowrap">
        <div className="nav-buttons-container">
          <Link to="/">
            <div className="nav-buttons-text">Home</div>
          </Link>
        </div>
        <div className="nav-buttons-container">
          <Link to="/pieces">
            <div className="nav-buttons-text">Pieces</div>
          </Link>
        </div>
        <div className="nav-buttons-container">
          <Link to="/print-archive">
            <div className="nav-buttons-text">Print archive</div>
          </Link>
        </div>
        <div className="nav-buttons-container">
          <Link to="/multimedia">
            <div className="nav-buttons-text">Multimedia</div>
          </Link>
        </div>
      </div>
      <DisplacedText />
    </div>
  );
};

export default Header;
