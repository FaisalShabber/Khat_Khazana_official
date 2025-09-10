import React from "react";
import { Link } from "react-router-dom";

const PhotographCard = ({
  to = "#",
  backgroundImg, // background image (pure card ka)
  frameImg, // frame image
  mainImg, // jo image frame ke andar show hogi
  watermarkImg, // watermark image
  title = "Want more historic letters?",
  description = "Join our archive mailing list and never miss an update.",
  className = "",
}) => {
  return (
    <Link to={to}>
      <div
        className={`relative cursor-pointer rounded-[20px] overflow-hidden w-[350px] h-[410px] group mx-auto ${className}`}
      >
        {/* 🔹 Background Image */}
        <img
          src={backgroundImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🔹 Frame Section */}
        <div className="relative w-[310px] h-[250px] mx-auto mt-[30px]">
          {/* Frame image */}
          <img
            src={frameImg}
            alt="Frame"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />

          {/* Main image inside frame */}
          <div className="absolute inset-[20px] rounded-[10px] overflow-hidden z-10">
            <img
              src={mainImg}
              alt="Main"
              className="w-full h-full object-cover rounded-[10px]"
            />

            {/* Watermark on top of main image */}
            {watermarkImg && (
              <img
                src={watermarkImg}
                alt="Watermark"
                className="absolute bottom-2 right-2 w-[60px] opacity-30 pointer-events-none"
              />
            )}
          </div>
        </div>

        {/* 🔹 Bottom Text */}
        <div
          className="absolute text-left"
          style={{
            width: "310px",
            bottom: "20px",
            left: "23px",
          }}
        >
          <h2
            className="text-[24px] sm:text-base lg:text-xl font-semibold text-black mb-1 truncate w-full"
            style={{ fontFamily: "philosopher" }}
          >
            {title}
          </h2>
          <p
            className="line-clamp-2"
            style={{
              fontFamily: "Ephesis",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              color: "#000000",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PhotographCard;
