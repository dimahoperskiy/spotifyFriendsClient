import React from "react";
import App from "./App";
import {initThunk} from "../redux/reducers/authReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return ({
        username: state.auth.username,
        profileImage: state.auth.profileImage
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        initThunk: dispatch(initThunk())
    }
}


class AppContainer extends React.Component {
    componentDidMount() {
        initThunk()
    }

    render() {
        return (
            <>
                <App username={this.props.username} profileImage={this.props.profileImage}/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

