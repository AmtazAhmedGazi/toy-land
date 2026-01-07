import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import MyContainer from "../components/MyContainer/MyContainer";
import { auth } from "../firebase/firebase.config";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [user, setuser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const { signInWithEmailAndPasswordFunc, signInWithPopupFunc } =
    useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPasswordFunc(email, password).then((res) => {
      if (!res.user?.emailVerified) {
        toast.error("Your email is not verified.");
        return;
      }
      setuser(res.user);
      toast.success("Sign In Successful").catch((e) => {
        toast.error(e.code);
      });
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successful");
        setuser(null);
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopupFunc().then((res) => {
      setuser(res.user);
      toast.success("Sign In Successful").catch((e) => {
        toast.error(e.code);
      });
    });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success(`Password Reset Mail sent to ${email} `).catch((e) => {
        toast.error(e.message);
      });
    });
  };

  return (
    <MyContainer>
      <div className="min-h-[calc(100vh-72px)] flex justify-center items-center p-5 ">
        {user ? (
          <div className="cardsbg-white w-full max-w-sm shrink-0 shadow-2xl text-center space-y-3 py-6">
            <img
              src={user?.photoURL || "https://via.placeholder.com/88"}
              className="h-20 w-20 rounded-full mx-auto"
              alt=""
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-black/80 font-semibold">{user?.email}</p>
            <button
              onClick={handleSignOut}
              className="btn bg-red-600 hover:bg-red-900 text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSignIn}
            className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
          >
            <h2 className="text-3xl text-center font-bold text-black pt-7">
              Sign In
            </h2>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={`${showPassword ? "text" : "password"}`}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      size={20}
                      className="absolute top-2.5 right-7 cursor-pointer"
                    ></FaEyeSlash>
                  ) : (
                    <FaEye
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      size={20}
                      className="absolute top-2.5 right-7 cursor-pointer"
                    ></FaEye>
                  )}
                </div>
                <div>
                  <button
                    type="button"
                    className="link link-hover cursor-pointer font-medium"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#47698F] text-white mt-4"
                >
                  Sign In
                </button>

                <div>
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/signUp"
                      className="link link-hover text-[#47698F] font-semibold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn mt-4 border-[#47698F] bg-transparent flex   hover:border-red-500 hover:scale-105 transition-all duration-200 ease-in-ou cursor-pointer"
                >
                  <FcGoogle size={24}></FcGoogle>
                  <p>Sign In with Google</p>
                </button>
              </fieldset>
            </div>
          </form>
        )}
      </div>
    </MyContainer>
  );
};

export default SignIn;
