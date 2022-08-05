import { useEffect,useReducer, useState } from 'react';
import { todoReducer } from '../Hooks/todoReducer';
import { useCounter } from './useCounter';


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

   

  

    useEffect(() => {
      localStorage.setItem( 'todos' , JSON.stringify(todos) );
    
    }, [todos])
    
    
    const handleNewTodo =(newTodo)=>{
        console.log(newTodo)
        const action = {
            type: 'ADD todo',
            payload: newTodo
        };

        dispatch(action);
       
    }

    const handleDeleteTodo=(id)=>{

        dispatch({
            type: 'DELETE todo',
            payload: id
        });
        

    }

    const handleToogleTodo = (id)=>{
        dispatch({
            type: 'TOOGLE todo',
            payload: id

        });

      
    }


    
   
    

    
  
    return {
        todos,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todosCounter: todos.length,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo,

    }
}
