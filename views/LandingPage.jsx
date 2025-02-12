import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function LandingPage() {
  return (
    <div className="container mx-auto lg:px-20  mt-10 ">
      <div className="">
        <Navbar />
        <Menu />
      </div>
    </div>
  );
}

export default LandingPage;
