import React from "react";
import style from './BoxTopMenu.module.scss'
import { menuList } from "./MenuList";

const BoxTopMenu = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.listNav}>
                {menuList.map((item, index)=>{
                    return (
                        <li className={style.listNav_item} key={index}>
                            <a href="#" className={style.item_link}>{item}</a>
                        </li>)
                })}
            </ul>
            <span className={style.language} title="Изменить язык страницы">
            </span>
        </nav>
    )
}

export default BoxTopMenu