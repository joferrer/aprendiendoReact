import { useState } from 'react';
import PropTypes from 'prop-types'

export function CounterApp ({value}){

    const [[counter,nombre],setCounter] = useState([value,'Jeison']);



    const incrementar = ()=>{
        setCounter([counter + 1, nombre+' Ferrer']);
    };
    const restar = ()=>{
        setCounter([counter-1,nombre-' Ferrer']);
    };
    const reset=()=>{
        setCounter([value,'Jeison']);
    };

    return(<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <h3>{nombre}</h3>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={restar}>Decrementar</button>
        <button onClick={reset}>Reset</button>
    
    </>);
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired

};
