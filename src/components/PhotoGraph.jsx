import React from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const cards = [
  { img: "/images/csrd.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (2).webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (2).webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/csrd.webp", overlay: "/images/image 5 (2).webp" },
];

const PhotoGraph = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-12 px-4"
      
    >
      {/* Heading */}
      <h1
        className="text-center font-philosopher font-bold"
        style={{
          width: "280px",
          height: "65px",
          fontSize: "50px",
          lineHeight: "130%",
          color: "#23262F",
          textTransform: "capitalize",
          marginBottom: "10px",
        }}
      >
        Photographs
      </h1>

      <p
        className="text-lg italic text-gray-600 text-center"
        style={{ marginBottom: "40px" }}
      >
        
      </p>

      {/* Filters */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {["Category", "Owner's Name", "Decade"].map((filter) => (
          <div key={filter} className="flex flex-col items-center">
            <button className="text-lg font-semibold text-[#704214] hover:text-black">
              By {filter}
            </button>
            <div className="flex items-center mt-3 border-2 border-[#704214] rounded-full px-4 py-2 w-full bg-transparent">
              <FiSearch className="text-[#704214] mr-2" size={20} />
              <input
                type="text"
                placeholder={`Search ${filter.toLowerCase()}...`}
                className="w-full outline-none bg-transparent placeholder:text-[#704214]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/photo/${card.id}`)}
            className="relative text-center overflow-hidden shadow-lg cursor-pointer"
            style={{
              width: "370px",
              height: "464px",
              borderRadius: "20px",
              padding: "30px 10px",
              backgroundImage: `url('/images/dev background.png-min.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Frame */}
            <div
              className="absolute z-10"
              style={{
                top: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "205.63px",
                height: "300px",
              }}
            >
              <img
                src="/images/frame-min.webp"
                alt="Frame"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Overlay Image */}
            <div
              className="absolute z-20"
              style={{
                top: "61.35px",
                left: "113px",
                width: "143px",
                height: "238px",
              }}
            >
              <img
                src={card.overlay}
                alt="Overlay"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Heading */}
            <div
              className="absolute z-30 text-left"
              style={{
                top: "350px",
                left: "23px",
                width: "290px",
                height: "27px",
              }}
            >
              <h2
                className="font-philosopher"
                style={{
                  fontFamily: "Philosopher",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#000000",
                  margin: 0,
                }}
              >
                Want more historic letters?
              </h2>
            </div>

            {/* Bottom Subtext */}
            <div
              className="absolute z-30 text-left"
              style={{
                top: "382px",
                left: "23px",
                width: "324px",
                height: "52px",
              }}
            >
              <p
                className="font-ephesis"
                style={{
                  fontFamily: "Ephesis",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  color: "#000000",
                  margin: 0,
                }}
              >
                Join our archive mailing list and never miss an update.
                Join our archive mailing list and never miss an update.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mb-12">
        <button
          style={{
            display: "inline",
            fontFamily: "Philosopher",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "130%",
            textTransform: "capitalize",
            textDecoration: "underline",
            textDecorationStyle: "solid",
            textDecorationSkipInk: "auto",
            color: "#6E4A27",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            opacity: 1,
          }}
        >
          Load More
        </button>
      </div>

      {/* Subscribe Section */}
      <div
        style={{
          width: "1440px",
          height: "300px",
          margin: "0 auto",
          background: "none", // transparent / page default
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
        }}
      >
        {/* Heading */}
        <h2
          style={{
            width: "603px",
            height: "56px",
            fontFamily: "Philosopher",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "100%",
            color: "#000000",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Want more historic letters?
        </h2>

        {/* Subtext */}
        <p
          style={{
            width: "810px",
            height: "65px",
            fontFamily: "Ephesis",
            fontWeight: 400,
            fontSize: "50px",
            lineHeight: "100%",
            color: "#000000",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Join our archive mailing list and never miss an update.
          
        </p>

        {/* Email + Button with background image */}
        <div style={{ display: "flex", gap: "16px" }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              width: "384px",
              height: "60px",
              borderRadius: "8px",
              border: "2px solid #6E4A27",
              backgroundImage: "url('/images/dev background.png-min.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#000000",
              padding: "0 12px",
              fontFamily: "Philosopher",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              opacity: 0.9,
            }}
          />
          <button
            style={{
              width: "144px",
              height: "60px",
              borderRadius: "16px",
              padding: "20px",
              backgroundImage: "url('/images/dev background.png-min.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            
              color: "#000000",
              fontFamily: "Philosopher",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGraph;
