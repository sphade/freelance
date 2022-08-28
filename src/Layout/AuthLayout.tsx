import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="flex items-center justify-between px-10 py-5">
        <h1 className="text-4xl uppercase font-bold text-primary">
          shocker.com
        </h1>
        <Link
          to={
            pathname === "/login"
              ? "/register"
              : pathname === "/register"
              ? "/login"
              : ""
          }
        >
          <Button
            variant="contained"
            className="!capitalize"
            disableElevation
            href="/register"
          >
            {pathname === "/login"
              ? "Register"
              : pathname === "/register"
              ? "login"
              : ""}
          </Button>
        </Link>
      </header>
      <main className="mb-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
