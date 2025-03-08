import React, { useContext, useState } from "react";
import { CgDanger } from "react-icons/cg";
import { DialogueContext } from "../../../assets/contextapi/Dialoguecontext";

const Dialoguebox = () => {
  const { DialougeText, BoxStatus, setBoxStatus } = useContext(DialogueContext);

  return (
    <div
      className={` ${BoxStatus} w-full h-screen fixed bg-[#00000086] z-50 top-0 left-0 flex items-center justify-center`}
    >
      <div className="w-[400px] bg-white rounded-md px-8 py-5 flex items-center justify-center flex-col">
        <CgDanger className="text-5xl text-[#888] " />
        <p className="text-center text-[#777] mt-8 text-sm"> {DialougeText}</p>
        <button
          onClick={() => setBoxStatus("hidden")}
          className=" border rounded-md px-5 py-3 mt-6"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialoguebox;
