import React from "react";
import style from './BoxFooter.module.scss'
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import {menuList} from '../BoxTopMenu/MenuList'

const BoxFooter = ()=>{
    return(
        <WrapperBox center={true}>
        <WrapperContent>
            <img src={`${process.env.PUBLIC_URL}/images/intro/logo.png`} className={style.logoMini} />
            <div className={style.footerBoxes}>
                <div className={style.footerBoxes_left}>
                    <a href="info@krokam.com" className={style.mailLink}>info@krokam.com</a>
                    <a href="https://www.youtube.com/@krokammedia7852" title='YouTube channel'className={style.linkYouTube}></a>
                </div>
                <div className={style.footerBoxes_right}>
                    <ul>
                        {
                            menuList.map((item, index)=>{
                                return(
                                    <li key={index}><a href="#">{item}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </WrapperContent>
    </WrapperBox>
    )
}

export default BoxFooter