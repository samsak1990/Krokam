import React from "react";
import style from './WrapperContent.module.scss'

const WrapperContent = ({children}) => {
    return (
        <div className={style.wrapperContent}>
            {children}
        </div>
    )
}

export default WrapperContent