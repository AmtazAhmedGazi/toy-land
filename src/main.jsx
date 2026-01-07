import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider";
import Loading from "./pages/Loading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
