import React, { useEffect, useRef } from "react";
import useScrollHeader from "../hooks/useScrollHeader";
import Button from "./Button";

const Header = () => {
//   const navbar = useRef<any>();
  const navbar = useScrollHeader('0','-150px');

  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       navbar.current.style.top = "0";
  //     } else {
  //       navbar.current.style.top = "-150px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  return (
    <div
      //   id='navbar'
      className="flex shadow fixed bg-white w-full h-[150px]  py-3 items-center justify-between px-12 transition-[top] top-0 duration-700"
      ref={navbar}
    >
      <h1 className="font-bold text-xl uppercase">lawal adebola</h1>
      <ul className="flex gap-5 text-lg capitalize font-semibold ">
        <li>about us</li>
        <li>our team</li>
        <li>services</li>
        <li>contact us</li>
      </ul>
      <Button>book a ride</Button>
    </div>
  );
};

export default Header;
