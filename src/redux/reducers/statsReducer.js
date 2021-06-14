import api from "../../api";

const SET_TOP_TRACKS_LIST = "SET_TOP_TRACKS_LIST"
const SET_TOP_ARTISTS_LIST = "SET_TOP_ARTISTS_LIST"
const ADD_TOP_TRACKS = "ADD_TOP_TRACKS"
const SET_IS_TOP_LOADING = "SET_IS_TOP_LOADING"

let initialState = {
    topTracksList: [],
    topArtistsList: [],
    isTopLoading: true
}

const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_TRACKS_LIST:
            return {
                ...state, topTracksList: action.topTracksList
            }
        case ADD_TOP_TRACKS:
            return {
                ...state, topTracksList: [...state.topTracksList, action.addTopTracks]
            }
        case SET_TOP_ARTISTS_LIST:
            return {
                ...state, topArtistsList: action.topArtistsList
            }
        case SET_IS_TOP_LOADING:
            return {
                ...state, isTopLoading: action.isTopLoading
            }
        default:
            return state
    }
}

export const setTopThunk = (time_range) => {
    return (dispatch) => {
        dispatch(setTopTracksList([]))
        dispatch(setTopArtistsList([]))
        dispatch(setIsTopLoading(true))
        api.getTopTracks(time_range)
            .then(data => {
                dispatch(setTopTracksList(data))
                api.getTopArtists(time_range)
                    .then(data => {
                        dispatch(setTopArtistsList(data))
                        dispatch(setIsTopLoading(false))
                    })
                    .catch(err => {})
            })
            .catch(err => {})
    }
}


export const setTopTracksList = (topTracksList) => (
    {type: SET_TOP_TRACKS_LIST, topTracksList}
)

export const setTopArtistsList = (topArtistsList) => (
    {type: SET_TOP_ARTISTS_LIST, topArtistsList}
)

export const setIsTopLoading = (isTopLoading) => ({type: SET_IS_TOP_LOADING, isTopLoading})



export default statsReducer