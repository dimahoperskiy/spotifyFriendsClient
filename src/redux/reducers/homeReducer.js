import api from "../../api";


const SET_SAVED_TRACKS_LIST = "SET_SAVED_TRACKS_LIST"
const ADD_SAVED_TRACKS = "ADD_SAVED_TRACKS"
const SET_IS_TRACKS_LOADING = "SET_IS_TRACKS_LOADING"



let initialState = {
    savedTracksList: [],
    isTracksLoading: true
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAVED_TRACKS_LIST:
            return {
                ...state, savedTracksList: action.savedTracksList
            }
        case ADD_SAVED_TRACKS:
            return {
                ...state, savedTracksList: [...state.savedTracksList, action.addSavedTracks]
            }
        case SET_IS_TRACKS_LOADING:
            return {
                ...state, isTracksLoading: action.isTracksLoading
            }
        default:
            return state
    }
}

export const setSavedTracksThunk = () => {
    return (dispatch) => {
        api.getSavedTracks()
            .then(data => {
                dispatch(setSavedTracksList(data))
                dispatch(setIsTracksLoading(false))
                (data)
            })
            .catch(err => {
                dispatch(setIsTracksLoading(false))
            })
    }
}


export const setSavedTracksList = (savedTracksList) => (
    {type: SET_SAVED_TRACKS_LIST, savedTracksList}
)

export const setIsTracksLoading = (isTracksLoading) => ({type: SET_IS_TRACKS_LOADING, isTracksLoading})


export default homeReducer