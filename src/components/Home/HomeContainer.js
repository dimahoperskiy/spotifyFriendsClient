import React from "react";
import Home from "./Home";

import {connect} from "react-redux";
import {Redirect} from "react-router";
import Preloader from "../common/Preloader";
import {setSavedTracksThunk} from "../../redux/reducers/homeReducer";


const mapStateToProps = (state) => {
    return ({
        isLoggedIn: state.auth.isLoggedIn,
        isInitializing: state.auth.isInitializing,
        savedTracksList: state.home.savedTracksList,
        isTracksLoading: state.home.isTracksLoading,
        shouldRedirect: state.auth.shouldRedirect
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSavedTracksThunk: () => dispatch(setSavedTracksThunk())
    }
}

class HomeContainer extends React.Component {

    render() {
        return (
            <>
                {this.props.isInitializing ?
                    <Preloader/> :
                    this.props.shouldRedirect ?
                        <Redirect to="/set-username"/>:
                        this.props.isLoggedIn ?
                            <Home tracks={this.props.savedTracksList}
                                  isTracksLoading={this.props.isTracksLoading}
                                  setSavedTracks={this.props.setSavedTracksThunk}/> :
                            <Redirect to="/login"/>
                }
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

