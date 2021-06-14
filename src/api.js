import axios from "axios"

const apiObj = axios.create({
    baseURL: "http://localhost:8080/api/",
    withCredentials: true
})

const api = {
    login () {
        return apiObj.get("login")
            .then(res => res.data)
    },
    getCurrentUser () {
        return apiObj.get("me")
            .then(res => res.data)
    },
    getSavedTracks () {
        return apiObj.get("get-saved-tracks")
            .then(res => res.data)
    },
    getTopTracks (time_range) {
        return apiObj.get("get-top-tracks?time_range=" + time_range)
            .then(res => res.data)
    },
    getTopArtists (time_range) {
        return apiObj.get("get-top-artists?time_range=" + time_range)
            .then(res => res.data)
    },
    saveUser (username) {
        return apiObj.post("save-user", username)
            .then(res => res.data)
    }
}

export default api
