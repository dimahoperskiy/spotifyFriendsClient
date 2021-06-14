import React from "react";
import style from "./Artist.module.css"

const Artist = (props) => {
    let genres = ""
    props.genres.map(el => genres += el + ", ")
    genres = <p className={style.genres}>{genres.slice(0, -2)}</p>


    return (
        <div className={style.artist}>
            <div className={style.imgWrapper}>
                <img src={props.img} className={style.img} alt="album_img"/>
            </div>
            <div className={style.info}>
                <p className={style.artistName}>{props.name}</p>
                <div className={style.genres}>
                    {genres}
                </div>
            </div>
        </div>
    )
}

export default Artist