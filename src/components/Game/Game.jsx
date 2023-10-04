import React, { useEffect, useState } from "react";
import RouletteWheel from "../Roulwtwheel/RouletWheel";
import "./Game.css";
const Game = () => {
  const [result, setResult] = useState(null);
  return (
    <div className="bg-violet-700 h-screen">
     
      <div className="container mx-auto py-5 max-w-6xl">
        <div className="flex flex-col w-full mx-auto  border border-1  gap-6 items-center rounded-lg bg-black bg-opacity-80 text-white p-5 mb-10">
          <div className="flex w-full border-b border-slate-400 py-5">
            <div className="flex justify-between gap-5 w-1/2">
              <div className="player flex items-center justify-center flex-col text-sm">
                <img
                  src=""
                  alt=""
                  className="w-[45px] h-[45px] bg-slate-500 rounded-full"
                />
                <p>player name</p>
              </div>
            </div>
            <div className="flex justify-end gap-5 w-1/2">
              <div
                className={`flex pr-4 border border-1 rounded-xl justify-between w-full max-w-[140px] font-bold  items-center`}
              >
                <img
                  width={"45px"}
                  height={"45px"}
                  src="./Images/casino-coin_195d17331-removebg-preview.png"
                  alt=""
                />
                <span className="text-lg">0</span>
              </div>
              <div
                className={`flex pr-4 border border-1 rounded-xl justify-between w-full max-w-[140px] font-bold  items-center`}
              >
                <img
                  width={"45px"}
                  height={"45px"}
                  src="./Images/casino-coin_195d17331-removebg-preview.png"
                  alt=""
                />
                <span className="text-lg">0</span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full text-center ">
          <RouletteWheel  result={result}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
