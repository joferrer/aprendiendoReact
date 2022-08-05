import { useCounter } from "../Hooks/useCounter"

export const Memorize = () => {
  
    const {counter,plusCounter}=useCounter();

    return (
    <div>
        <h1>Counter: <small>{counter}</small></h1>

        <hr />


        <button
            className="btn btn-outline-primary"
            onClick={plusCounter}
        >
                +1
        </button>

    </div>
  )
}
