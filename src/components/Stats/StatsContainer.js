import React from "react";

import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withRouter} from "react-router-dom"
import Preloader from "../common/Preloader";
import {setTopThunk} from "../../redux/reducers/statsReducer";
import Stats from "./Stats";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return ({
        isLoggedIn: state.auth.isLoggedIn,
        isInitializing: state.auth.isInitializing,
        topTracksList: state.stats.topTracksList,
        topArtistsList: state.stats.topArtistsList,
        isTopLoading: state.stats.isTopLoading
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTopThunk: time_range => dispatch(setTopThunk(time_range))
    }
}

class StatsContainer extends React.Component {
    componentDidMount() {
        let time_range = this.props.match.params.time_range

        if (time_range === undefined) {
            time_range = "medium_term"
        }
        this.props.setTopThunk(time_range)
    }


    render() {
        return (
            <>
                {this.props.isInitializing ?
                    <Preloader/> :
                    this.props.isLoggedIn ?
                        <Stats tracks={this.props.topTracksList}
                               artists={this.props.topArtistsList}
                               isTopLoading={this.props.isTopLoading}
                               setTop={this.props.setTopThunk}/> :
                        <Redirect to="/login"/>
                }
            </>
        )
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(StatsContainer)

