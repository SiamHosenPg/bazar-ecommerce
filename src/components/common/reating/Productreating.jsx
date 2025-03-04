import React from "react";
import { FaStar } from "react-icons/fa";
const Productreating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-orange-400" : "text-[#ccc]"}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default Productreating;
