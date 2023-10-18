import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import LoginPage from "./App";
import Home from "./Home";

const AppRouter = () => {
  const [apiFetched, setApiFetched] = useState(false);

  const handleApiFetched = () => {
    setApiFetched(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage onApiFetched={handleApiFetched} />}
        />
        <Route
          path="/home"
          element={apiFetched ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
