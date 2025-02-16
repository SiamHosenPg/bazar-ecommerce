import React from "react";
import FacebookLogo from "../../assets/image/icon/facebook.png";
import GoogleLogo from "../../assets/image/icon/google.png";

const Loginform = () => {
  return (
    <div>
      <form action="" className="w-3/4 mt-12">
        <div className="EmailBox mt-10">
          <b className=" block ">Your Email</b>
          <input
            type="email"
            className="block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700"
            placeholder="Enter your email account"
          />
        </div>
        <div className="Password mt-10">
          <b className=" block ">Your Email</b>
          <input
            type="password"
            className="block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700"
            placeholder="Enter your password "
          />
        </div>
        <input
          type="submit"
          value="Login"
          className=" bg-blue-600 text-white block w-44 text-center py-4 mt-10 font-medium"
        />
      </form>
      <div>
        <div className=" flex items-center justify-start w-10 gap-8 mt-10">
          <img className="block cursor-pointer" src={FacebookLogo} alt="" />
          <img className="block cursor-pointer" src={GoogleLogo} alt="" />
        </div>
        <p className="mt-5">Connect account simply Facebook or Google</p>
        <p className="w-2/3 mt-10">
          Your don't have an account & Your want to create account manualy so
          simply click{" "}
          <a className="text-blue-600" href="">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
