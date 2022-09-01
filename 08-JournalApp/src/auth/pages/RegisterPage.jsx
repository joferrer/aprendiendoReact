import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';


const formValidations = {

  email:       [(value)=> value.includes('@'), 'El correo debe tener una @'],
  password:    [(value)=> value.length >=6 ,   'La contraseña debe tener más de 6 caracteres'],
  displayName: [(value)=> value.length >=1 ,   'El nombre es obligatorio'] 
}

export const RegisterPage = () => {

  const [formSubmitted, setformSubmitted] = useState(false)

  const {displayName , email , password , onInputChange, formState,
          isFormValid,displayNameValid, emailValid, passwordValid} = useForm({
    email: '',
    password: '',
    displayName: ''
  }, formValidations );

  
  const onSubmit = (event)=>{
    event.preventDefault();
    setformSubmitted(true);

    if(!isFormValid) return;

    
    console.log(formState);
  }

  return (
    <AuthLayout title='Registar'>

      <form onSubmit={ onSubmit }>
      <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre"
            type="text"
            placeholder="Tu Nombre"
            fullWidth 
            name= 'displayName'
            value= { displayName }
            onChange= { onInputChange }
            error= { !!displayNameValid && formSubmitted}
            helperText = {displayNameValid }

            />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth 
            name='email'
            value={ email }
            onChange= { onInputChange }
            error= { !!emailValid && formSubmitted}
            helperText = {emailValid }
            />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="contraseña"
            fullWidth 
            name='password'
            value={ password }
            onChange= { onInputChange }
            error= { !!passwordValid && formSubmitted}
            helperText = {passwordValid}
            />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} >
            <Button 
            variant='contained' 
            fullWidth
            type='submit'>
              Crear Cuenta</Button>
          </Grid>

         

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>

      </form>

    </AuthLayout>



  )
}
