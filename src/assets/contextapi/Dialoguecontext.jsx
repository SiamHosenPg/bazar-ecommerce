import { createContext, useState } from "react";

export const DialogueContext = createContext();
export const DialogueProvider = ({ children }) => {
  const [BoxStatus, setBoxStatus] = useState("hidden");
  const [DialougeText, setDialougeText] = useState("");

  return (
    <DialogueContext.Provider
      value={{ DialougeText, setDialougeText, BoxStatus, setBoxStatus }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
