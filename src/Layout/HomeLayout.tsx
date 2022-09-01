import { BoltIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { SearchBar } from "../components";
import useScrollHeader from "../hooks/useScrollHeader";
import { headerOptions } from "../util";

const HomeLayout = () => {
  const navbar = useScrollHeader('0px','-100px')
  return (
    <div className="">
      <header className="px-5 py-3 flex fixed top-0 left-0 bg-white w-full z-10 transition-[top]  duration-300 items-center justify-between shadow-md" ref={navbar}>
        <div className="flex items-center gap-2">
          <BoltIcon className="h-7 text-yellow-600" />
          <h1 className="uppercase text-yellow-600 font-bold text-lg">
            shocker.com
          </h1>
        </div>
        <div>
         
          <SearchBar />
        </div>
        <div className="flex items-center gap-3 ">
          {headerOptions.map(({ Icon, link, text }) => (
          <Tooltip  key={text} title={text.toUpperCase()}>
              
              <NavLink to={link} className='h-full  '>
                {(({ isActive }) => (
                  <Icon className={`h-7  ${isActive && 'fill-black text-black stroke-white'} `}  />
                  
                ))}
            
            </NavLink>
          </Tooltip>
          ))}
        </div>
      </header>
      <main className="px-5 py-2 md:px-1 max-w-xl w-full mt-[100px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
