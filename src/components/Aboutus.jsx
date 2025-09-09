// @ts-nocheck
import React, { useState, useEffect } from "react";
import HeadingDesc from "./InnerComponents/HeadingDesc";
import Subcription from "./InnerComponents/Subcription";

function Aboutus() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Escape key se modal close hoga
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-start my-10 lg:my-20">
      <div className="flex flex-col gap-10 lg:gap-20 w-[95%] md:w-[90%] xl:w-[80%]  text-center ">
        {/* ✅ About Page Header Image */}
        <div>
          <img
            src="/images/About-header.webp"
            alt="About Khat-Khazana"
            className="w-full h-[200px] md:h-[300px] xl:h-[550px] object-fit rounded-xl shadow-lg"
            // onClick={() => setSelectedImage("/images/About-header.webp")}
          />
        </div>

        {/* ✅ 3 Images Grid */}
        <div className="flex flex-col md:flex-row flex-wrap  justify-center xl:items-start items-center gap-5 mb-10">
          {[
            "/images/About-1.webp",
            "/images/About-2.webp",
            "/images/About-3.webp",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`About Khat-Khazana ${i + 1}`}
              className="xl:w-fit h-[400px] xl:h-[500px] object-fill rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* ✅ Input & Button */}
        <div>
          <Subcription />
        </div>
      </div>

      {/* ✅ Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 top-14 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            {/* Close Button */}
            {/* <button
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button> */}
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Aboutus;
