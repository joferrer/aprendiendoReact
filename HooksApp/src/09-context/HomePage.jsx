import { useContext } from "react";
import { UserContext } from "./context/userContext";


export const HomePage = () => {
  const {user, setuser} = useContext(UserContext);
  

  return (
    <>
        <h1>Hola {user?.name}</h1>
    </>
  )
}
