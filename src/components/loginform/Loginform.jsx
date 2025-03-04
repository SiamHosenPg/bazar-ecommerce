import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Loginform = ({ SetLoginContent }) => {
  const CreateAccountPage = () => {
    SetLoginContent(false);
  };
  return (
    <div className="">
      <h4 className="font-bold mt-5">Login to your Account</h4>
      <p className="text-sm mt-2 text-[#666]">
        Walcome back Select mathod to login
      </p>
      <div className="buttons flex gap-3 mt-10  w-3/4">
        <button className="border flex w-1/2 rounded-md gap-2 h-12 items-center justify-center">
          <FaFacebook className="text-blue-700 text-2xl" />
          <span>Facebook</span>
        </button>
        <button className="border flex w-1/2 rounded-md gap-2 h-12 items-center justify-center">
          <FcGoogle className="text-2xl" />
          <span>Google</span>
        </button>
      </div>
      <div className="flex gap-4 items-center justify-between mt-14 w-3/4">
        <span className="block bg-[#eee] h-[1px] w-[calc(50%_-_80px)] "></span>
        <span className="block w-[160px] text-center text-[13px]">
          Contunow with Email
        </span>
        <span className="block bg-[#eee] h-[1px] w-[calc(50%_-_80px)]"></span>
      </div>
      <form action="" className="w-3/4 ">
        <div className="EmailBox mt-6 flex border border-[#aaa] items-center justify-start px-5 rounded-md">
          <MdOutlineEmail className="text-xl" />
          <input
            type="email"
            className="block px-6 py-3  w-full"
            placeholder="Enter your email account"
          />
        </div>
        <div className="Password mt-6 flex border border-[#aaa] items-center justify-start px-5 rounded-md">
          <TbLockPassword className="text-xl" />
          <input
            type="password"
            className="block px-6 py-3  w-full "
            placeholder="Enter your password "
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className=" flex items-center justify-start gap-2">
            <input id="Checkbox" className=" w-4 h-4" type="checkbox" name="" />
            <label className=" text-sm" htmlFor="Checkbox">
              Remember me
            </label>
          </div>
          <div className="text-sm text-blue-800">Forgate password?</div>
        </div>
        <input
          type="submit"
          value="Login Account"
          className=" bg-blue-700 text-white block w-full text-center py-3 rounded-md mt-4 font-medium"
        />
      </form>

      <div>
        <p className="w-2/3 mt-10 text-sm">
          Don't have an account.
          <button onClick={CreateAccountPage} className="text-blue-800 ml-3">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
