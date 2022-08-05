import { useCounter } from "../Hooks/useCounter"


export const CounterCounstomHook = () => {

    const {counter, plusCounter,subsCounter,reset} = useCounter();
  return (
    <>
    
        <h1>CounterCounstomHook</h1>
        <h2>Counter: {counter} </h2>

        <button className="btn btn-outline-primary" onClick={plusCounter}>+1</button>
        <button className="btn btn-outline-primary" onClick={reset}>Reset</button>
        <button className="btn btn-outline-primary" onClick={subsCounter}>-1</button>
    </>
  )
}
