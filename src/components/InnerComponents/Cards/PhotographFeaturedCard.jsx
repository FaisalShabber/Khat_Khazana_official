// @ts-nocheck
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PhotographFeaturedCard = ({
  to = "#",
  overlayImg, // overlay image prop
  title = "Want more historic letters?", // heading prop
  description = "Join our archive mailing list and never miss an update.", // description prop
  isFeatured = true, // naya prop add kiya
}) => {
  const navigate = useNavigate();

  return (
    <Link to={to} className="">
      <div
        onClick={() => navigate(to)}
        className="relative text-center overflow-hidden cursor-pointer w-[350px] h-[410px] rounded-[20px] p-[30px_10px] bg-[url('/images/Card.webp')] bg-cover bg-center"
      >
        {/* Featured Badge */}
        {isFeatured && (
          <span
            className="absolute top-24 right-16 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md z-40"
            style={{ fontFamily: "Philosopher" }}
          >
            Featured
          </span>
        )}

        {/* Frame */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[300px] h-[250px] z-30">
          <img
            src="/images/Horizantal-Frame.webp"
            alt="Frame"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay Container */}
        <div className="absolute z-20 top-[60px] left-[50px] w-[250px] h-[180px]">
          {/* Overlay Image */}
          <img
            src={overlayImg}
            alt="Overlay"
            className="w-full h-full object-cover"
          />

          {/* ✅ Watermark Image */}
          <img
            src="/images/Vector.webp" // apni watermark image ka path
            alt="Watermark"
            className="absolute top-2 left-8 w-[180px] h-[180px] object-contain  opacity-20 pointer-events-none select-none"
          />
        </div>

        {/* Bottom Heading */}
        <div className="absolute z-30 text-left top-[290px] left-[30px] w-[290px]">
          <h2
            className="text-[24px] sm:text-base lg:text-xl font-semibold text-black mb-1 truncate w-full"
            style={{ fontFamily: "philosopher" }}
          >
            {title}
          </h2>
          <p
            className="font-ephesis text-[20px] leading-[100%] text-black line-clamp-2"
            style={{ fontFamily: "Ephesis" }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PhotographFeaturedCard;
