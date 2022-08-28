import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'
import { PasswordInput } from '../../components/inputs'

const Register = () => {
  return (
    <main className=" pb-10 bg-white max-w-xl  shadow-lg rounded-lg  p-10  mt-14 text-center mx-auto">
    <h1 className="uppercase font-bold text-4xl text-primary mb-5">
      sign up
    </h1>
  
    <div>
        <form className="w-[500px] mx-auto space-y-5">
          <Avatar  
          sx={{ width: 100, height: 100, marginX:'auto' }}
          />
        <TextField fullWidth label="first name" type='text' />
        <TextField fullWidth label="last name" type='text' />
        <TextField fullWidth label="email" type='email' />
        <TextField fullWidth label="phone number" type='number' />
      <PasswordInput label="password"/>
      <PasswordInput label="confirm password"/>
        <Button fullWidth variant="contained" size="large">
         register 
        </Button>
      </form>
    </div>
  </main>
  )
}

export default Register