import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full">
        <img src="./Images/MainMenu.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="h-screen  opacity-90 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-col gap-6">
        <Link
          to={"/game"}
          className="w-2/12 max-lg:w-[340px]  flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Single game
        </Link>
        <Link
          to={"/settings"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Settings
        </Link>
        <Link
          to={"/Credits"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Credits
        </Link>
        <Link
          to={"/settings"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Statistics
        </Link>
        <Link
          to={"/sign-in"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
         Sigin In
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
