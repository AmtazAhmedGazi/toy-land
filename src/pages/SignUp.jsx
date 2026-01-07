import React, { useContext, useState } from "react";
import MyContainer from "../components/MyContainer/MyContainer";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    setUser,
    signoutUserFunc,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            sendEmailVerificationFunc()
              .then(() => {
                setLoading(false);
                signoutUserFunc().then(() => {
                  toast.success(
                    "Account created Successfully. Check your mail to validate your account. "
                  );
                  setUser(null);
                  navigate("/signIn");
                });
              })
              .catch((e) => {
                toast.error(e.code);
              });
          })
          .catch((e) => {
            toast.error(e.code);
          });
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };

  return (
    <MyContainer>
      <div className="min-h-[calc(100vh-72px)] flex justify-center items-center p-5 ">
        <form
          onSubmit={handleSignup}
          className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
        >
          <h2 className="text-3xl text-center font-bold text-[#061c49] pt-7 underline underline-offset-9">
            Sign Up
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Your photo url here..."
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
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

              <button
                type="submit"
                className="btn bg-[#47698F] text-white mt-4"
              >
                Sign Up
              </button>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/signIn"
                    className="link link-hover text-[#47698F] font-bold"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </MyContainer>
  );
};

export default SignUp;
