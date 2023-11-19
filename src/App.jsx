import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
//Components
import Header from "./components/header";

//Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import CharacterMovies from "./pages/CharacterMovies";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/character/movies" element={<CharacterMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
