import React, { useState } from "react";
import style from './Form.module.scss'



const initData = {
    name: '',
    email: '',
    mess: ''
}

const Form = ()=>{
    const [dataForm, setDataForm] = useState(initData)

    const handleSubmit = ()=>{

    }

    const handleChange = () => {

    }

    return(
        <form className={style.formModule} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={handleChange} value={dataForm.name}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' onChange={handleChange} value={dataForm.email}/>
            <label htmlFor="mess">Message</label>
            <input type="text" name='mess' onChange={handleChange} value={dataForm.mess}/>
            <label htmlFor="robot" className={style.checkboxRobot}>
                <input type="checkbox" name="robot" />I’m not a robot
            </label> 
            <button type='submit' className={style.btnSub}>Contsct us</button>
        </form>
    )
}

export default Form