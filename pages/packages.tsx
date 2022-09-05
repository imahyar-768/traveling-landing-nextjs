import React from "react";
import Head from "next/head";
import Navbar from '../components/Navbar'
import PricingPlans from "../components/PricingPlans";

const Packages = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Packages </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-7xl bg-white px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight">
          Pricing plans for teams of all sizes
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-500">
          Choose an affrodable plan that's packed with the best features for
          engaging your audience, creating customer loyality, and driving sales.
        </p>
      </div>
      <PricingPlans />
    </>
  );
};

export default Packages;
