import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import LetterCard from "./LetterCard";
import PhotographCard from "./PhotographCard";

const cards = [
  {
    img: "/images/Card.webp",
    overlay: "/images/image1.webp",
    title: "Want more historic letters?",
    description: "Join our archive mailing list and never miss an update.",
  },
  {
    img: "/images/Card.webp",
    overlay: "/images/image2.webp",
    title: "Exclusive Archive",
    description: "Discover unique historic letters curated for you.",
  },
  {
    img: "/images/Card.webp",
    overlay: "/images/image3.webp",
    title: "Stay Updated",
    description: "Be the first to receive our new letter collections.",
  },
  {
    img: "/images/Card.webp",
    overlay: "/images/image4.webp",
    title: "More Insights",
    description: "Explore the untold stories in our collection.",
  },
];

const PhotogaphCards = () => {
  return (
    <div className="mt-14 w-full flex justify-start ">
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
              <PhotographCard
                key={card.id}
                to={`/PhotoGraphs/${i}`}
                overlayImg={card?.overlay}
                title={card.title}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotogaphCards;
