import React, { useEffect, useState } from "react";
import Intro from "./pages/Intro";
import Login from "./pages/login";
import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import WhoIsWatching from "./pages/WhoIsWatching";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
  const [user, setUser] = useState();

  
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) setUser(data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={user ? <Home /> : <Login />} />
        <Route path="/results" element={user ? <SearchResults /> : <Login />} />
        <Route
          path="/whoiswatching"
          element={user ? <WhoIsWatching /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
