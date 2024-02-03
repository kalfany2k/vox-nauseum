import { Link } from "react-router-dom";
import logo from "/home/kalfany/V_O_X/vox-nausseum/src/assets/pictures/VoxLogo.png";
import "../styles/navigation.scss";

const Header = () => {
  return (
    <div className="h-24 w-screen font-Inter-xli opacity-80 flex flex-row items-center justify-left lg:justify-between overflow-hidden">
      <Link
        to={"/"}
        className="w-[80%] md:w-[40%] xl:w-[20%] h-full mt-[-12px]"
      >
        <img
          src={logo}
          className="justify-self-center w-full h-full object-cover cursor-pointer mt-3"
        />
      </Link>
      <div className="lg:w-[45%] lg:h-[30%] hidden xl:flex flex-row text-center text-xl font-Inter-bold text-shadow-lg items-center whitespace-nowrap">
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
      <div className="w-[20%] hidden xl:flex justify-end justify-self-end">
        <div className="text-center text-lg w-[40%] p-4 mr-10 rounded-[32px] text-white hover:text-black font-Inter-bold bg-black hover:bg-white ring-white hover:ring-black ring-1 cursor-pointer transition-colors duration-300 ease-in">
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default Header;
