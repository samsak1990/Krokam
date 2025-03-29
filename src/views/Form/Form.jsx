import React, { startTransition, useState } from "react";
import style from './Form.module.scss'



const initData = {
    name: '',
    email: '',
    mess: '',
    isChecked: false,
}

const Form = ()=>{
    const [dataForm, setDataForm] = useState(initData)

    const isFormValid = dataForm.name && dataForm.email && dataForm.mess && dataForm.isChecked;

    const handleSubmit = (e)=>{
        e.preventDefault()
        setDataForm(initData)
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setDataForm((prevData)=>({
            ...prevData, 
            [name]: type === 'checkbox' ? checked : value}))

    }

    return(
        <form className={style.formModule} onSubmit={handleSubmit}>
            <div className={style.row}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' onChange={handleChange} value={dataForm.name}/>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' onChange={handleChange} value={dataForm.email}/>
                </div>
            </div>
            <div className={style.row}>
                <div>
                    <label htmlFor="mess">Message</label>
                    <input type="text" name='mess' onChange={handleChange} value={dataForm.mess}/>
                </div>
            </div>
            <div className={style.customCheckbox}>
                <input type="checkbox" name="isChecked" id='robot'
                    onChange={handleChange} checked={dataForm.isChecked}/>
                <label htmlFor="robot" className={style.check}>I’m not a robot</label> 
            </div>
            <button type='submit' className={style.btnSub} 
            disabled={!isFormValid}>Contsct us</button>
        </form>
    )
}

export default Form