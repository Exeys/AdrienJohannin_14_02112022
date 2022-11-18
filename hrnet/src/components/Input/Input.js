import React from "react";



const Input = ({ id, label, type, setter}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={(e) => setter(e.target.value)}></input>
        </div>
    )
}

export default Input