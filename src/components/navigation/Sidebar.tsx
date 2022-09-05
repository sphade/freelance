import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MusicalNoteIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarOption } from "../../utils/sidebarOptions";
import SearchInput from "../inputs/SearchInput";
import clsx from "clsx";

const Sidebar = () => {
  const [bar, setBar] = useState(false);

  return (
    <div
      className={clsx(
        "w-[320px] transition-all  border bg-gray-100 h-screen sticky top-0 left-0 z-10",
        {
          "w-fit flex items-center gap-1 flex-col": bar,
        }
      )}
    >
      <div
        className={clsx(" hover:bg-gray-200 cursor-pointer w-fit p-3", {
          "w-full": bar,
        })}
        onClick={() => setBar((bar) => !bar)}
      >
        <Bars3Icon className="h-6" />
      </div>

      <div
        className={clsx("px-3", {
          "px-0": bar,
        })}
      >
        {bar ? (
          <div className=" hover:bg-gray-200 cursor-pointer w-fit p-3">
            <MagnifyingGlassIcon className="h-5" />
          </div>
        ) : (
          <SearchInput />
        )}
      </div>
      <ul className="py-5">
        {sidebarOption.slice(0, 3).map(({ Icon, text, link }) => {
          return (
            <NavLink
              to={link}
              key={text}
              className="flex group p-3 gap-3 relative active:px-4 transition-all   items-center hover:bg-gray-200 capitalize font-semibold border-l-4 border-transparent  cursor-pointer "
            >
              {/* <div className="tooltip">{text}</div> */}
              <Icon className="h-5" />
              {!bar && <span>{text}</span>}
            </NavLink>
          );
        })}
        {sidebarOption.slice(3, 4).map(({ Icon, text, link }) => {
          return (
            <div
              className="flex items-center border-t border-gray-300 "
              key={text}
            >
              <NavLink
                to={link}
                className="flex flex-[.85] group p-3 gap-3 relative  items-center hover:bg-gray-200 capitalize font-semibold border-l-4 border-transparent  cursor-pointer "
              >
                {/* <div className="tooltip">{text}</div> */}
                <Icon className="h-5" />
                {!bar && <span>{text}</span>}
              </NavLink>
              {!bar && (
                <div className="group relative  cursor-pointer flex-[.15]  p-3.5 flex items-center justify-center   hover:bg-gray-200 ">
                  <div className="tooltip">create new playlist</div>
                  <PlusIcon className="h-5 w-5 " />
                </div>
              )}
            </div>
          );
        })}
        {bar && (
          <div className="flex flex-[.85] group p-3 gap-3 relative  items-center hover:bg-gray-200 capitalize font-semibold border-l-4 border-transparent  cursor-pointer ">
            <PlusIcon className="h-5" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
