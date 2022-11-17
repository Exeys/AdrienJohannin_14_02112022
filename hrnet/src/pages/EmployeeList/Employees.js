import React from "react";
import EmployeeTable from "../../components/Table/EmployeeTable";
import { Link } from "react-router-dom";
import './Employees.css'

const Employees = () => {

    return (
        <div className="Employees">
            <div className="EmployeesTitle">
                <h2>HRnet - Current Employees</h2>
            </div>
            <div className="EmployeesTable">
                <EmployeeTable />
            </div>
            <div className="EmployeesLink">
                <Link to="/">
                    Home
                </Link>
            </div>

        </div>
    )
}

export default Employees;