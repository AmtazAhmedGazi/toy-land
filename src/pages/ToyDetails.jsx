import React from "react";

import { useLoaderData, useParams } from "react-router";

import useTitle from "../hooks/useTitle.js";
import ToyCardBig from "../components/ToyCardBig.jsx/ToyCardBig.jsx";
import TryNow from "../components/TryNow.jsx/TryNow.jsx";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { id } = useParams();
  useTitle(`${toys[id - 1].toyName}`);
  return (
    <div className="min-h-[calc(100vh-72px)]  px-10">
      <ToyCardBig toy={toys[id - 1]}></ToyCardBig>
      <TryNow></TryNow>
    </div>
  );
};

export default ToyDetails;
