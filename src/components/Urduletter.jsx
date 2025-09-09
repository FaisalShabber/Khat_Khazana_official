import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const cards = [
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (1).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (2).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (3).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (4).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (5).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (6).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (1).webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5.webp" },
];

function Urduletter() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
        Urdu Letters
      </h1>
      <p className="text-base sm:text-lg italic text-gray-500 mt-2 text-center max-w-xl">
        Get the latest items immediately with promo prices
      </p>

      {/* Filter Section */}
      <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {["Category", "Owner's Name", "Decade"].map((filter, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <button className="text-lg font-semibold text-[#704214] hover:text-black mb-2">
              By {filter}
            </button>
            <div className="flex items-center w-full border-2 border-[#704214] rounded-full px-4 py-2 bg-transparent backdrop-blur-sm">
              <FiSearch className="text-[#704214] mr-2" size={20} />
              <input
                type="text"
                placeholder={`Search ${filter.toLowerCase()}...`}
                className="w-full outline-none bg-transparent placeholder:text-[#704214] text-sm"
              />
            </div>
          </div>
        ))}
      </div>



      {/* Historic Letters Cards Section */}
      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, i) => (
          <Link to={`/letters/english/${i}`} key={i}>
            <div
              className="relative cursor-pointer rounded-[20px] mx-auto overflow-hidden"
              style={{ width: "364px", height: "416.34px" }}
            >
              {/* Card Background Image */}
              <img
                src={card.img}
                alt="Card Background"
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              />

              {/* Overlay Image */}
              <div className="flex justify-center z-10 pt-[30px] relative">
                <img
                  src={card.overlay}
                  alt="Overlay"
                  className="object-contain drop-shadow-lg"
                  style={{
                    width: "324px",
                    height: "252.34px",
                  }}
                />
              </div>

              {/* Bottom Text */}
              <div
                className="absolute text-left"
                style={{
                  width: "290px",
                  height: "27px",
                  top: "302.34px",
                  left: "23px",
                }}
              >
                <h2 className="text-24px sm:text-base lg:text-lg font-semibold text-black mb-1 drop-shadow">
                  Want more historic letters?
                </h2>
                <p className="font-ephesis"
                style={{
                  fontFamily: "Ephesis",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  color: "#000000",
                  margin: 0,
                }}>
                  Join our archive mailing list and never miss an update. Join our archive mailing list and never miss an update.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Simple Link */}
      <Link
        to="/more-letters"
        className="mt-8 sm:mt-10 text-[#704214] font-semibold underline hover:text-black transition"
      >
        Load More
      </Link>

      {/* Mailing List Section */}
     <div className="mt-12 flex flex-col items-center gap-4 w-full max-w-[900px] px-4 sm:px-6 lg:px-0 mx-auto">
  {/* Responsive Heading */}
  <h2
    className="text-center font-bold text-black font-philosopher"
    style={{ lineHeight: "110%" }}
  >
    {/* Desktop (50px) */}
    <span className="hidden lg:inline text-[50px]">
      Want more historic letters?
    </span>
    {/* Tablet (30px) */}
    <span className="hidden sm:inline lg:hidden text-[30px]">
      Want more historic letters?
    </span>
    {/* Mobile (22px) */}
    <span className="inline sm:hidden text-[22px]">
      Want more historic letters?
    </span>
  </h2>

  {/* Responsive Paragraph */}
  <p
    className="text-center"
    style={{
      fontFamily: "Ephesis",
      fontWeight: 400,
      color: "#000000",
      marginBottom: "25px",
    }}
  >
    {/* Desktop (50px) */}
    <span className="hidden lg:inline" style={{ fontSize: "50px", lineHeight: "100%" }}>
      Join our archive mailing list and never miss an update.
    </span>
    {/* Tablet (30px) */}
    <span className="hidden sm:inline lg:hidden" style={{ fontSize: "30px", lineHeight: "120%" }}>
      Join our archive mailing list and never miss an update.
    </span>
    {/* Mobile (22px) */}
    <span className="inline sm:hidden" style={{ fontSize: "22px", lineHeight: "120%" }}>
      Join our archive mailing list and never miss an update.
    </span>
  </p>

  {/* Email + Button (unchanged) */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 w-full">
    <input
      type="email"
      placeholder="Your email address"
      className="px-4 py-3 w-full sm:w-64 rounded-md text-stone-900 placeholder-stone-700 border border-black font-philosopher"
      style={{
        backgroundImage: "url('/images/Email bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    <ParchmentButton
      className="w-full sm:w-auto"
      onClick={() => alert("Subscribed!")}
    >
      Shop Now
    </ParchmentButton>
  </div>
</div>

    </div>
  );
}

/** ParchmentButton Component */
function ParchmentButton({
  children = "Shop Now",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "px-6 py-3 min-w-[100px] md:min-w-[120px]",
        "text-center text-lg md:text-xl font-semibold",
        "text-stone-900 drop-shadow",
        "rounded-xl shadow-md",
        "transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-amber-600/50",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "font-philosopher",
        className,
      ].join(" ")}
      style={{
        backgroundImage: "url('/images/bg button.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </button>
  );
}

export default Urduletter;
