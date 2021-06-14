import React from "react";
import style from "./Stats.module.css"
import Track from "../common/Track/Track";
import Preloader from "../common/Preloader";
import Artist from "../common/Artist/Artist";
import {NavLink} from "react-router-dom";


const Stats = (props) => {
    let tracks = props.tracks.map(el => (
        <li className={style.li}>
            <Track name={el.name}
                   artists={el.artists}
                   img={el.album.images[1].url}/>
        </li>
    ))

    let artists = props.artists.map(el => (
        <li className={style.li}>
            <Artist name={el.name}
                    genres={el.genres}
                    img={el.images[1].url}/>
        </li>
    ))

    let setTop = (time_range) => () => props.setTop(time_range)

    return (
        <>
            {props.isTopLoading ?
                <>
                    <Preloader/>
                    <div className={style.homeWrapper}>
                        <div className={style.timeWrapper}>
                            <NavLink onClick={setTop("short_term")}
                                     to="/stats/short_term"
                                     className={style.timeLink}
                                     activeClassName={style.activeLink}>
                                1 month
                            </NavLink>
                            <NavLink onClick={setTop("medium_term")}
                                     exact to="/stats"
                                     className={style.timeLink}
                                     activeClassName={style.activeLink}>
                                6 month
                            </NavLink>
                            <NavLink onClick={setTop("long_term")}
                                     to="/stats/long_term"
                                     className={style.timeLink}
                                     activeClassName={style.activeLink}>
                                Overall
                            </NavLink>
                        </div>
                    </div>
                </>
                 :
                <div className={style.homeWrapper}>
                    <div className={style.timeWrapper}>
                        <NavLink onClick={setTop("short_term")}
                                 to="/stats/short_term"
                                 className={style.timeLink}
                                 activeClassName={style.activeLink}>
                            1 month
                        </NavLink>
                        <NavLink onClick={setTop("medium_term")}
                                 exact to="/stats"
                                 className={style.timeLink}
                                 activeClassName={style.activeLink}>
                            6 month
                        </NavLink>
                        <NavLink onClick={setTop("long_term")}
                                 to="/stats/long_term"
                                 className={style.timeLink}
                                 activeClassName={style.activeLink}>
                            Overall
                        </NavLink>
                    </div>
                    <div className={style.statsWrapper}>
                        <div className={style.tracksWrapper}>
                            <h1>Top tracks</h1>
                            <ol>
                                {tracks}
                            </ol>
                        </div>
                        <div className={style.artistsWrapper}>
                            <h1>Top artists</h1>
                            <ol>
                                {artists}
                            </ol>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Stats