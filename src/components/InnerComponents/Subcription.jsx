import React from "react";
import HeadingDesc from "./HeadingDesc";

const Subcription = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <HeadingDesc
        headingClassName="text-[40px]"
        heading="Want more historic letters?"
        description="Join our archive mailing list and never miss an update."
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <input
          type="email"
          placeholder="Your email address"
          className="
              px-4 py-3 w-[300px] rounded-lg
              text-stone-900 placeholder-stone-700
              bg-cover bg-center border-[#6E4A27] border-2
              font-philosopher
            "
          style={{ backgroundImage: "url('/images/Email bg.webp')" }}
        />

        <ParchmentButton onClick={() => alert("Subscribed!")}>
          Shop Now
        </ParchmentButton>
      </div>
    </div>
  );
};

/**
 * ParchmentButton
 */
function ParchmentButton({
  children = "Shop Now",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      // @ts-ignore
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "px-4 py-3",
        "min-w-[100px] md:min-w-[80px]",
        "text-center",
        "text-lg md:text-xl font-semibold",
        "text-stone-900 drop-shadow cursor-pointer",
        "bg-center bg-no-repeat bg-cover",
        "rounded-lg shadow-md",
        "transition-transform duration-200 ease-out",
        "hover:scale-[1.02]",
        "active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-amber-600/50",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "font-philosopher", // 👈 Button text Philosopher
        className,
      ].join(" ")}
      style={{
        backgroundImage: "url('/images/bg-button.webp')",
      }}
    >
      {children}
    </button>
  );
}

export default Subcription;
