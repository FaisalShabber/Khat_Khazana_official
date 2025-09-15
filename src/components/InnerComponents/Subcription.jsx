import React from "react";
import ParchmentButton from "./ParchmentButton";
import HeadingDesc from "./HeadingDesc";

const Subcription = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full py-10">
      <HeadingDesc
        headingClassName="text-[40px]"
        heading="  Subscribe for a Monthly Glimpse?"
        description="into the Past - One Treasured Letter and
      Photograph, Shared with You Each Month."
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <img src="/images/S2.webp" alt="Logo" className="w-fit h-40 " />

        <div className="flex flex-col  justify-center items-center gap-5">
          <input
            type="email"
            placeholder="Your email address"
            className="
              px-4 py-3 w-[400px] rounded-lg
              text-stone-900 placeholder-stone-700
              bg-cover bg-center border-[#6E4A27] border-2
              font-philosopher
            "
            style={{ backgroundImage: "url('/images/Email bg.webp')" }}
          />

          <ParchmentButton onClick={() => alert("Subscribed!")}>
            Submit
          </ParchmentButton>
        </div>

        <img
          src="/images/logo.svg"
          alt="Logo"
          width={100}
          height={60}
          className="w-fit h-40 "
        />
      </div>
    </div>
  );
};

export default Subcription;
