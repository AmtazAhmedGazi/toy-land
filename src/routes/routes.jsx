import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "../privateRoute/PrivateRoutes";
import Profile from "../pages/Profile";
import AllToys from "../pages/AllToys";
import Loading from "../pages/Loading";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/ToyDetails.json");
          return res.json();
        },
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: async () => {
          const res = await fetch("/ToyDetails.json");
          return res.json();
        },
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails></ToyDetails>,
        loader: async () => {
          const res = await fetch("/ToyDetails.json");
          return res.json();
        },
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
