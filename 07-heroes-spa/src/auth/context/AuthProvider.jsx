import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const init  =()=>{
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged : !!user,
        user  : user,
    }
}

export const AuthProvider = ({children}) => {


    const [ authState , dispatch ]=useReducer(authReducer,{}, init);

    
    /**
     * Función login. 
     * 
     * 1. Crear un objeto con los datos del usuario.
     * 2. Crear la acción que se le manda al reducer.
     * 3. Guardar el usario en el localStorage.
     * 4. Usar el dispatch para usar el reducer. 
     * 
     * @param {string} name 
     */
    const login = (name= '')=>{
        //1
        const user = {
            id  : 'ABC',
            name: name,
        }
        // 2
        const action = {
            type: types.login,
            payload: user
        };
        //3
        localStorage.setItem('user', JSON.stringify(user));
        //4
        dispatch(action);
    };


    const logout = () =>{
        //localStorage.clear();
        localStorage.removeItem('user');
        const action = {type: types.logout ,};
        dispatch(action);

    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
