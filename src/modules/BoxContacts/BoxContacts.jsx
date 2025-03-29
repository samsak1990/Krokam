import React from "react";
import style from './BoxContacts.module.scss'
import WrapperBox from "../../components/WrapperBox/WrapperBox";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import H2 from "../../views/HeaderH2/H2";
import Form from "../../views/Form/Form";

const BoxContacts = ()=>{
    return (
        <WrapperBox center={true}>
            <WrapperContent >
                <H2>Our projects</H2>
                <p className={style.description}>Whether you have a question about collaboration or usage, drop us a message via form below.</p>
                <Form></Form>
            </WrapperContent>
        </WrapperBox>
    )
}

export default BoxContacts