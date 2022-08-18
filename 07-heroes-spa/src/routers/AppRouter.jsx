import{ Navigate, Routes, Route, Router} from 'react-router-dom';


import { LoginPage } from '../auth';
import { HeroRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';



export const AppRouter = () => {
    
  return (
    <>
        <Routes>

          <Route path='/login' element = {
            <PublicRouter>
              <LoginPage/>
            </PublicRouter>
          }/>
          

          <Route path='/*' element = {
            <PrivateRouter>
              <HeroRoutes/>
            </PrivateRouter>
          } />

        </Routes>
        
        
    </>
  )
}
