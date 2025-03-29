import React from "react";
import styles from './WrapperBox.module.scss'
const WrapperBox = ({children, classExtra})=>{ 
    return (
        <div className={[styles.wrapperBox, classExtra].join(' ')}>
            {children}
        </div>
    )
}

export default WrapperBox