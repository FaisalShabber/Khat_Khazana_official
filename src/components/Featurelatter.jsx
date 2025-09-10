// @ts-nocheck
import React from "react";
import csrd from "/images/Card.webp";
import img1 from "/images/img1.webp";
import img2 from "/images/img2.webp";
import img3 from "/images/img3.webp";
import img4 from "/images/img4.webp";
import img5 from "/images/img5.webp";
import vector from "/images/Vector.webp";
import frame from "/images/Vertical-Frame.webp";
import searc from "/images/searc.webp";
import "../index.css"; // CSS for hiding scrollbar

const Featurelatter = () => {
  const baseWidth = 1440;
  const baseHeight = 3556.63;
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(1, window.innerWidth / baseWidth);
      setScale(newScale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen  text-black">
      {/* Animated Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
        ⚙️ Under Process...
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-2xl text-center mb-8">
        Work in progress — about 70% to 80% complete
      </p>

      {/* Progress Bar */}
      <div className="w-64 bg-white/30 rounded-full h-5 overflow-hidden">
        <div className="bg-green-400 h-5 animate-[progress_3s_ease-in-out_infinite]" 
             style={{ width: "75%" }}></div>
      </div>

      {/* Loader */}
      <div className="mt-10 w-14 h-14 border-4 border-[#6E4A27] border-t-transparent rounded-full animate-spin"></div>
    </div>
      <div className="relative hidden">
        <div className=" flex items-center justify-center">
          <h1
            className="font-bold text-[50px] leading-[130%] capitalize"
            style={{ fontFamily: "Philosopher", color: "#23262F" }}
          >
            Featured Letter
          </h1>
        </div>

        <div
          className="absolute left-0 w-[1440px] h-[300px]"
          style={{
            top: "2740.93px",
            opacity: 1,
            boxSizing: "border-box",
          }}
        >
          <div className="h-full flex flex-col items-center justify-center gap-4 px-4">
            <h2
              className="font-bold text-2xl sm:text-4xl lg:text-[50px] leading-[100%] text-center"
              style={{ fontFamily: "Philosopher, serif", color: "#000000" }}
            >
              Want more historic letters?
            </h2>

            <p
              className="text-lg sm:text-2xl leading-[100%] text-center"
              style={{ fontFamily: "Ephesis, cursive", color: "#000000" }}
            >
              Join our archive mailing list and never miss an update.
            </p>

            <div className="w-full max-w-xl flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-[60px] rounded-md border-2 border-[#6E4A27] bg-transparent px-5 text-base"
                style={{
                  backgroundImage: `url(${searc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  fontFamily: "Philosopher, serif",
                  color: "#23262F",
                }}
              />
              <button
                className="h-[60px] w-[144px] rounded-[16.25px] text-black text-xl flex items-center justify-center"
                style={{
                  backgroundImage: `url(${searc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  fontFamily: "Philosopher, serif",
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* View All for More Featured photographs */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: "89px",
            height: "31px",
            top: "2051.67px",
            left: "1251px",
            opacity: 1,
            boxSizing: "border-box",
          }}
        >
          <span
            className="font-bold text-[24px] leading-[130%] capitalize"
            style={{
              fontFamily: "Philosopher",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textTransform: "capitalize",
              color: "var(--dark-barown, #6E4A27)",
            }}
          >
            View All
          </span>
        </div>

        {/* Main Section */}
        <div
          className="absolute"
          style={{
            width: "1234px",
            height: "456.336px",
            top: "261px",
            left: "103px",
            borderRadius: "20px",
            padding: "20px 100px",
            gap: "100px",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#6E4A27",
            position: "relative",
          }}
        >
          {/*  Text Block */}
          <div
            style={{
              position: "absolute",
              top: "84.17px",
              left: "100px",
              width: "230px",
              height: "48px",
              opacity: 1,
              transform: "rotate(0deg)",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "93px",
                height: "20px",
                transform: "rotate(0deg)",
                opacity: 1,
                fontFamily: "Philosopher, serif",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#23262F",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Josh Smith
            </span>
            <span
              style={{
                position: "absolute",
                top: "28px",
                left: "0px",
                width: "230px",
                height: "16px",
                transform: "rotate(0deg)",
                opacity: 0.5,
                fontFamily: "Philosopher, serif",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#23262F",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Manager of The New York Times
            </span>
          </div>

          {/* Testimonial / Quote Block */}
          <div
            className="absolute"
            style={{
              width: "570px",
              height: "195px",
              top: "177.17px",
              left: "100px",
            }}
          >
            <p
              className="text-[28px] leading-[140%]"
              style={{
                fontFamily: "Ephesis",
                fontWeight: 400,
                color: "#23262F",
              }}
            >
              “They are have a perfect touch for make something so professional,
              interest and useful for a lot of people. They are have a perfect
              touch for make something so professional, interest and useful for
              a lot of people. They are have a perfect touch for make something
              so professional, interest and useful for a lot of people.”
            </p>
          </div>

          {/* Right Image Block with Vector and Text nested */}
          <div
            className="absolute w-[364px] h-[416.336px] rounded-[20px] p-[30px_20px] gap-[20px]"
            style={{
              top: "20px",
              left: "770px",
              backgroundImage: `url(${csrd})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Vector inside the right image block */}
            <div
              className="absolute"
              style={{
                width: "213.077px",
                height: "180px",
                top: "66px",
                left: "75px",
                backgroundImage: `url(${vector})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.2,
              }}
            ></div>

            {/* Nested Image inside the csrd block */}
            <div
              className="absolute w-[324px] h-[252.336px] rounded-[5px]"
              style={{
                top: "30px",
                left: "20px",
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="absolute"
              style={{
                width: "213.077px",
                height: "180px",
                top: "66px",
                left: "75px",
                backgroundImage: `url(${vector})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.2,
              }}
            ></div>
            {/* First Text Block inside Right Image Block */}
            <div
              className="absolute"
              style={{
                width: "290px",
                height: "27px",
                top: "302.34px",
                left: "20px",
              }}
            >
              <span
                className="font-bold text-[24px] leading-[100%]"
                style={{ fontFamily: "Philosopher", color: "#000000" }}
              >
                Want more historic letters?
              </span>
            </div>

            {/* Second Text Block inside Right Image Block */}
            <div
              className="absolute"
              style={{
                width: "324px",
                height: "52px",
                top: "334.34px",
                left: "20px",
              }}
            >
              <span
                className="text-[20px] leading-[100%]"
                style={{
                  fontFamily: "Ephesis",
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                Join our archive mailing list and never miss an update.
              </span>
            </div>
          </div>
        </div>

        {/* More Featured photographs Heading (requested) */}
        <div
          className="absolute"
          style={{
            width: "616px",
            height: "65px",
            top: "2017.67px",
            left: "100px",
            opacity: 1,
          }}
        >
          <span
            className="font-bold text-[50px] leading-[130%] capitalize"
            style={{
              fontFamily: "Philosopher",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "50px",
              lineHeight: "130%",
              letterSpacing: "0%",
              color: "#23262F",
              textTransform: "capitalize",
            }}
          >
            more Featured photographs
          </span>
        </div>
        {/* New featured photographs container (requested layout) */}
        <div
          className="absolute"
          style={{
            width: "1240px",
            height: "404.0352783203125px",
            top: "2132.89px",
            left: "100px",
            gap: "30px",
            transform: "rotate(0deg)",
            opacity: 1,
            boxSizing: "border-box",
          }}
        >
          {/* Horizontal scroll wrapper: shows >3 cards by sliding */}
          <div
            className="overflow-x-auto scrollbar-none"
            style={{
              position: "absolute",
              top: "20px",
              left: "0px",
              width: "1240px",
              paddingLeft: "10px",
              paddingRight: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex gap-[30px]" style={{ height: "416.336px" }}>
              {/* Card 1 */}
              <div
                className="flex-shrink-0 relative rounded-[20px] p-[30px_10px]"
                style={{
                  width: "364px",
                  height: "416.336px",
                  backgroundImage: `url(${csrd})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "10px",
                    width: "350.1054992675781px",
                    height: "240.03529357910156px",
                    backgroundImage: `url(${frame})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "65.81px",
                    left: "44px",
                    width: "282px",
                    height: "168px",
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "290.04px",
                    left: "23.05px",
                    width: "290px",
                    height: "27px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Philosopher, serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "100%",
                      color: "#000000",
                    }}
                  >
                    Want more historic letters?
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "322.04px",
                    left: "23.05px",
                    width: "324px",
                    height: "52px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Ephesis, cursive",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      color: "#000000",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {
                      "Join our archive mailing list and never miss an update.\nJoin our archive mailing list and never miss an update."
                    }
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="flex-shrink-0 relative rounded-[20px] p-[30px_10px]"
                style={{
                  width: "364px",
                  height: "416.336px",
                  backgroundImage: `url(${csrd})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "10px",
                    width: "350.1054992675781px",
                    height: "240.03529357910156px",
                    backgroundImage: `url(${frame})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "65.81px",
                    left: "44px",
                    width: "282px",
                    height: "168px",
                    backgroundImage: `url(${img4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "290.04px",
                    left: "23.05px",
                    width: "290px",
                    height: "27px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Philosopher, serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "100%",
                      color: "#000000",
                    }}
                  >
                    Want more historic letters?
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "322.04px",
                    left: "23.05px",
                    width: "324px",
                    height: "52px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Ephesis, cursive",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      color: "#000000",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {
                      "Join our archive mailing list and never miss an update.\nJoin our archive mailing list and never miss an update."
                    }
                  </span>
                </div>
              </div>
              <div
                className="flex-shrink-0 relative rounded-[20px] p-[30px_10px]"
                style={{
                  width: "364px",
                  height: "416.336px",
                  backgroundImage: `url(${csrd})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "10px",
                    width: "350.1054992675781px",
                    height: "240.03529357910156px",
                    backgroundImage: `url(${frame})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "65.81px",
                    left: "44px",
                    width: "282px",
                    height: "168px",
                    backgroundImage: `url(${img4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "290.04px",
                    left: "23.05px",
                    width: "290px",
                    height: "27px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Philosopher, serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "100%",
                      color: "#000000",
                    }}
                  >
                    Want more historic letters?
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "322.04px",
                    left: "23.05px",
                    width: "324px",
                    height: "52px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Ephesis, cursive",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      color: "#000000",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {
                      "Join our archive mailing list and never miss an update.\nJoin our archive mailing list and never miss an update."
                    }
                  </span>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="flex-shrink-0 relative rounded-[20px] p-[30px_10px]"
                style={{
                  width: "364px",
                  height: "416.336px",
                  backgroundImage: `url(${csrd})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "10px",
                    width: "350.1054992675781px",
                    height: "240.03529357910156px",
                    backgroundImage: `url(${frame})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "65.81px",
                    left: "44px",
                    width: "282px",
                    height: "168px",
                    backgroundImage: `url(${img5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxSizing: "border-box",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "290.04px",
                    left: "23.05px",
                    width: "290px",
                    height: "27px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Philosopher, serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "100%",
                      color: "#000000",
                    }}
                  >
                    Want more historic letters?
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "322.04px",
                    left: "23.05px",
                    width: "324px",
                    height: "52px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Ephesis, cursive",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      color: "#000000",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {
                      "Join our archive mailing list and never miss an update.\nJoin our archive mailing list and never miss an update."
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Featured Letters Heading */}
        <div
          className="absolute"
          style={{
            width: "494px",
            height: "65px",
            top: "797.34px",
            left: "100px",
          }}
        >
          <span
            className="font-bold text-[50px] leading-[130%] capitalize"
            style={{ fontFamily: "Philosopher", color: "#23262F" }}
          >
            More Featured Letters
          </span>
        </div>

        {/* View All button */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: "89px",
            height: "31px",
            top: "831.34px",
            left: "1251px",
          }}
        >
          <span
            className="font-bold text-[24px] leading-[130%] capitalize"
            style={{
              fontFamily: "Philosopher",
              color: "#6E4A27",
              letterSpacing: "0%",
            }}
          >
            View All
          </span>
        </div>

        {/* Slider / Carousel for cards */}
        <div className="absolute w-[1240px] h-[416.336px] top-[912.34px] left-[100px] overflow-x-auto scrollbar-none">
          <div className="flex gap-[30px]">
            {/* Cards (same as before) */}
            {/* First Card */}

            <div
              className="flex-shrink-0 relative rounded-[20px] p-[30px_20px]"
              style={{
                width: "364px",
                height: "416.336px",
                backgroundImage: `url(${csrd})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-[324px] h-[252.336px] rounded-[5px]"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "213.077px",
                  height: "180px",
                  top: "66px",
                  left: "75px",
                  backgroundImage: `url(${vector})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.2,
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "290px",
                  height: "27px",
                  top: "302.34px",
                  left: "20px",
                }}
              >
                <span
                  className="font-bold text-[24px] leading-[100%]"
                  style={{ fontFamily: "Philosopher", color: "#000000" }}
                >
                  Want more historic letters?
                </span>
              </div>

              {/* Second Text Block inside Right Image Block */}
              <div
                className="absolute"
                style={{
                  width: "324px",
                  height: "52px",
                  top: "334.34px",
                  left: "20px",
                }}
              >
                <span
                  className="text-[20px] leading-[100%]"
                  style={{
                    fontFamily: "Ephesis",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Join our archive mailing list and never miss an update. Join
                  our archive mailing list and never miss an update.
                </span>
              </div>
            </div>
            <div
              className="flex-shrink-0 relative rounded-[20px] p-[30px_20px] gap-[20px]"
              style={{
                width: "364px",
                height: "416.336px",
                backgroundImage: `url(${csrd})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Frame */}
              <div
                className="absolute"
                style={{
                  width: "350.105px",
                  height: "240.035px",
                  top: "30px",
                  left: "10px",
                  backgroundImage: `url(${frame})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Nested img2 */}
              <div
                className="absolute"
                style={{
                  width: "282px",
                  height: "168px",
                  top: "65.81px",
                  left: "44px",
                  backgroundImage: `url(${img2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "290px",
                  height: "27px",
                  top: "302.34px",
                  left: "20px",
                }}
              >
                <span
                  className="font-bold text-[24px] leading-[100%]"
                  style={{ fontFamily: "Philosopher", color: "#000000" }}
                >
                  Want more historic letters?
                </span>
              </div>

              {/* Second Text Block inside Right Image Block */}
              <div
                className="absolute"
                style={{
                  width: "324px",
                  height: "52px",
                  top: "334.34px",
                  left: "20px",
                }}
              >
                <span
                  className="text-[20px] leading-[100%]"
                  style={{
                    fontFamily: "Ephesis",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Join our archive mailing list and never miss an update. Join
                  our archive mailing list and never miss an update.
                </span>
              </div>
            </div>
            <div
              className="flex-shrink-0 relative rounded-[20px] p-[30px_20px] gap-[20px]"
              style={{
                width: "364px",
                height: "416.336px",
                backgroundImage: `url(${csrd})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Frame */}
              <div
                className="absolute"
                style={{
                  width: "350.105px",
                  height: "240.035px",
                  top: "30px",
                  left: "10px",
                  backgroundImage: `url(${frame})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Nested img2 */}
              <div
                className="absolute"
                style={{
                  width: "282px",
                  height: "168px",
                  top: "65.81px",
                  left: "44px",
                  backgroundImage: `url(${img2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "290px",
                  height: "27px",
                  top: "302.34px",
                  left: "20px",
                }}
              >
                <span
                  className="font-bold text-[24px] leading-[100%]"
                  style={{ fontFamily: "Philosopher", color: "#000000" }}
                >
                  Want more historic letters?
                </span>
              </div>

              {/* Second Text Block inside Right Image Block */}
              <div
                className="absolute"
                style={{
                  width: "324px",
                  height: "52px",
                  top: "334.34px",
                  left: "20px",
                }}
              >
                <span
                  className="text-[20px] leading-[100%]"
                  style={{
                    fontFamily: "Ephesis",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Join our archive mailing list and never miss an update. Join
                  our archive mailing list and never miss an update.
                </span>
              </div>
            </div>
            <div
              className="flex-shrink-0 relative rounded-[20px] p-[30px_20px] gap-[20px]"
              style={{
                width: "364px",
                height: "416.336px",
                backgroundImage: `url(${csrd})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Frame */}
              <div
                className="absolute"
                style={{
                  width: "350.105px",
                  height: "240.035px",
                  top: "30px",
                  left: "10px",
                  backgroundImage: `url(${frame})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Nested img2 */}
              <div
                className="absolute"
                style={{
                  width: "282px",
                  height: "168px",
                  top: "65.81px",
                  left: "44px",
                  backgroundImage: `url(${img2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "290px",
                  height: "27px",
                  top: "302.34px",
                  left: "20px",
                }}
              >
                <span
                  className="font-bold text-[24px] leading-[100%]"
                  style={{ fontFamily: "Philosopher", color: "#000000" }}
                >
                  Want more historic letters?
                </span>
              </div>

              {/* Second Text Block inside Right Image Block */}
              <div
                className="absolute"
                style={{
                  width: "324px",
                  height: "52px",
                  top: "334.34px",
                  left: "20px",
                }}
              >
                <span
                  className="text-[20px] leading-[100%]"
                  style={{
                    fontFamily: "Ephesis",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Join our archive mailing list and never miss an update. Join
                  our archive mailing list and never miss an update.
                </span>
              </div>
            </div>

            {/* ...Other Cards Same As Before */}
          </div>
        </div>

        {/* Featured Photograph Heading */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: "464px",
            height: "65px",
            top: "1396.37px",
            left: "100px",
            opacity: 1,
          }}
        >
          <h1
            className="font-bold text-[50px] leading-[130%] capitalize"
            style={{
              fontFamily: "Philosopher",
              fontWeight: 700,
              fontStyle: "bold",
              color: "#23262F",
              letterSpacing: "0%",
            }}
          >
            Featured Photograph
          </h1>
        </div>

        {/* Featured Photograph Section */}
        <div
          className="absolute"
          style={{
            width: "1240.105px",
            height: "444.035px",
            top: "1493.63px",
            left: "99.95px",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingRight: "100px",
            paddingBottom: "20px",
            paddingLeft: "100px",
            gap: "100px",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#6E4A27",
            opacity: 1,
          }}
        >
          {/* Layout block requested: width 230, height 48, top 78.02px, left 100px */}
          <div
            style={{
              position: "absolute",
              top: "78.02px",
              left: "100px",
              width: "230px",
              height: "48px",
              transform: "rotate(0deg)",
              opacity: 1,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "93px",
                height: "20px",
                transform: "rotate(0deg)",
                opacity: 1,
                fontFamily: "Philosopher, serif",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#23262F",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Josh Smith
            </span>
            <span
              style={{
                position: "absolute",
                top: "28px",
                left: "0px",
                width: "230px",
                height: "16px",
                transform: "rotate(0deg)",
                opacity: 0.5,
                fontFamily: "Philosopher, serif",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#23262F",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Manager of The New York Times
            </span>
          </div>
          {/* New photographic card block (background: csrd) */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "770px",
              width: "370.1054992675781px",
              height: "404.0352783203125px",
              transform: "rotate(0deg)",
              opacity: 1,
              borderRadius: "20px",
              paddingTop: "30px",
              paddingRight: "10px",
              paddingBottom: "30px",
              paddingLeft: "10px",
              gap: "20px",
              backgroundImage: `url(${csrd})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "10px",
                width: "350.1054992675781px",
                height: "240.03529357910156px",
                transform: "rotate(0deg)",
                opacity: 1,
                backgroundImage: `url(${frame})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxSizing: "border-box",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "290.04px",
                left: "23.05px",
                width: "290px",
                height: "27px",
                transform: "rotate(0deg)",
                opacity: 1,
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: "Philosopher, serif",
                  fontWeight: 700,
                  fontStyle: "bold",
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                Want more historic letters?
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: "322.04px",
                left: "23.05px",
                width: "324px",
                height: "52px",
                transform: "rotate(0deg)",
                opacity: 1,
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: "Ephesis, cursive",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                  whiteSpace: "pre-wrap",
                }}
              >
                {
                  "Join our archive mailing list and never miss an update.\nJoin our archive mailing list and never miss an update."
                }
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: "65.81px",
                left: "44px",
                width: "282px",
                height: "168px",
                transform: "rotate(0deg)",
                opacity: 1,
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxSizing: "border-box",
              }}
            ></div>
          </div>
          {/* New content block inside Featured Photograph Section */}
          <div
            style={{
              position: "absolute",
              top: "171.02px",
              left: "100px",
              width: "570px",
              height: "195px",
              transform: "rotate(0deg)",
              opacity: 1,
              fontFamily: "Ephesis, cursive",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "140%",
              letterSpacing: "0%",
              color: "#23262F",
              boxSizing: "border-box",
              whiteSpace: "pre-wrap",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: 0,
              margin: 0,
            }}
          >
            “They are have a perfect touch for make something so professional
            ,interest and useful for a lot of people .They are have a perfect
            touch for make something so professional ,interest and useful for a
            lot of people .They are have a perfect touch for make something so
            professional ,interest and useful for a lot of people ”
          </div>
          {/* Example inner content */}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#23262F",
              fontFamily: "Philosopher",
              fontSize: "28px",
              fontWeight: 700,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Featurelatter;
