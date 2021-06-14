import React from "react";
import api from "../../api";
import style from "./Login.module.css"

const Login = (props) => {
    let onClick = () => {
        api.login().then(data => {
            window.location.replace(data)
        })
    }

    return (
        <div className={style.loginWrapper}>
            <div className={style.loginInner}>
                <h1 className={style.firstLabel}>Welcome to Spotify Friends!</h1>
                <button onClick={onClick} className={style.loginBtn}>Log In with Spotify</button>
            </div>
        </div>
    )
}

export default Login