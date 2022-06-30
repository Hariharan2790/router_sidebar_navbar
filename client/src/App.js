import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />

        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
