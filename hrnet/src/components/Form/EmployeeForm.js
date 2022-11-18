import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./EmployeeForm.css"

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import Input from "../Input/Input";


import { states, departments } from '../../datas.js'
import Select from "../Select/Select";


import { Modal, useModal } from 'exeys-react-modal-custom'

const EmployeeForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    let [birthDate, setBirthDate] = useState("")
    let [startDate, setStartDate] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [cityAddress, setCityAddress] = useState("")
    const [stateAddress, setStateAddress] = useState("")
    const [zipAddress, setZipAddress] = useState("")
    const [department, setDepartment] = useState("")

    const dispatch = useDispatch()
    
        const { isShowing: showModal, toggle: toggleModal } = useModal();

    const createEmployee = (e) => {
        e.preventDefault()
        birthDate = birthDate.toLocaleDateString()
        startDate = startDate.toLocaleDateString()
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
        toggleModal()
    }


    return (

        <div className="EmployeeForm">
            <Modal
                 isShowing={showModal}
                 hide={toggleModal}
                text="Employee Created!"
                title="HRnet - Create Employee" />
            <form id="employeeForm" onSubmit={createEmployee}>
                <div className="EmployeeFormContainer">
                    <div className="top">
                        <div className="left">
                            <Input type="text" id="firstName" label="First Name" setter={setFirstName} />
                            <Input type="text" id="lastName" label="Last Name" setter={setLastName} />
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
                            <label htmlFor="start-date">Start Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            <Select setter={setDepartment} label="Department" id="department" data={departments} />
                        </div>

                        <div className="right">
                            <fieldset>
                                <legend>Address</legend>
                                <Input label="Street" id="streetAddress" type="text" setter={setStreetAddress} />
                                <Input label="City" id="cityAddress" type="text" setter={setCityAddress} />
                                <Select id="stateAddress" label="State" setter={setStateAddress} data={states} />
                                <Input type="number" label="Zip Code" id="zipAddress" setter={setZipAddress} />
                            </fieldset>
                        </div>
                    </div>
                    <div className="bottom">
                        <button>
                            Create Employee
                        </button>
                    </div>
                </div>
            </form >
        </div >

    )

}

export default EmployeeForm;