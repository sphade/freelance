import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { GoogleIcon } from "../assets/Icons";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const screen = useMediaQuery("(min-width:400px)");
  return (
    <div className="bg-white min-h-screen ">
      <header className="flex sticky top-0 left-0  bg-white z-10 backdrop-blur-sm items-center justify-between px-5 md:px-10 py-4">
        <h1 className="text-lg md:text-4xl uppercase font-bold text-primary">
          shocker.com
        </h1>

        <div className="space-x-3">
          {pathname === "/register" && (
            <Button
              variant="outlined"
              startIcon={<img src={GoogleIcon} alt="" className="w-5 h-5" />}
            >
              {screen ? " sign in in with google" : ""}
            </Button>
          )}
        </div>
      </header>
      <main className="mb-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
