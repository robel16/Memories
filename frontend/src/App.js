import React, { StrictMode } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { AuthContextProvider } from "./Context/AuthContext";
const App = () => {
  return (
    <StrictMode>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
    </StrictMode>
    
      
   
  );
};

export default App;
