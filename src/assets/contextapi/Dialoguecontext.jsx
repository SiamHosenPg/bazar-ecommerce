import { createContext, useState } from "react";

export const DialogueContext = createContext();

export const DialogueProvider = ({ children }) => {
  const [DialougeText, setDialougeText] = useState("");
  const [BoxStatus, setBoxStatus] = useState("hidden");
  const [type, setType] = useState("success"); // Add type state

  return (
    <DialogueContext.Provider
      value={{
        DialougeText,
        setDialougeText,
        BoxStatus,
        setBoxStatus,
        type,
        setType, // Provide setType function
      }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
