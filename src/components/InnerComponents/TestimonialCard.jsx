import React from "react";
import FeaturedCard from "./Cards/FeaturedCard";
import PhotographCard from "./Cards/PhotographCard";
import PhotographFeaturedCard from "./Cards/PhotographFeaturedCard";

// Dummy Data (isko API ya props se bhi le sakte ho)
const cards = [
  {
    img: "/images/Card.webp",
    overlay: "/images/Group 1000005552 (1).webp",
    title: "Want more historic letters?",
    description: "Join our archive mailing list and never miss an update.",
  },
];

const TestimonialCard = ({ name, designation, description }) => {
  // cards[0] ko ek variable mai store kar liya
  const card = cards[0];

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10 xl:w-[1230px] xl:h-[460px] w-full h-full mx-auto rounded-[20px] border-2 border-[#6E4A27] px-5 xl:px-[80px] py-[20px]">
      {/* Text Block */}
      <div className="flex flex-col justify-center items-start gap-2 w-fit text-left">
        <span className=" text-[20px] font-bold font-[Philosopher] text-[#23262F]">
          {name}
        </span>
        <span className="text-[16px] font-bold font-[Philosopher] text-[#23262F] opacity-50">
          {designation}
        </span>

        <p className="mt-5 lg:mt-10 xl:w-[570px] text-[28px] leading-[140%] text-[#23262F] font-[Ephesis] font-normal">
          {description}
        </p>
      </div>

      {/* Right Image Block */}

      <FeaturedCard
        img={card.img}
        overlay={card.overlay}
        title={card.title}
        description={card.description}
      />

     
    </div>
  );
};

export default TestimonialCard;
