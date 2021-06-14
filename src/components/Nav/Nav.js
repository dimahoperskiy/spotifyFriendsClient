import React from "react";
import style from "./Nav.module.css"
import label from "../common/label.png"
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div className={style.nav}>
            <NavLink to="/" className={style.imgWrapper}>
                <img src={label} className={style.img} alt="label"/>
                <h1 className={style.label}>Friends</h1>
            </NavLink>
            <div className={style.user}>
                <NavLink to="/stats" className={style.navItem} activeClassName={style.activeLink}>Stats</NavLink>
                <img src={props.profileImage} className={style.userImg} alt=""/>
                <p>{props.login}</p>
            </div>
        </div>
    )
}

export default Nav