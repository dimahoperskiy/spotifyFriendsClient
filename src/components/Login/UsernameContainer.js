import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCurrentUser, setShouldRedirect, setIsWrongLogin} from "../../redux/reducers/authReducer";
import Username from "./Username";
import {useHistory} from "react-router-dom";
import api from "../../api";


const mapStateToProps = (state) => {
    return ({
        shouldRedirect: state.auth.shouldRedirect
    })
}

let mapDispatchToProps = {
    setShouldRedirect,
    setCurrentUser,
    setIsWrongLogin
}

const UsernameContainer = (props) => {
    useEffect(() => {
        props.setShouldRedirect(false)
    })

    let history = useHistory()

    let onClick = (f) => {
        console.log(f.username)
        api.saveUser(f.username)
            .then((data) => {
                props.setCurrentUser(data.id, data.displayName, data.country, data.email, data.image, data.username)
                history.push("home")
            })
            .catch(err => {
                props.setIsWrongLogin(true)
            })

    }

    return (
        <Username onClick={onClick}/>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(UsernameContainer)

