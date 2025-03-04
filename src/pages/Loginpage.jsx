import React, { useEffect, useState } from "react";
import Loginform from "../components/loginform/Loginform";
import Signupform from "../components/signupform/Signupform";
import { LoginIamgeData } from "../assets/Loginpageiamge";
import { motion } from "framer-motion";

const Loginpage = () => {
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
    <div className="w-full h-screen bg-[rgba(0,0,0,0.7)] fixed z-50 top-0 left-0 flex items-center justify-center">
      <div className=" w-4/6 h-5/6 flex items-center justify-between rounded-2xl overflow-hidden bg-white">
        <div className="Left w-1/2 h-full ">
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
        <div className="Right  w-1/2 px-20">
          <div className="Logo font-bold text-3xl  ">Bazar</div>
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
