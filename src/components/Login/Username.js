import React from "react";
import style from "./Login.module.css"
import UsernameForm from "./UsernameForm";

const Username = (props) => {


    return (
        <div className={style.loginWrapper}>
            <div className={style.loginInnerUsr}>
                <h1 className={style.firstLabel}>It's your first time on Spotify Friends</h1>
                <div className={style.bigWrapper}>
                    <p className={style.createLabel}>Create a username:</p>
                    <UsernameForm onSubmit={props.onClick}/>
                </div>
            </div>
        </div>
    )
}

export default Username