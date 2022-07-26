//import './css/scale.css'
import PropTypes from 'prop-types';

const items = () => ['J', 'E','I','S','O','N'];

const itemsStylee = () =>{
    const lista = items().map((item)=>item+" P ");
    
    return lista;
};

export function Componente ({nombre}){
    
    return (
        
        <>
            <h1>{items().map((item,index)=><div key={"l"+index} className="scale" >{item+ " "}</div>)}</h1>
            <h2>{nombre}</h2>
             
        </>
    );
}

Componente.propTypes={
    nombre : PropTypes.string.isRequired
};

Componente.defaultProps = {
    nombre : "Desconocido"
}
