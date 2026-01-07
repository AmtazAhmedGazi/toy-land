import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-sm mx-auto p-5 flex flex-col ">
      <img
        src={toy.pictureURL}
        alt={toy.toyName}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="mt-2 flex-1">
        <h2 className="text-lg font-semibold mb-2">{toy.toyName}</h2>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{toy.rating}</span>
        </div>
        <p className="text-gray-600 mb-2">Available: {toy.availableQuantity}</p>
        <p className="text-xl font-bold mb-4">${toy.price}</p>

        <Link
          to={`/toy-details/${toy.toyId}`}
          className="btn w-full bg-[#263950] text-white h-11 rounded hover:bg-secondary hover:text-black hover:border transition mt-auto cursor-pointer"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
