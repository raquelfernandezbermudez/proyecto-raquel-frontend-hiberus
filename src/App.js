import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Users from "./components/Users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeeUser from "./components/Users/SeeUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/seeuser" element={<SeeUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
