import React from "react";
import AuthView from "./features/auth/AuthView";
import { Route, Routes } from "react-router-dom";
import Dash from "./components/Dash";
import UserView from "./features/user/userView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthView />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="/user" element={<UserView />} />
    </Routes>
  );
};

export default App;
