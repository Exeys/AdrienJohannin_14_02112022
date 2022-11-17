import React from "react";
import Index from "./pages/Index/Index";
import Employees from "./pages/EmployeeList/Employees";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
        <Route path="/employees" element={<Employees />}>
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
