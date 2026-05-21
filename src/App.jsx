
import Home from "./pages/Home.jsx";
import Favourite from "./pages/Favourite.jsx";
import Navbar from "./components/NavBar.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import './css/App.css'
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
