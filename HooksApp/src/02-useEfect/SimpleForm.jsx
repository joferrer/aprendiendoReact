import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    
    const [formValues, setformValues] = useState({
        userName: '',
        email: ''
    });

    const {userName, email} = formValues;

    const oninputChange = ({target})=>{
        
        const {name,value} = target;
        setformValues(
            {
                ...formValues,
                [name]:value
            }
        );

    }
    useEffect(() => {
        console.log('NAME')
      
        
      }, [userName  ])
    useEffect(() => {
      console.log('EMAIL')
    
      
    }, [email])
    


  return (
    <div>
        <h1>Simple Form</h1>
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
        {
            (userName === 'Rocoki') && <Message/>
        }

        <input 
            type="email"   
            className="form-control mt-1 is-invalid"
            placeholder="Email"
            name="email" 
            value={email}
            onChange={oninputChange}
            required 
        />

        

    </div>
  )
}
