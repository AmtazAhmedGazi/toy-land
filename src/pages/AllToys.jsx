import React from "react";

import { useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";
import ToyCard from "../components/ToyCard/ToyCard";

const AllToys = () => {
  useTitle("All Toys");
  const data = useLoaderData();
  return (
    <div className="min-h-[calc(100vh-72px)] ">
      <div className=" px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-50 pb-10">
        <h2 className="text-3xl text-center md:text-left font-bold text-black mb-7 pt-10">
          All Toys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
