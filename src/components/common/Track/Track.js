import React from "react";
import style from "./Track.module.css"

const Track = (props) => {
    let artists = ""
    props.artists.map(el => artists += el.name + ", ")
    artists = <p className={style.artists}>{artists.slice(0, -2)}</p>


    return (
        <div className={style.track}>
            <div className={style.imgWrapper}>
                <img src={props.img} className={style.img} alt="album_img"/>
            </div>
            <div className={style.info}>
                <p className={style.songName}>{props.name}</p>
                <div className={style.artists}>
                    {artists}
                </div>
            </div>
        </div>
    )
}

export default Track