import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

import Job from "./routes/job";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/job",
    element: <Job />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
