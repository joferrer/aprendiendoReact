

export const todoReducer = (initialState = [], action) => {
  
    switch(action.type){
        case 'ADD todo':
            
            return [...initialState, action.payload];

        case 'DELETE todo':
            return initialState.filter(todo => todo.id !== action.payload);

            
        case 'TOOGLE todo':
            return initialState.map(
                todo =>{
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                }
            ); 

        default:
            return initialState;
    }

}
