// @ts-nocheck
import React from "react";
import HeadingDesc from "./InnerComponents/HeadingDesc";
import Subcription from "./InnerComponents/Subcription";

function Aboutus() {
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-start my-20">
      <div className="flex flex-col justify-evenly gap-20 w-[95%] lg:w-[70%] text-center ">
        <div className="flex flex-col gap-10">
          <HeadingDesc
            heading="Why it is Needed"
            description=" Leeds Muslim Youth Forum is an organization that supports young people
          by providing opportunities for growth, learning, and leadership.        We do this by enrolling, supporting and training young people to
          create positive changes in their community while preserving cultural
          heritage."
          />
          <HeadingDesc
            heading="Why it is Needed"
            description=" Leeds Muslim Youth Forum is an organization that supports young people
          by providing opportunities for growth, learning, and leadership.        We do this by enrolling, supporting and training young people to
          create positive changes in their community while preserving cultural
          heritage."
          />
        </div>

        {/* Input & Button */}
        <div>
          <Subcription />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
