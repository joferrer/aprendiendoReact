import { useState } from "react"

export const useCounter = ( newValue = 10 ) => {
  
    const [counter, setcounter] = useState(newValue);

    const plusCounter = ()=>{
        setcounter(counter +1 );
    }
    const subsCounter = () =>{
        if(counter>= 1 )
            setcounter(counter -1);
    }
  
    const reset = ()=>{
        setcounter(newValue);
    }
  
    return {
        counter,
        plusCounter,
        subsCounter,
        reset

  }
}
