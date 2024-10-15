import { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    console.log("Login a User...");
    const result = await firebase.signinUserWithEmailAndPassword(
      email,
      password
    );
    console.log("User Logged in", result);
  };

  return (
    <div className="h-screen w-full flex items-center px-4 justify-center bg-[#2C2C2C]">
      <div className="bg-[#3B3B3B] p-8 rounded-lg w-full max-w-md text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-base mb-2 font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 bg-[#2C2C2C] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base mb-2 font-medium">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 bg-[#2C2C2C] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <h2 className="my-3 text-center text-gray-400">OR</h2>

        <button
          onClick={firebase.signinWithGoogle}
          className="w-full py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Sign in with Google
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
