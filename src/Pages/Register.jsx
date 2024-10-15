import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing Up a User...");
    const result = await firebase.signupUserWithEmailAndPassword(
      email,
      password
    );
    console.log("User Signed Up", result);
  };

  return (
    <div className="h-screen w-full bg-[#2C2C2C] px-3 flex justify-center items-center">
      <div className="w-full max-w-md bg-[#3B3B3B] rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#2C2C2C] border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[#2C2C2C] border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
