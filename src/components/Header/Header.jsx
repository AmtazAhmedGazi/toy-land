import React from "react";
import banner from "../../assets/banner.jpg";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-8 text-6xl md:text-8xl font-bold text-[#132996]">
            Toy Land
          </h1>
          <p className="mb-5 text-xl ">
            A world of fun and imagination where families explore, play, and
            discover unique toys while joy to every home.
          </p>
          <button
            onClick={() => {
              navigate("/allToys");
            }}
            className="btn bg-[#263950] text-white text-lg px-8 py-6"
          >
            Explore
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
