import React, { useContext, useEffect } from "react";
import { CgDanger } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { DialogueContext } from "../../../assets/contextapi/Dialoguecontext";

const Dialoguebox = () => {
  const { DialougeText, BoxStatus, setBoxStatus, type } =
    useContext(DialogueContext);

  useEffect(() => {
    if (BoxStatus === "block") {
      const timer = setTimeout(() => {
        setBoxStatus("hidden");
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [BoxStatus, setBoxStatus]);

  const handleClose = () => {
    setBoxStatus("hidden");
  };

  // Determine background color based on the type prop
  const backgroundColor =
    type === "success"
      ? "bg-green-100"
      : type === "danger"
      ? "bg-red-100"
      : "bg-gray-100";

  return (
    <div
      className={` ${BoxStatus} rounded-md fixed top-[100px] left-1/2 transform -translate-x-1/2 ${backgroundColor} z-50 flex items-center justify-center`}
    >
      <div className="   px-4 py-2 flex items-center justify-between w-full max-w-md">
        <div className="flex items-center gap-2">
          <CgDanger className="text-2xl text-[#888]" />
          <p className="text-[#777] text-sm"> {DialougeText}</p>
        </div>
        <button onClick={handleClose} className="text-[#888] hover:text-[#555]">
          <IoClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Dialoguebox;
