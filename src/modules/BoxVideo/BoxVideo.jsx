import React from "react";
import style from './BoxVideo.module.scss'
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import WrapperContent from "../../components/WrapperContent/WrapperContent";

const BoxVideo = ()=>{
    return(
        <WrapperBox center={true}>
            <img className={style.bg_figureL} src={`${process.env.PUBLIC_URL}/images/figure2.png`} alt="" />
            <img className={style.bg_figureR} src={`${process.env.PUBLIC_URL}/images/figure3.png`} alt="" />
            <WrapperContent>
                <iframe 
                className={style.videoBox} 
                src="https://www.youtube.com/embed/Azb6KS38RCI?si=dv9IvTbWrBFgABmi" 
                title="krokam - community manual and motivation to engage" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </WrapperContent>
        </WrapperBox>
    )
}

export default BoxVideo