import React from "react";
import style from './BoxVideo.module.scss'
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import WrapperContent from "../../components/WrapperContent/WrapperContent";

const BoxVideo = ()=>{
    return(
        <WrapperBox center={true}>
            <WrapperContent>
                {/* <iframe 
                className={style.videoBox} 
                src="https://www.youtube.com/embed/Azb6KS38RCI?si=dv9IvTbWrBFgABmi" 
                title="krokam - community manual and motivation to engage" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe> */}
            </WrapperContent>
        </WrapperBox>
    )
}

export default BoxVideo