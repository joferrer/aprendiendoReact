import { CounterApp } from "./CounterApp";
import { Componente } from "./tarea-componente";
export function App(){
    return (
        <div>
            <h1>Hola mundo!!! </h1>
            <Componente  />
            <CounterApp value={0}/>
            </div>
    );
}