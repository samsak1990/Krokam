import React from "react";
import styles from './WrapperBox.module.scss'
const WrapperBox = ({children, classExtra,  blueBg, center})=>{ 
    return (
        <div className={[styles.wrapperBox, classExtra, blueBg ? styles.background_blue: '', center ? styles.contentCenter: ''  ].join(' ')}>
            {children}
        </div>
    )
}

export default WrapperBox