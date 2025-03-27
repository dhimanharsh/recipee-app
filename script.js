const { createRoot } = require("react-dom/client");
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./src/components/Header";
import React, { lazy, useEffect, useState, Suspense } from "react";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
const Receipe = lazy(() => import("./src/components/Receipe"));
import Communication from "./src/components/Communication";


//const Instock = Stock(Communication)
//console.log(Communication)

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const routerRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <Communication></Communication> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/about", element: <About></About> },
      {
        path: "receipe/:resId",
        element: (
          <Suspense>
            <Receipe></Receipe>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerRoute}></RouterProvider>);
