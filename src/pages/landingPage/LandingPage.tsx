import { Button } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <div className="">
      <header className="flex items-center justify-between px-10 py-5">
        <h1 className="text-4xl uppercase font-bold text-primary">
          shocker.com
        </h1>
        <div>
          <Button variant="contained" className="!capitalize">
            sign up
          </Button>
        </div>
      </header>
      <main>
        <h1>
          login to your account
      </h1>
      </main>
    </div>
  );
};

export default LandingPage;
