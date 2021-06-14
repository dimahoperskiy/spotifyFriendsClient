import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./Login.module.css"
import FormInputContainer from "../common/FormInputContainer";
import {requiredCreator} from "../validators";

const loginRequired = requiredCreator("Login")


const UsernameForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.inputWrapper}>
                <Field placeholder="Enter username"
                       name="username"
                       component={FormInputContainer}
                       autoComplete="off"
                       validate={loginRequired}
                       className={style.input}/>
            </div>
            <div>
                <button type="submit" className={style.usernameBtn}>Save username</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "username"})(UsernameForm)