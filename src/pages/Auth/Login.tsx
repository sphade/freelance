import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/Icons";
import { PasswordInput } from "../../components/inputs";

const Login = () => {
  return (
    <main className="   max-w-xl w-full         mx-auto">
      <div className="px-5">

      <h1 className="capitalize font-semibold text-4xl  text-black">login</h1>
      <p className="text-gray-400  capitalize my-5 ">hi, welcome' back 🖐</p>
      <Button
        variant="outlined"
        
        startIcon={<img src={GoogleIcon} alt="" className="w-5 h-5" />}
      >
        login in with google
      </Button>
      <p className="text-cente my-5 capitalize ">
        or login with email
      </p>
      <div>
        <form className="w-full md:w-[500px] mx-auto space-y-5 ">
          <TextField fullWidth label="Email" size="small" type="email" />
          <PasswordInput label="Password" size="small" />
          <Button fullWidth variant="contained" size="large" disableElevation>
            log into your account
          </Button>
        </form>
          <p  className="py-5 inline-block">Don't have a account, <Link to='/register' className='text-primary  capitalize cursor-pointer'>register</Link> </p>
        </div>
      </div>
        
    </main>
  );
};

export default Login;
