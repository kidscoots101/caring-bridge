import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Care from './screens/Care';
import User from './screens/User';

function App() {
  return (
    <Router>
      <link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
  rel="stylesheet"
/>
        <input
          type="text"
          placeholder="Search for inspiration..."
          className="search-bar"
        />
        <button className="search-button">Search</button>
          <Routes>
      <Route path="/" element={<Care />} />
      <Route path="/explore" element={<User />} />
    </Routes>
    </Router>

  );
}

export default App;
