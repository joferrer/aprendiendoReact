import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('One Punch');


    const onInputChange = (event)=>{
        
        setInputValue(event.target.value);

    };

    const onSubmit = (event)=>{

        event.preventDefault();//Para evitar que se pierda el valor cuando se recargue.
        console.log(inputValue);

        const newCategory = inputValue.trim();//Trim elimina espacios en blanco al principio y al final.

        if(newCategory.length <=1) return;

        onNewCategory(newCategory);

        setInputValue('');

    };

  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input 
            type="text" 
            value={inputValue}    
            onChange ={onInputChange}
        />
    </form>
  )
}
