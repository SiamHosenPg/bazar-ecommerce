import React, { useContext, useState } from "react";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useUser } from "../../assets/contextapi/UserContext";
import { DialogueContext } from "../../assets/contextapi/Dialoguecontext";
import { useNavigate } from "react-router-dom";

const Signupform = ({ SetLoginContent }) => {
  const { addUser } = useUser();
  const { setDialougeText, setBoxStatus, setType } =
    useContext(DialogueContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      joinedDate: new Date().toISOString().split("T")[0],
    };

    addUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    setDialougeText("Account created successfully!");
    setBoxStatus("block");
    setType("success");

    setTimeout(() => {
      navigate("/profile");
    }, 500);
  };

  const LoginPageShow = () => {
    SetLoginContent(true);
  };

  return (
    <div>
      <div className="mt-6">
        <h4 className="font-bold">Create your Account</h4>
        <p className="text-sm mt-2 text-[#888]">
          Create account for your biggest business
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full xl:w-3/4 mt-12">
        <div className="EmailBox mt-6 border border-[#999] flex items-center pl-4 rounded-md pr-2">
          <div>
            <MdOutlineAccountCircle className="text-xl" />
          </div>
          <input
            type="text"
            className="block px-6 py-3 w-full"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="EmailBox mt-6 border border-[#999] flex items-center pl-4 rounded-md pr-2">
          <div>
            <MdOutlineEmail className="text-xl" />
          </div>
          <input
            type="email"
            className="block px-6 py-3 w-full"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="EmailBox mt-6 border border-[#999] flex items-center pl-4 rounded-md pr-2 overflow-hidden">
          <TbLockPassword className="text-xl" />
          <input
            type="password"
            className="block px-6 py-3 w-full rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Policy mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name=""
              id="Chackbox"
              className="w-4 h-4 block"
            />
            <label className="text-sm" htmlFor="Chackbox">
              I agree to Website privacy policy
            </label>
          </div>
          <div className="text-sm text-blue-800">Privacy policy</div>
        </div>
        <input
          type="submit"
          value="Create account"
          className="bg-blue-600 text-white block w-full text-center py-3 rounded-md mt-10 font-medium cursor-pointer"
        />
      </form>
      <div>
        <p className="w-full xl:w-2/3 mt-10 text-sm">
          You have an account? Click{" "}
          <button onClick={LoginPageShow} className="text-blue-600">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signupform;
