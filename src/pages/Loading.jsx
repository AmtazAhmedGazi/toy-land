import React from "react";
import useTitle from "../hooks/useTitle";

const Loading = () => {
  useTitle("Loading");
  return (
    <div className="min-h-[calc(100vh-72px)] bg-secondary-content flex justify-center items-center">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Loading;
