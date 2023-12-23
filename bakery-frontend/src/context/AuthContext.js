"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

import LoadingContext from "./LoadingContext";

export const AuthProvider = ({ children }) => {
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [userDetailsError, setUserDetailsError] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const {isLoading, setIsLoading} = useContext(LoadingContext);


  const openAuthPanel = () => {
    setIsAuthPanelOpen(true);
  };

  const closeAuthPanel = () => {
    setIsAuthPanelOpen(false);
  };

  const registerUser = async (email, phone_number, password) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/create-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone_number,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered:", data.message);
        setRegistrationError(null);
        setToken(data.access_token); // Set the JWT token
        const authToken = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        };
        localStorage.setItem("authToken", JSON.stringify(authToken));
        if (token && token.length > 0) {
          console.log(token);
          // Decode the JWT token to get user information
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
          console.log(user);
        }
        alert("Successfull");
      } else {
        const errorData = await response.json();
        alert("Registration failed:", errorData.error);
        console.error("Registration failed:", errorData.error);
        setRegistrationError(errorData.error);
      }
    } catch (error) {
      alert("Registration failed:", error);
      console.error("Registration failed:", error);
      setRegistrationError("An error occurred during registration.");
    }
    setIsLoading(false)
  };

  const loginUser = async (email, password) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/login-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User Login Successful:", data.message);
        setLoginError(null);
        setToken(data.access_token); // Set the JWT token
        const authToken = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        };
        localStorage.setItem("authToken", JSON.stringify(authToken));
        if (token && token.length > 0) {
          console.log(token);
          // Decode the JWT token to get user information
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
          console.log(user);
        }
        alert("Successfull");
      } else {
        const errorData = await response.json();
        alert("Login failed:", errorData.error);
        console.error("Login failed:", errorData.error);
        setLoginError(errorData.error);
      }
    } catch (error) {

      console.error("Login failed:", error);
      alert("Login failed:", error);

      setRegistrationError("An error occurred during Login.");
    }
    setIsLoading(false)
  };

  const getUserDetails = async (user_id) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/user-details/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User Details Obtained:", data.message);
        setUserDetails(data.user_details);
      } else {
        const errorData = await response.json();
        alert("Fetching User Details Failed:", errorData.error);
        console.error("Fetching User Details Failed:", errorData.error);
        setUserDetailsError(errorData.error);
      }
    } catch (error) {
      alert("Fetching User Details Failed:", errorData.error);
      console.error("Fetching User Details Failed:", error);
      setUserDetailsError("An error occurred while fetching User Details.");
    }
    setIsLoading(false)
  };

  const createOrder = async (
    user_id,
    address,
    cart,
    amount,
    delivery_status,
    payment_mode
  ) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/create-order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          address,
          cart,
          amount,
          delivery_status,
          payment_mode,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Order Successfull:", data.message);
        setRegistrationError(null);
      } else {
        const errorData = await response.json();
        alert("Order failed:", errorData.error);
        console.error("Order failed:", errorData.error);
        setRegistrationError(errorData.error);
      }
    } catch (error) {
      console.error("Order Failed:", error);
      alert("Order failed:", error);
      setRegistrationError("An error occurred while placing Order.");
    }
    setIsLoading(false)
  };

  const logout = () => {
    setIsLoading(true)
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true)
    var authToken;
    if (localStorage.getItem("authToken")) {
      authToken = JSON.parse(localStorage.getItem("authToken"));
      setToken(authToken.access_token);
    }
    setIsLoading(false)
  }, []); // Only run this once to set the initial token

  useEffect(() => {
    setIsLoading(true)
    if (token && token.length > 0) {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setUser(decodedToken);
      }
    }
    setIsLoading(false)
  }, [token]);

  useEffect(() => {
    if(!user){
      setIsLoading(true)
    }
    setIsLoading(false)
  }, [user]);

  useEffect(() => {
    if(!userDetails){
      setIsLoading(true)
    }
    setIsLoading(false)
  }, [userDetails]);

  return (
    <AuthContext.Provider
      value={{
        isAuthPanelOpen,
        openAuthPanel,
        closeAuthPanel,
        registerUser,
        loginUser,
        registrationError,
        loginError,
        user,
        userDetails,
        getUserDetails,
        createOrder,
        token,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
