import { AuthProvider } from "./auth"
import { AppRouter } from "./routers/AppRouter"


export const HeroeApp = () => {
  return (
    <AuthProvider>
       <AppRouter/>
    </AuthProvider>
  )
}
