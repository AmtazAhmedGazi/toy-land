import React from "react";
import { toast } from "react-toastify";

const TryNow = () => {
  const handleClick = (e) => {
    e.preventDefault();

    toast.success(
      "Congratulations! Your Toy will be with you in a short while!"
    );
  };
  return (
    <div className="mt-10 max-w-13/15 xl:max-w-10/15 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20 grow-0">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Try Now!</h1>
          <p className="py-6">
            Discover endless fun and imagination inside. Experience joy and
            laughter with every toy you try. Step into playtime magic and
            adventure. Explore, create, and make every moment unforgettable.
          </p>
        </div>
        <form
          onSubmit={handleClick}
          className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
        >
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <button className="btn btn-primary mt-4 md:mr-3">Try Now</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TryNow;
