import React from "react";
import DataTable from 'react-data-table-component'
import DataTableExtensions from "react-data-table-component-extensions";
import 'react-data-table-component-extensions/dist/index.css';
import './EmployeeTable.css'

import { useSelector } from "react-redux";


const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true
    }, {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true
    }, {
        name: 'Date of Birth',
        selector: row => row.birthDate,
        sortable: true
    }, {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true
    }, {
        name: 'Street',
        selector: row => row.streetAddress,
        sortable: true
    }, {
        name: 'City',
        selector: row => row.cityAddress,
        sortable: true
    }, {
        name: 'State',
        selector: row => row.stateAddress,
        sortable: true
    }, {
        name: 'Zip Code',
        selector: row => row.zipAddress,
        sortable: true
    }, {
        name: 'Department',
        selector: row => row.department,
        sortable: true
    },
]


const EmployeeTable = () => {
    const state = useSelector((state) => state.employees)
    return (
        <DataTableExtensions
            print={false}
            export={false}
            columns={columns}
            data={state}
        >
            <DataTable
                pagination
                highlightOnHover
            />
        </DataTableExtensions>

    )
}

export default EmployeeTable