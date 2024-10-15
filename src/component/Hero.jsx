"use client";
import Button from "./Button";
import HeroImage from "../assets/hero-image.svg";
import rightCurve from "../assets/curve-big.svg";
import leftCurve from "../assets/curve-sm.svg";

export default function Example() {
  return (
    <>
      <div className="text-center font-kumbh  mx-auto ">
        {/* ENTIRE HERO DIV */}
        <div className="bg-[#100F57] ">
          {/* FREE CONSULTATION BUTTON */}
          {/* MANAGE YOUR TEAM DIV */}
          <div className="pt-10">
            <Button
              label="Get your free consultation now"
              bgColor="bg-[#100F57]"
              textColor="text-[#D89925]"
              border="border-2 border-#fff"
              hoverBgColor="bg-indigo-500"
            />
          </div>
          <div className="flex justify-center relative bg-[#100F57]">
            <img
              src={leftCurve}
              alt="leftCurve"
              className="hidden md:block md:absolute md:left-[5rem] md:top-[13rem] "
            />

            <div className="mx-auto py-4">
              <div className="">
                <h1 className="text-white p-2 text-[2rem] sm:text-[1.8rem] lg:text-[3.2rem] max-w-md md:max-w-lg sm:max-w-md font-bold ">
                  Manage your team easily with task man
                </h1>

                <p className="max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg text-center sm:text-center md:text-[14px] lg:text-[16px] text-[12px] text-white pb-8">
                  Statisdaa is a school management solution that offers a
                  personalized portal to each type of user.
                </p>
              </div>
              <Button
                label="Get Started"
                bgColor="bg-[#0A92DD]"
                textColor="text-white"
                hoverBgColor="bg-indigo-500"
                onClick={() => alert("Button clicked")}
              />
            </div>
            <img
              src={rightCurve}
              alt="right-curve"
              className="hidden md:block md:absolute md:right-[2rem]  md:top-[1rem] lg:right-[10rem]"
            />
          </div>
          <div className="mt-28 flex flex-col gap-6 items-center justify-center bg-white gap-x-6">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="shadow-lg -mt-20   w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          
          </div>
          <div className="mx-auto py-32 sm:py-48 lg:py-56">
               
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
          </div>
          <div aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div> */
}
