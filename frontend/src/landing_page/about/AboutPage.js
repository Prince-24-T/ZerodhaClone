import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Team from "./Team";

function PricingPage() {
  return (
    <>
      <Hero />
      <Team />
    </>
  );
}

export default PricingPage;
