import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Care from "./screens/Care";
import MentalHealth from "./screens/User";
import logo from "../src/assets/caring-bridge-icon.jpeg";
import Seemore from "./screens/Seemore";

function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
            <Routes>
        <Route path="/" element={<Care />} />
        <Route path="/explore" element={<Seemore />} />

      </Routes>
      <footer className="footer">
        <div className="footer-content">
          <p>
            Website created with <span className="heart">❤</span> by the
            CaringBridge team.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
