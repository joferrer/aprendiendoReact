import { useContext } from "react"
import { UserContext } from "./context/userContext"


export const LoginPage = () => {

  const {user, setuser} = useContext(UserContext);
  return (
    <div>
      
      <pre>
        {JSON.stringify(user, null,3)}
      </pre>

      <button 
        className="btn btn-primary"
        onClick={()=>setuser({name: 'Jeison Ferrer', code: 1152004})}>
          Set user</button>

    </div>
  )
}
