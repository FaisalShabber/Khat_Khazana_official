import React from "react";
import Thumbnails from "./Thumbnails";

// ✅ Demo Data
const demoData = [
  {
    id: 1,
    img: "/images/thumb1.webp",
    title: "Historic Letter #1",
  },
  {
    id: 2,
    img: "/images/thumb2.webp",
    title: "Historic Letter #2",
  },
];

const ThumbnailCards = () => {
  return (
    <div className="lg:w-[23%] xl:w-[18%]  w-full flex flex-col lg:justify-start justify-center relative items-center lg:items-start">
      {/* Heading */}
      <h2
        className="text-lg sm:text-xl font-bold mb-4 text-center"
        style={{ fontFamily: "philosopher" }}
      >
        Related Letters
      </h2>

      {/* Cards Loop */}
      <div className="w-full flex flex-col md:flex-row lg:flex-col justify-center gap-4 items-center lg:items-start">
        {demoData.map((item) => (
          // @ts-ignore
          <Thumbnails key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailCards;
