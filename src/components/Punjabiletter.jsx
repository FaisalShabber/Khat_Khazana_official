import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import HeadingDesc from "./InnerComponents/HeadingDesc";
import LetterCard from "./InnerComponents/Cards/LetterCard";
import Subcription from "./InnerComponents/Subcription";

// Dummy Data (isko API ya props se bhi le sakte ho)
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
  // 👇 extra cards
  { img: "/images/Card.webp", overlay: "/images/image 5 (1).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (6).webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5.webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (1).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (4).webp" },
];

function Punjabiletter() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const visibleCards = cards.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 12);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen  bg-cover bg-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <HeadingDesc
        headingClassName="md:text-[40px] text-center"
        heading="Punjabi Letters"
        containerClassName="mt-6"
        description="Get the latest items immediately with promo prices"
      />

      {/* Filters */}
      <div className="w-[90%] md:w-full max-w-5xl mt-10  md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {["Category", "Owner's Name", "Decade"].map((filter, idx) => (
          <div key={idx} className="flex flex-col w-full text-left">
            <span className="text-lg font-semibold text-[#704214] hover:text-black mb-2">
              By {filter}
            </span>
            <div className="flex items-center w-full border-2 border-[#704214] rounded-full px-4 py-2 bg-white/20 backdrop-blur-sm">
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

      {/* Cards */}
      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {visibleCards.map((card, i) => (
          <LetterCard
            key={i}
            to={`/letters/english/${i}`}
            img={card.img}
            overlay={card.overlay}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Loader / Load More */}
      <div className="mt-20">
        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-t-[#704214] border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : (
          visibleCount < cards.length && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 text-[#704214] font-semibold border border-[#704214] rounded-full hover:bg-[#704214] hover:text-white transition disabled:opacity-50 cursor-pointer"
              disabled={loading}
            >
              Load More
            </button>
          )
        )}
      </div>

      {/* Mailing List */}
      <div className="my-20 w-full">
        <Subcription />
      </div>
    </div>
  );
}

export default Punjabiletter;
