import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import LetterCard from "./LetterCard";
import FeaturedCard from "./FeaturedCard";

const cards = [
  {
    overlay: "/images/image1.webp",
    title: "Historic Letter 1",
    description:
      "A glimpse into the past with rare documents and timeless stories.",
  },
  {
    overlay: "/images/image2.webp",
    title: "Historic Letter 2",
    description:
      "Rare and valuable find showcasing memories of forgotten eras.",
  },
  {
    overlay: "/images/image3.webp",
    title: "Historic Letter 3",
    description:
      "Preserving history and stories through beautifully kept letters.",
  },
  {
    overlay: "/images/image4.webp",
    title: "Historic Letter 4",
    description: "Discover unseen letters that reveal unique life experiences.",
  },
  {
    overlay: "/images/image5.webp",
    title: "Historic Letter 5",
    description:
      "Historic archives providing insight into the past’s narratives.",
  },
  {
    overlay: "/images/image6.webp",
    title: "Historic Letter 6",
    description:
      "Beautifully preserved memories and letters of historical value.",
  },
  {
    overlay: "/images/image1.webp",
    title: "Historic Letter 7",
    description:
      "Timeless correspondence capturing the heart of old generations.",
  },
  {
    overlay: "/images/image2.webp",
    title: "Historic Letter 8",
    description: "Rare letters connecting us to the voices of a bygone age.",
  },
  {
    overlay: "/images/image3.webp",
    title: "Historic Letter 9",
    description: "Stories written in ink revealing untold journeys of life.",
  },
  {
    overlay: "/images/image4.webp",
    title: "Historic Letter 10",
    description:
      "Preserved messages reflecting emotions and memories of the past.",
  },
  {
    overlay: "/images/image5.webp",
    title: "Historic Letter 11",
    description:
      "Letters that document moments of love, struggle, and history.",
  },
  {
    overlay: "/images/image6.webp",
    title: "Historic Letter 12",
    description: "Unlock the past through these rare handwritten treasures.",
  },
];

const FeaturedCardSlider = () => {
  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[1270px]">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.3 },
            1440: { slidesPerView: 3.2 },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="flex justify-start">
              <FeaturedCard
                key={i}
                to={`/letters/english/${i}`}
                overlay={card.overlay} // ✅ current card ka overlay
                title={card.title || "Default Title"} // ✅ dynamic title agar ho
                description={card.description || "Default description"} // ✅ dynamic desc agar ho
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCardSlider;
