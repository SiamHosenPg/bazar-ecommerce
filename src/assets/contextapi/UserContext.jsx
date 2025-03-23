import { createContext, useContext, useState, useEffect } from "react";
import userData from "../information/userData.json"; // Import user data from JSON file

// Creating a new context for users
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State to store user data
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Load user data from JSON file and local storage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(userData);
    }

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to add a new user
  const addUser = (user) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  // Function to check user credentials
  const checkUserCredentials = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  // Function to log in a user
  const loginUser = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  // Function to log out a user
  const logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loggedInUser,
        addUser,
        checkUserCredentials,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
