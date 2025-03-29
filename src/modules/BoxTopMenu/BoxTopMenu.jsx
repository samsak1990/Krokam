import React from "react";
import { menuList } from "./MenuList";

const BoxTopMenu = ()=>{
    return (
        <nav className="navigation">
            <ul className="boxNav">
                {menuList.map(item=>{
                    `<li className="boxNav_item"><a href="" className="item_link">${item}</a></li>`
                })}
            </ul>
        </nav>
    )
}

export default BoxTopMenu