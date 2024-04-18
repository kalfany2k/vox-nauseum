import Home from "./components/Home";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Pieces from "./components/Pieces";
import PrintArchive from "./components/PrintArchive";
import Multimedia from "./components/Multimedia";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing currentPage={<Home />} />} />
        <Route path="/pieces" element={<Landing currentPage={<Pieces />} />} />
        <Route
          path="/print-archive"
          element={<Landing currentPage={<PrintArchive />} />}
        />
        <Route
          path="/multimedia"
          element={<Landing currentPage={<Multimedia />} />}
        />
      </Routes>
    </div>
  );
};

export default App;
