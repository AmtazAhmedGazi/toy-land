import React from "react";

const ToyCardBig = ({ toy }) => {
  const {
    pictureURL,
    toyName,
    description,
    price,
    rating,
    subCategory,
    sellerName,
    sellerEmail,
    availableQuantity,
  } = toy;

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 mt-10">
      {/* Image Section */}
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full md:w-1/3 h-125 object-cover"
      />

      {/* Content Section */}
      <div className="p-6 md:p-8 w-full md:w-2/3">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-2">
              {toyName}
            </h2>
            <p className="text-base text-gray-500 mb-3">{subCategory}</p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-primary mb-1">${price}</p>
            <p className="text-lg text-yellow-500 font-semibold">⭐ {rating}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-800">Seller:</span>{" "}
            <span>{sellerName}</span>
          </div>

          <div>
            <a
              href={`${sellerEmail}`}
              className="underline hover:text-primary"
              title={`Email ${sellerName}`}
            >
              {sellerEmail}
            </a>
          </div>

          <div>
            <span className="font-semibold text-gray-800">In stock:</span>{" "}
            <span>{availableQuantity}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a className="inline-block px-5 py-2  text-white rounded-lg font-medium btn btn-primary transition">
            Buy Now
          </a>

          <button
            type="button"
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm cursor-pointer"
            onClick={() => navigator.clipboard?.writeText(sellerEmail)}
          >
            Copy Seller Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCardBig;
