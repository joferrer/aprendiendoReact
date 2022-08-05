import { useEffect, useState } from "react"
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";


export const FormWithCounstomHook = () => {

    
    const {formValues, oninputChange, onResetForm} = useForm({
        userName:'',
        email:'',
        password: ''
    });
    
        const {userName,email,password} = formValues;

        


  return (
    <div>
        <h1>Form with costome hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="UserName" 
            name="userName" 
            value={userName}
            onChange={oninputChange}
            required
        />
       

        <input 
            type="email"   
            className="form-control mt-1 is-invalid"
            placeholder="Email"
            name="email" 
            value={email}
            onChange={oninputChange}
            required 
        />

        <input 
            type="password"   
            className="form-control mt-1 is-invalid"
            placeholder="Pasword"
            name="password" 
            value={password}
            onChange={oninputChange}
            required 
        />      

        <button onClick={onResetForm} className="btn btn-outline-primary mt-1">Reset</button>

    </div>
  )
}
