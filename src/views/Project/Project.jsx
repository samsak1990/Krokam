import React from "react";
import style from './Project.module.scss'

const Project = ({data})=>{
    return (
        <div className={style.boxProject}>
            <img src={`${process.env.PUBLIC_URL}/images/projects/${data.img}`} alt="" />
            <div className={style.description}>{data.text}</div>
        </div>
    )
}

export default Project