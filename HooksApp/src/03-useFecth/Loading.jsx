import { useEffect, useState } from "react"


export const Loading = ({isLoading}) => {

    const [state, setstate] = useState({
      
        className: 'alert alert-info text-center'
    });
    const {className}= state;

    const changeClassName = ()=>{
        if(!isLoading){
            setstate({
                
                className: 'd-none'
            });
        }
        else{
            setstate({
                
                className: 'alert alert-info text-center'
            });
        }
        
    }

    useEffect(() => {
        console.log(isLoading)
        changeClassName();
      
    }, [isLoading])
    

    return (
        <div className={className}>Loading...</div>
    )
}
