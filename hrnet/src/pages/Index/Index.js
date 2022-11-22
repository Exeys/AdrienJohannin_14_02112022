import React from "react";
import EmployeeForm from "../../components/Form/EmployeeForm";
import { Link } from 'react-router-dom'
import './Index.css'

/**
 * A component page for Index
 */
const Index = () => {
    return (
        <div className="Index">
            <div className="IndexTitle">
                <h2>HRnet - Create Employee</h2>
            </div>

            <div className="IndexForm">
                <EmployeeForm />
            </div>

            <div className="IndexLink">
                <Link to="/employees">
                    View Current Employees
                </Link>
            </div>
        </div>
    )
}


export default Index;