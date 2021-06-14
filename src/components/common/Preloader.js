import React from "react";
import style from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.bounce1}/>
            <div className={style.bounce2}/>
            <div className={style.bounce3}/>
        </div>
    )
}

export default Preloader