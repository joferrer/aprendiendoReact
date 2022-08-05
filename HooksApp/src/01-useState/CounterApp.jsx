import { useState } from "react"

export const CounterApp = () => {


    const [counter, setcounter] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0
    });

    const {counter1,counter2,counter3} = counter;

    const addCounter = ()=>{
        setcounter({
            counter1: counter1+1,
            counter2: counter2 + 2,
            counter3: counter3 +3
        });

    }

    const plusOneCounter = ()=>{
        setcounter({
            ...counter,
            counter1: counter1+1,
            
        });
    };

    const plusTwoCounter = ()=>{
        setcounter({
            ...counter,
            counter2: counter2+2
        });
    };
    const plusThreeCounter = ()=>{
        setcounter({
            ...counter,
            counter3: counter3+3
            
        });
    };

  return (
    <>
        <h2>CounterApp</h2>
        <hr />

        <h3>Counter 1: {counter1}</h3>
        <h3>Counter 2: {counter2}</h3>
        <h3>Counter 3: {counter3}</h3>

        <button className="btn btn-outline-primary" onClick={addCounter}>+</button>
        <button className="btn btn-outline-primary" onClick={plusOneCounter}>+1</button>
        <button className="btn btn-outline-primary" onClick={plusTwoCounter}>+2</button>
        <button className="btn btn-outline-primary" onClick={plusThreeCounter}>+3</button>
    </>
  )
}
