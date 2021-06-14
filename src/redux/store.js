import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";
import statsReducer from "./reducers/statsReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    auth: authReducer,
    home: homeReducer,
    stats: statsReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store