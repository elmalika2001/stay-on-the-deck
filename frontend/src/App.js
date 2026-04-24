import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Story from "./pages/Story";
import Navbar from "./components/Navbar";
import FilmGrain from "./components/FilmGrain";
import { LangProvider } from "./contexts/LangContext";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <BrowserRouter>
          <Navbar />
          <FilmGrain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/log" element={<Log />} />
            <Route path="/log/:folder/:slug" element={<Log />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </div>
  );
}

export default App;
