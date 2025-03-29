import React from "react";
import style from './H2.module.scss'

const H2 = ({children, color='black'})=>{
    return (
        <h2 className={color === 'black' ? style.black : style.white}>{children}</h2>
    )
}

export default H2