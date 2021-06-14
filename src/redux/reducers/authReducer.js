import api from "../../api";


const SET_CURRENT_USER = "SET_CURRENT_USER"
const SET_INITIALIZING = "SET_INITIALIZING"
const SET_SHOULD_REDIRECT = "SET_SHOULD_REDIRECT"
const SET_IS_WRONG_LOGIN = "SET_IS_WRONG_LOGIN"


let initialState = {
    id: -1,
    login: "",
    country: "",
    email: "",
    profileImage: "",
    username: "",
    isLoggedIn: false,
    isInitializing: true,
    shouldRedirect: false,
    isWrongLogin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state, id: action.id, login: action.login, country: action.country, email: action.email,
                profileImage: action.profileImage, username: action.username, isLoggedIn: true
            }
        case SET_INITIALIZING:
            return {
                ...state, isInitializing: action.isInitializing
            }
        case SET_SHOULD_REDIRECT:
            return {
                ...state, shouldRedirect: action.shouldRedirect
            }
        case SET_IS_WRONG_LOGIN:
            return {
                ...state, isWrongLogin: action.isWrongLogin
            }
        default:
            return state
    }
}

export const initThunk = () => {
    return (dispatch) => {
        api.getCurrentUser()
            .then(data => {
                if (data === "redirect") {
                    dispatch(setShouldRedirect(true))
                    dispatch(setInitializing(false))
                } else {
                    dispatch(setCurrentUser(data.id, data.displayName, data.country, data.email, data.image, data.username))
                    console.log(data)
                    dispatch(setInitializing(false))
                }
            })
            .catch(err => {
                dispatch(setInitializing(false))
            })
    }
}


export const setCurrentUser = (id, login, country, email, profileImage, username) => (
    {type: SET_CURRENT_USER, id, login, country, email, profileImage, username}
)

export const setInitializing = (isInitializing) => ({type: SET_INITIALIZING, isInitializing})
export const setShouldRedirect = (shouldRedirect) => ({type: SET_SHOULD_REDIRECT, shouldRedirect})
export const setIsWrongLogin = (isWrongLogin) => ({type: SET_IS_WRONG_LOGIN, isWrongLogin})


export default authReducer