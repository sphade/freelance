import React, { LegacyRef, useRef } from "react";

const useScrollHeader = (initialPosition: string, finalPosition: string) => {
  const navbar = useRef<any>();

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = initialPosition;
    } else {
      navbar.current.style.top = finalPosition;
    }
    prevScrollpos = currentScrollPos;
  };
  return navbar;
};

export default useScrollHeader;


