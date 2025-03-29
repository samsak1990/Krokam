import React from "react";
import style from './BoxIntroduction.module.scss'
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import BoxTopMenu from "../BoxTopMenu/BoxTopMenu";

const BoxIntroduction = ()=>{
    return (
        <>
            <WrapperBox classExtra={style.backgroudLayout}>
                <WrapperContent>
                    <BoxTopMenu></BoxTopMenu>
                    <div className={style.box_logo}></div>     
                    <div className={style.box_heading}>
                        <h1>Personal audio guides<br />
                        and navigators for localities<br /> and surroundings</h1>    
                    </div>               
                </WrapperContent>
            </WrapperBox>
        </>
    )
}

export default BoxIntroduction