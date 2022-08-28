import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScrollHeader from "../hooks/useScrollHeader";
import Button from "./Button";

const Header = () => {
  //   const navbar = useRef<any>();
  const navbar = useScrollHeader("0", "-100px");

  return (
    <div
      //   id='navbar'
      className="flex  fixed bg-white w-full h-[100px]  py-3 items-center justify-between px-12 transition-[top] top-0 duration-300"
      ref={navbar}
    >
      <h1 className="font-bold text-xl uppercase">lawal adebola</h1>
      <ul className="flex gap-5 text-lg capitalize font-semibold ">
        <li>about us</li>
        <li>our team</li>
        <Link to="services">services</Link>
        <li>contact us</li>
      </ul>
      <Button>book a ride</Button>
    </div>
  );
};

export default Header;
