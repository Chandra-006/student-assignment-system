import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AssignmentPage from "./Pages/AssignmentPage";
import Navbar from "./Components/Navbar";
import { AssignmentProvider } from "./Context/AssignmentContext";

const App = () => {
  return (
    <AssignmentProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assignment/:id" element={<AssignmentPage />} />
        </Routes>
      </Router>
    </AssignmentProvider>
  );
};

export default App;