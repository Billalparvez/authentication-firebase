import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Resert from "../src/pages/Resert";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/resert" element={<Resert />} />
      </Routes>
    </Router>
  );
}

export default App;
