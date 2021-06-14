import React from "react";
import style from "./FormInput.module.css"
import {useEffect} from "react";


const FormInput = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error

    useEffect(() => {
        if (meta.active) {
            props.setIsWrongLogin(false)
        }
    })

    return (
        <>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}

            {input.name === "email" && props.isWrongLogin && !meta.active &&
            <span>This username already exists</span>}
        </>
    )
}

export default FormInput