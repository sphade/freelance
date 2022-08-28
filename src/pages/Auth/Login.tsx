import { Button, TextField } from "@mui/material";
import { PasswordInput } from "../../components/inputs";

const Login = () => {
  return (
    <main className=" pb-10 bg-white max-w-xl  shadow-lg rounded-lg  p-10  mt-24 text-center mx-auto">
      <h1 className="uppercase font-bold text-4xl text-primary">
        login to your account
      </h1>
      <p className="text-gray-500 p-5 capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, alias
        deserunt
      </p>
      <div>
        <form className="w-[500px] mx-auto space-y-5">
          <TextField fullWidth label="email" type='email' />
        <PasswordInput label="password"/>
          <Button fullWidth variant="contained" size="large">
            log into your account
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
