import React from "react";
import ToyCard from "../ToyCard/ToyCard";

const PopularToys = ({ data }) => {
  return (
    <div className=" px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-50 pb-10">
      <h2 className="text-3xl text-center md:text-left font-bold text-black mb-7">
        Popular Toys
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data
          .filter((toy) => toy.rating > 4.5)
          .map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
      </div>
    </div>
  );
};

export default PopularToys;
