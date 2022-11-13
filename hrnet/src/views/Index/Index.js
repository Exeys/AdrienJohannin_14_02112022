import React from "react";
import EmployeeForm from "../../components/Form/EmployeeForm";
import { Link } from 'react-router-dom'
import './Index.css'
const Index = () => {
    return (
        <div className="Index">
            <div className="IndexTitle">
                <h1>HRnet</h1>
            </div>
            <Link to="/employees">
                View Current Employees
            </Link>

            <EmployeeForm />
        </div>
    )
}


export default Index;