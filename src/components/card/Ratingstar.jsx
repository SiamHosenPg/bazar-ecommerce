import React from "react";
import { FaStar } from "react-icons/fa";

const Ratingstar = ({ rating }) => {
  return (
    <div className="flex">
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

export default Ratingstar;
