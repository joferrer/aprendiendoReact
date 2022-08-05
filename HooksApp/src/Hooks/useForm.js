import {useState} from 'react'

export const useForm = (initialForm ={}) => {
    const [formValues, setformValues] = useState(initialForm);

    //const {userName, email} = formValues;

    const oninputChange = ({target})=>{
        
        const {name,value} = target;
        setformValues(
            {
                ...formValues,
                [name]:value
            }
        );

    }

    const onResetForm = ()=>{
        setformValues(initialForm);
    }

    return {    
        formValues,
        oninputChange,
        onResetForm

    }
}
