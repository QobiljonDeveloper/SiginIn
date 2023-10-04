import React from "react";

const SignIn = () => {
  return (
    <div className="w-[500px] mx-auto flex items-center justify-center h-full">
      <div class="flex flex-col items-center mt-[10vh]">
        <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">Log In</h2>
        <button class="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
          <span class="text-gray-700 font-medium">Continue with Google</span>
        </button>
        <span class="mb-2 text-gray-900">Or</span>
        <form>
          <input
            type="text"
            class="w-full px-6 py-3 mb-4 border border-slate-600 rounded-lg font-medium "
            placeholder="Email"
        
          />
          <input
            type="password"
            class="w-full px-6 py-3 mb-4 border border-slate-600 rounded-lg font-medium "
            placeholder="Password"
           
          />
          <button class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
