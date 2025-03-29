import React from "react";
import styles from './WrapperBox.module.scss'
const WrapperBox = ({children, classExtra, center})=>{ 
    return (
        <div className={[styles.wrapperBox, , center ? styles.contentCenter: '', classExtra ].join(' ')}>
            {children}
        </div>
    )
}

export default WrapperBox