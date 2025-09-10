import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PhotographCard = ({
  to = "#",
  overlayImg = "/images/sample.jpg", // overlay image prop
  title = "Want more historic letters?", // heading prop
  description = "Join our archive mailing list and never miss an update.", // description prop
}) => {
  const navigate = useNavigate();

  return (
    <Link to={to} className="mx-auto">
      <div
        onClick={() => navigate(to)}
        className="relative text-center overflow-hidden  cursor-pointer w-[350px] h-[450px] rounded-[20px] p-[30px_10px] bg-[url('/images/Card.webp')] bg-cover bg-center"
      >
        {/* Frame */}
        <div className="absolute z-10 top-[30px] left-1/2 -translate-x-1/2 w-[210px] h-[300px]">
          <img
            src="/images/Vertical-Frame.webp"
            alt="Frame"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay Image */}
        <div className="absolute z-20 top-[60px] left-[105px] w-[143px] h-[238px]">
          <img
            src={overlayImg}
            alt="Overlay"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Heading */}

        <div className="absolute z-30 text-left top-[350px] left-[23px] w-[290px]">
          <h2
            className="text-[24px] sm:text-base lg:text-xl font-semibold text-black mb-1 truncate w-full "
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

export default PhotographCard;
