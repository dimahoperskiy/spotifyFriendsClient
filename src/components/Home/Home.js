import React, {useEffect} from "react";
import style from "./Home.module.css"
import Track from "../common/Track/Track";
import Preloader from "../common/Preloader";


const Home = (props) => {
    useEffect(() => {
        props.setSavedTracks()
    }, [])

    let tracks = props.tracks.map(el => <Track name={el.track.name}
                                               artists={el.track.artists}
                                               img={el.track.album.images[1].url}/>)

    return (
        <>
            {props.isTracksLoading ?
                <Preloader/> :
                <div className={style.homeWrapper}>
                    <h1>Saved tracks</h1>
                    {tracks}
                </div>
            }
        </>
    )
}

export default Home