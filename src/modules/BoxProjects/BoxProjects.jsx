import React from "react";
import style from './BoxProjects.module.scss'
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import H2 from "../../views/HeaderH2/H2";
import Project from "../../views/Project/Project";
import { projectsList } from "./ProjectsList";

const BoxProjects = ()=>{
    return (
        <WrapperBox blueBg={true} center={true}>
            <WrapperContent >
                <H2 color='white'>Our projects</H2>
                <div className={style.projectsGrid}>
                    {
                        projectsList.map((project, index)=>{
                            return(
                                <Project data={project} key={index}/>
                            )
                        })
                    }
                </div>
            </WrapperContent>
        </WrapperBox>
    )
}

export default BoxProjects