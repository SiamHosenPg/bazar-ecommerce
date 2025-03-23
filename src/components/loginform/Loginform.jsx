import React, { useState, useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../assets/contextapi/UserContext";
import { DialogueContext } from "../../assets/contextapi/Dialoguecontext";

const Loginform = ({ SetLoginContent }) => {
  const { checkUserCredentials } = useUser();
  const { setDialougeText, setBoxStatus, setType } =
    useContext(DialogueContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = checkUserCredentials(email, password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setDialougeText("Login successful!");
      setBoxStatus("block");
      setType("success");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setDialougeText("Wrong information!");
      setBoxStatus("block");
      setType("danger");
    }
  };

  const CreateAccountPage = () => {
    SetLoginContent(false);
  };

  return (
    <div className="">
      <h4 className="font-bold mt-5">Login to your Account</h4>
      <p className="text-sm mt-2 text-[#666]">
        Welcome back! Select a method to login
      </p>
      <div className="buttons flex gap-3 mt-10 w-full xl:w-3/4">
        <button className="border flex w-1/2 rounded-md gap-2 h-12 items-center justify-center">
          <FaFacebook className="text-blue-700 text-2xl" />
          <span>Facebook</span>
        </button>
        <button className="border flex w-1/2 rounded-md gap-2 h-12 items-center justify-center">
          <FcGoogle className="text-2xl" />
          <span>Google</span>
        </button>
      </div>
      <div className="flex gap-4 items-center justify-between mt-14 lg:mt-4 2xl:mt-14 w-full xl:w-3/4">
        <span className="block bg-[#eee] h-[1px] w-[calc(50%_-_80px)] "></span>
        <span className="block w-[160px] text-center text-[13px]">
          Continue with Email
        </span>
        <span className="block bg-[#eee] h-[1px] w-[calc(50%_-_80px)]"></span>
      </div>
      <form onSubmit={handleSubmit} className="w-full xl:w-3/4 ">
        <div className="EmailBox mt-6 flex border border-[#aaa] items-center justify-start px-5 rounded-md">
          <MdOutlineEmail className="text-xl" />
          <input
            type="email"
            className="block px-6 py-3  w-full"
            placeholder="Enter your email account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Password mt-6 flex border border-[#aaa] items-center justify-start px-5 rounded-md">
          <TbLockPassword className="text-xl" />
          <input
            type="password"
            className="block px-6 py-3  w-full "
            placeholder="Enter your password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className=" flex items-center justify-start gap-2">
            <input id="Checkbox" className=" w-4 h-4" type="checkbox" name="" />
            <label className=" text-sm" htmlFor="Checkbox">
              Remember me
            </label>
          </div>
          <div className="text-sm text-blue-800">Forgot password?</div>
        </div>
        <input
          type="submit"
          value="Login Account"
          className=" bg-blue-700 text-white block w-full text-center py-3 rounded-md mt-4 font-medium cursor-pointer"
        />
      </form>

      <div>
        <p className=" w-full lg:w-2/3 mt-10 lg:mt-6 2xl:mt-10 text-sm">
          Don't have an account?
          <button onClick={CreateAccountPage} className="text-blue-800 ml-3">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
