import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const cards = [
  { id: 1, overlay: "/images/image 5-min.webp", title: "Old Photo 1", desc: "This is detail of photo 1" },
  { id: 2, overlay: "/images/image 5 (1)-min.webp", title: "Old Photo 2", desc: "This is detail of photo 2" },
  { id: 3, overlay: "/images/image 5 (2).webp", title: "Old Photo 3", desc: "This is detail of photo 3" },
  { id: 4, overlay: "/images/image 5-min.webp", title: "Old Photo 4", desc: "This is detail of photo 4" },
  { id: 5, overlay: "/images/image 5 (1)-min.webp", title: "Old Photo 5", desc: "This is detail of photo 5" },
  { id: 6, overlay: "/images/image 5 (2).webp", title: "Old Photo 6", desc: "This is detail of photo 6" },
];

const PhotoGraphDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const photo = cards.find((c) => c.id === Number(id));

  if (!photo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-red-500">❌ Photo not found</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-8 px-4"
      style={{ backgroundImage: "url('/images/background img-min.webp')" }}
    >
      {/* Main Section */}
      <div
        className="relative flex flex-col w-full max-w-6xl rounded-xl overflow-hidden shadow-lg mt-4 bg-[#fdf6ec]"
        style={{
          backgroundImage: `url('/images/dev background.png-min.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[#3d2b1f] mb-6 text-center">
            Want More Historic Letters?
          </h2>

          {/* Main Image */}
          <div className="flex justify-center mb-8">
            <img
              src={photo.overlay}
              alt={photo.title}
              className="w-full max-h-[32rem] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Paragraphs + Thumbnails Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left: Paragraphs */}
            <div className="space-y-3 text-[#3d2b1f] text-justify leading-relaxed">
              <p>
                Historic documents preserving time by OAI, a special collection
                of rare military letters, diaries, and correspondence.
              </p>
              <p>
                These documents reflect personal struggles, emotions, and untold
                stories from soldiers and their families.
              </p>
              <p>
                Our archive continues to expand, ensuring that such memories are
                never lost to history.
              </p>
            </div>

            {/* Right: Vertical Thumbnails with Line */}
            <div className="flex justify-end">
              <div className="flex flex-col justify-start items-start gap-6 relative">
                {/* Decorative Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-500"></div>

                {/* Thumbnail 1 */}
                <div className="flex flex-col items-center bg-black rounded-lg p-2 shadow-md w-28 ml-6">
                  <img
                    src="/images/image 5-min.webp"
                    alt="thumb1"
                    className="w-20 h-16 object-cover rounded-md shadow-md"
                  />
                  <p className="text-white text-xs italic text-center mt-2">
                    Rare letter
                  </p>
                </div>

                {/* Thumbnail 2 */}
                <div className="flex flex-col items-center bg-black rounded-lg p-2 shadow-md w-28 ml-6">
                  <img
                    src="/images/image 5 (1)-min.webp"
                    alt="thumb2"
                    className="w-20 h-16 object-cover rounded-md shadow-md"
                  />
                  <p className="text-white text-xs italic text-center mt-2">
                    Historic notes
                  </p>
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Photographs */}
      <div className="mt-12 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-[#3d2b1f] text-center mb-8">
          Related Photographs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((c) => (
            <div
              key={c.id}
              onClick={() => navigate(`/photo/${c.id}`)}
              className="relative text-center h-[30rem] flex flex-col items-center rounded-xl overflow-hidden shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url('/images/dev background.png-min.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Frame */}
              <div className="absolute top-6 flex items-center justify-center z-10 w-full h-[65%]">
                <img
                  src="/images/frame-min.webp"
                  alt="Frame"
                  className="w-3/5 h-full object-contain"
                />
              </div>

              {/* Overlay Image */}
              <div className="absolute top-6 flex items-center justify-center z-20 w-full h-[65%]">
                <img
                  src={c.overlay}
                  alt={c.title}
                  className="w-2/5 h-full object-contain"
                />
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-10 w-full px-4 z-30">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Want more photographs?
                </h3>
                <p className="text-sm italic text-black">
                  Join our archive mailing list and never miss an update.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-10 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        ⬅ Back
      </button>
    </div>
  );
};

export default PhotoGraphDetail;
