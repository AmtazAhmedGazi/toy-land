import React from "react";
import error from "../assets/error.jpg";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error 404");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={error} alt="404 Error" className="rounded-lg w-fit-72 -mt-10" />
      <h1 className="text-4xl font-bold text-center">
        Error 404 <br></br>Page Not Found
      </h1>
    </div>
  );
};

export default ErrorPage;
