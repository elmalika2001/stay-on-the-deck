import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Navbar from "./components/Navbar";
import FilmGrain from "./components/FilmGrain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <FilmGrain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<Log />} />
          <Route path="/log/:folder/:slug" element={<Log />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
