import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Analytics from "./Analytics";
import Payments from "./Payments";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfers from "./Transfers";
// import scrollreveal from "scrollreveal";
export default function Dashboard() {
  return (
    <div className="container-sm mg-10">
     
      <Navbar />
      <div className="row">
        <div className="col">
          <Analytics />
        </div>
        <div className="row__two">
          <Payments />

          <Profile />
        </div>
      </div>
    </div>
  );
}
