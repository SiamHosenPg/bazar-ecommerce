import React, { useEffect, useState } from "react";
import Loginform from "../components/loginform/Loginform";
import Signupform from "../components/signupform/Signupform";
import { LoginIamgeData } from "../assets/Loginpageiamge";
import { motion } from "framer-motion";
import useCustomNavigate from "../hook/Usenavigation";

const Loginpage = () => {
  const { goTo } = useCustomNavigate();
  const ClickEventNavigate = (path) => {
    goTo(path);
  };

  const [indexdata, SetPageImage] = useState(0);
  const nextData = () => {
    SetPageImage((prev) => (prev + 1) % LoginIamgeData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextData, 8000);
    return () => clearInterval(interval);
  }, []);

  const [LoginContent, SetLoginContent] = useState(true);

  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,0.7)]  flex items-center justify-center">
      <div className=" w-full h-full flex items-center justify-between overflow-hidden bg-white">
        <div className="Left w-1/2 h-full hidden lg:block ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full object-cover duration-300"
            key={indexdata}
            src={LoginIamgeData[indexdata]}
            alt=""
          />
        </div>
        <div className="Right w-full  lg:w-1/2 px-8 md:px-44 lg:px-20 xl:px-28 2xl:px-40">
          <div
            onClick={() => ClickEventNavigate("/about")}
            className="Logo font-bold text-3xl w-fit cursor-pointer"
          >
            Bazar
          </div>
          {LoginContent ? (
            <Loginform SetLoginContent={SetLoginContent} />
          ) : (
            <Signupform SetLoginContent={SetLoginContent} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
