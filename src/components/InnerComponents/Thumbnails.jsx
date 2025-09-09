import React, { useState } from "react";

const Thumbnails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const caption = "Join our archive mailing list and never miss an update.";

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail Card */}
      <div
        onClick={handleOpen}
        className="w-[180px] sm:w-[200px] h-[200px] rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-transform relative"
      >
        {/* Background Image */}
        <img
          src="/images/thumbnails.webp"
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />

        {/* Caption Overlay */}
        <p
          className="absolute bottom-0 left-0 w-full text-[12px] font-semibold text-white italic px-2 py-1 text-center bg-black/80"
          style={{ fontFamily: "'Ephesis'" }}
        >
          {caption}
        </p>
      </div>

      {/* Modal / Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 top-10 bg-black/95 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative rounded-lg overflow-hidden max-w-[70vw] max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Image */}
            <img
              src="/images/thumbnails.webp"
              alt="Thumbnail Full"
              className="w-full h-full max-h-[80vh] object-cover"
            />

            {/* Caption Overlay */}
            <p
              className="absolute bottom-0 left-0 w-full text-white text-xl lg:text-3xl  px-2 py-3 lg:py-5 text-center bg-black/80"
              style={{ fontFamily: "'Ephesis'" }}
            >
              {caption}
            </p>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white text-black rounded-full px-2 py-1 text-xs shadow cpursor-pointer hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Thumbnails;
