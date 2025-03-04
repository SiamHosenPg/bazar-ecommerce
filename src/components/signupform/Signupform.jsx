import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Signupform = ({ SetLoginContent }) => {
  const LoginPageShow = () => {
    SetLoginContent(true);
  };
  return (
    <div>
      <div className="mt-6">
        <h4 className="font-bold">Create your Account</h4>
        <p className="text-sm mt-2 text-[#888]">
          Create account for your biggest busseness
        </p>
      </div>
      <form action="" className="w-3/4 mt-12">
        <div className="EmailBox mt-6 border border-[#999] flex items-center pl-4 rounded-md pr-2">
          <div>
            <MdOutlineAccountCircle className="text-xl" />
          </div>
          <input
            type="text"
            className="block px-6 py-3 w-full "
            placeholder="Enter your Name"
          />
        </div>
        <div className="EmailBox mt-6 border border-[#999] flex items-center pl-4 rounded-md pr-2">
          <div>
            <MdOutlineEmail className="text-xl" />
          </div>
          <input
            type="text"
            className="block px-6 py-3 w-full "
            placeholder="Enter your Email"
          />
        </div>

        <div className="EmailBox mt-6  border border-[#999] flex items-center pl-4 rounded-md pr-2 overflow-hidden">
          <TbLockPassword className="text-xl" />
          <input
            type="text"
            className="block px-6 py-3 w-full rounded-lg  "
            placeholder="Password"
          />
        </div>

        <div className="Policy mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name=""
              id="Chackbox"
              className="w-4 h-4 block"
            />
            <label className="text-sm" htmlFor="Chackbox">
              I agry to Website privicy policy
            </label>
          </div>
          <div className="text-sm text-blue-800">Privicey policy</div>
        </div>
        <input
          type="submit"
          value="Create account"
          className=" bg-blue-600 text-white block w-full text-center py-3 rounded-md mt-10 font-medium"
        />
      </form>
      <div>
        <p className="w-2/3 mt-10 text-sm">
          Your have an account Click{" "}
          <button onClick={LoginPageShow} className="text-blue-600" href="">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signupform;
