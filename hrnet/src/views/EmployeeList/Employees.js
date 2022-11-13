import React from "react";
import EmployeeTable from "../../components/Table/EmployeeTable";
import { Link } from "react-router-dom";
import './Employees.css'

const Employees = () => {
    return (
        <div className="Employees">
            <div className="EmployeesTitle">
                <h2>Current Employees</h2>
            </div>
            <EmployeeTable />
            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default Employees;