import React from "react";
import { useUser } from "../assets/contextapi/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { loggedInUser, logoutUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="bg-white PageRatio">
      <div className=" mt-12 ">
        <h3 className="text-2xl font-bold mb-6">Profile</h3>
        {loggedInUser ? (
          <div>
            <p>
              <strong>Name:</strong> {loggedInUser.name}
            </p>
            <p>
              <strong>Email:</strong> {loggedInUser.email}
            </p>
            <p>
              <strong>Joined Date:</strong> {loggedInUser.joinedDate}
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
