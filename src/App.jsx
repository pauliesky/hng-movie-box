import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movie";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
