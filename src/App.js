import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Library from "./pages/Library";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Media from "./pages/Media";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/library" element={<Library />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
