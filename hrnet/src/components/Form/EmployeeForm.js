import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmployeeForm.css"



const EmployeeForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [cityAddress, setCityAddress] = useState("")
    const [stateAddress, setStateAddress] = useState("")
    const [zipAddress, setZipAddress] = useState("")
    const [department, setDepartment] = useState("")

    const dispatch = useDispatch()
    const state = useSelector((state) => state.employees)

    const createEmployee = (e) => {
        e.preventDefault()
        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            startDate: startDate,
            streetAddress: streetAddress,
            cityAddress: cityAddress,
            stateAddress: stateAddress,
            zipAddress: zipAddress,
            department: department
        }
        dispatch({ type: "addEmployee", payload: newEmployee })

        console.log(state)
    }

    return (
        <div className="EmployeeForm">
            <h2>Create Employee</h2>
            <form onSubmit={createEmployee} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" onChange={(e) => setBirthDate(e.target.value)} />
                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" onChange={(e) => setStartDate(e.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={(e) => setStreetAddress(e.target.value)} />
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(e) => setCityAddress(e.target.value)} />
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" onChange={(e) => setStateAddress(e.target.value)}></select>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={(e) => setZipAddress(e.target.value)} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <button>Save</button>
            </form>

        </div>
    )
}

export default EmployeeForm;