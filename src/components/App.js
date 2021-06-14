import './App.css';
import Login from "./Login/Login";
import {Route, Switch} from "react-router";
import HomeContainer from "./Home/HomeContainer";
import Nav from "./Nav/Nav";
import StatsContainer from "./Stats/StatsContainer";
import UsernameContainer from "./Login/UsernameContainer";

function App(props) {
    return (
        <div className="App">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/set-username" component={UsernameContainer}/>
                <Route path="/home" render={() =>
                        <>
                            <Nav login={props.username} profileImage={props.profileImage}/>
                            <HomeContainer/>
                        </>
                    }/>
                <Route exact path="/stats" render={() =>
                    <>
                        <Nav login={props.username} profileImage={props.profileImage}/>
                        <StatsContainer/>
                    </>
                }/>
                <Route path="/stats/:time_range" render={() =>
                    <>
                        <Nav login={props.username} profileImage={props.profileImage}/>
                        <StatsContainer/>
                    </>
                }/>
                <Route path="/" exact render={() =>
                    <>
                        <Nav login={props.username} profileImage={props.profileImage}/>
                        <HomeContainer/>
                    </>
                }/>
            </Switch>
        </div>
    );
}


export default App;
