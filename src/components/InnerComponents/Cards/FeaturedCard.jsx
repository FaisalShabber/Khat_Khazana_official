import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({
  to = "#",
  img,
  overlay,
  title = "Want more historic letters?",
  description = "Join our archive mailing list and never miss an update.",
  className = "",
  isFeatured = true, // naya prop add kiya
}) => {
  return (
    <Link to={to}>
      <div
        className={`relative cursor-pointer rounded-[20px] overflow-hidden w-[350px] h-[410px] group mx-auto ${className}`}
      >
        {/* Card Background Image */}
        <img
          src={img}
          alt="Card Background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
        />

        {/* Featured Badge */}
        {isFeatured && (
          <span
            className="absolute top-12 right-7 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md z-20"
            style={{ fontFamily: "Philosopher" }}
          >
            Featured
          </span>
        )}

        {/* Overlay Image */}
        <div className="flex justify-center z-10 pt-[30px] relative">
          <img
            src={overlay}
            alt="Overlay"
            loading="eager"
            className="object-contain group-hover:drop-shadow-xl transition-all duration-300 w-[310px] h-[250px]"
          />
        </div>

        {/* Bottom Text */}
        <div
          className="absolute text-left"
          style={{
            width: "310px",
            height: "27px",
            top: "300px",
            left: "23px",
          }}
        >
          <h2
            className="text-[24px] sm:text-base lg:text-xl font-semibold text-black mb-1 truncate w-full "
            style={{ fontFamily: "philosopher" }}
          >
            {title}
          </h2>
          <p
            className="font-ephesis line-clamp-2"
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

export default FeaturedCard;
