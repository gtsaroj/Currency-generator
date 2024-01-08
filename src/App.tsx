import { useState } from "react";

function App() {
  return (
    <div className="flex   items-center justify-center w-full   h-screen">
      <div className="flex flex-col  justify-center bg-[#4e86c5] px-[20px] py-[40px] w-[400px] ron  gap-5>">
        <h5 className="text-center mb-8">Currency Convertor</h5>
        <div className="">
          <label htmlFor="" className="flex flex-col gap-2 align-baseline mb-5">
            Enter amount :
            <input
              type="text"
              placeholder="Enter amount"
              className="px-[8px] py-[5px] outline-none"
            />
          </label>
        </div>
        <div className="flex gap-[10px] justify-between mb-5">
          <label
            htmlFor=""
            className="flex flex-col items-baseline justify-center px-[8px] py-[5px]"
          >
            From
            <input type="text" className="w-[100px]" />
          </label>
          <label
            htmlFor=""
            className="flex flex-col items-baseline justify-center px-[8px] py-[5px]"
          >
            To
            <input type="text" className="w-[100px]" />
          </label>
        </div>
        <button className="text-[white] bg-pink-400 px-[15px] py-[8px] rounded-md">
          Get Exchange Rate
        </button>
      </div>
    </div>
  );
}

export default App;
