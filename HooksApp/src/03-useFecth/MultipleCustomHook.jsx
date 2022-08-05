import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch"
import { Loading } from "./Loading";
import { Quote } from "./Quote";


export const MultipleCustomHook = () => {
   
    const {counter,plusCounter} = useCounter(1);
    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    const onNextQuote = () =>{

        plusCounter();

    };

  return (
    <div>
        <h1>Multiple custom hook</h1>
        <Loading isLoading={isLoading}/>
        {isLoading ? 
            (<Loading isLoading={isLoading}/>)
            :
            (   
                <Quote author={author} quote={quote}/>
                
            )

        }
        
        <button 
            className="btn btn-outline-primary" 
            onClick={onNextQuote}
            disabled={isLoading}>
                Next quote
        </button>
        
        
        
    </div>
  )
}
