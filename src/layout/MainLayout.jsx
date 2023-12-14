import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/headers/large/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
