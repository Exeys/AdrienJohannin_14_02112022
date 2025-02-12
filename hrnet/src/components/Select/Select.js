import React from "react";

/**
 * A function that render Select with props parameter including label if necessary
 * The data is mapped to create <option>
 */ 
const Select = ({ id,label, setter, data }) => {
    return (

        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={(e) => setter(e.target.value)} >
                {data.map(d => {
                    return (<option key={d.name} value={d.name}>{d.name}</option>);
                })}
            </select>
        </div>

    )
}

export default Select;