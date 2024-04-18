import Home from "./components/Home";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import PagePieces from "./components/PagePieces";
import PagePrintArchive from "./components/PagePrintArchive";
import PageMultimedia from "./components/PageMultimedia";
import PageSubmission from "./components/PageSubmission";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing currentPage={<Home />} />} />
        <Route
          path="/pieces"
          element={<Landing currentPage={<PagePieces />} />}
        />
        <Route
          path="/pieces/submit"
          element={<Landing currentPage={<PageSubmission />} />}
        />
        <Route
          path="/print-archive"
          element={<Landing currentPage={<PagePrintArchive />} />}
        />
        <Route
          path="/multimedia"
          element={<Landing currentPage={<PageMultimedia />} />}
        />
      </Routes>
    </div>
  );
};

export default App;
