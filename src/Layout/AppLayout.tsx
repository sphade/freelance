import { Outlet } from "react-router-dom";
import { FooterPlayer, SideBar } from "../components";

const AppLayout = () => {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <main className="flex-1 px-5 mb-[80px]  bg-white">
          <Outlet />
        </main>
      </div>
      <FooterPlayer/>
    
    </div>
  );
};

export default AppLayout;
