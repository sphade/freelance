import { CameraIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/inputs";

const Register = () => {
  return (
    <main className="max-w-xl w-full         mx-auto ">
      <div className="px-5">

      <h1 className="capitalize font-semibold text-4xl text-black mb-5">
        sign up
      </h1>

     
        <form className="w-full mx-auto space-y-5">
          <div className="relative -mb-5 w-fit mx-auto">
            <Avatar sx={{ width: 100, height: 100,  borderRadius:'10px' }}
            variant='square'
            />
            <IconButton className="absolute  !bg-white -top-[20px] -left-2  ">
              <CameraIcon className="w-5 h-5" />
            </IconButton>
          </div>

          <TextField fullWidth label="First name" type="text" />
          <TextField fullWidth label="Last name" type="text" />
          <TextField fullWidth label="Email" type="email" />
          <TextField fullWidth label="Phone number" type="number" />
          <PasswordInput label="Password" />
          <PasswordInput label="Confirm Password" />
          <Button fullWidth variant="contained" size="large">
            register
          </Button>
         

        </form>
        <Link to='/login' className="inline-block py-5">Already have an Account, <span className='text-primary  capitalize cursor-pointer'>Login</span> </Link>

      </div>
    
        
    </main>
  );
};

export default Register;
