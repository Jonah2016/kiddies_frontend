import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Library from "./pages/library/Library";
import Services from "./pages/Services";
import Events from "./pages/events/Events";
import Media from "./pages/Media";
import BookDetails from "./pages/library/BookDetails";
import EventDetails from "./pages/events/EventDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<BookDetails />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
