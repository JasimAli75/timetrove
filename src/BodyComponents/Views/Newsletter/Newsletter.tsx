import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Newsletter() {
  return (
    <div className="mb-32 ">
      <div className=" p-5 flex justify-center items-center mt-40 relative">
        <div className="absolute inset-0 -z-50 text-primaryWhite   justify-center items-center mt-11 md:flex hidden ">
          <h3 className="-z-50 leading-[6rem] text-[7.5rem] font-extrabold opacity-5">
            Newsletter
          </h3>
        </div>
        <h1 className="text-4xl font-semibold">
          Subscribe for <span className="text-blue-600">Newsletter</span>
        </h1>
      </div>
      <p className="flex justify-center items-center text-sm font-medium">
        Get the latest information and promo offers directly
      </p>
      <div className=" h-1/2 w-full flex md:flex-row flex-col justify-center items-center p-5 mb-10">
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input type="email" placeholder="Email" />

          <Button type="submit" className="w-44">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
