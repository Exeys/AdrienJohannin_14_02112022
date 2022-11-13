import React from "react";
import Index from "./views/Index/Index";
import Employees from "./views/EmployeeList/Employees";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
