import React from "react";
import { pricingPlans } from "../data";
import { GiCheckMark } from "react-icons/gi";

const PricingPlans = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col'>
        <div className="flex-1"></div>
        <div className="bg-slate-50 flex-1"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="border border-slate-200 p-8 shadow-lg relative bg-white rounded-2xl flex flex-col"
          >
            <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-violet-500 px-3 py-0.5 text-sm font-semibold text-white tracking-wide rounded-full shadow-md">
                Most Popular
              </p>
            )}
            <p className="mt-4 text-sm text-slate-700 leading-6">
              {plan.description}
            </p>
            <div className="-mx-6 mt-4 bg-slate-50 p-6 rounded-lg">
              <p className="flex text-sm font-semibold text-slate-500 items-center">
                <span>{plan.currency}</span>
                <span className="ml-3 text-4xl text-slate-900">
                  ${plan.price}
                </span>
                <span className="ml-1.5">{plan.frequency}</span>
              </p>
            </div>
            {/* features */}
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-slate-700 leading-6 flex"
                >
                  <GiCheckMark className="h-3 w-3 text-violet-500 shrink-0 mt-1" />
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            {/* call to action */}
            <a
              href="#"
              className={`mt-8 block px-6 py-4   text-sm font-semibold leading-4 text-center rounded-lg 
            ${
              plan.mostPopular
                ? "bg-violet-500 text-white hover:bg-violet-600 shadow-md"
                : "text-violet-700 bg-violet-50 hover:bg-violet-100"
            }
          `}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
