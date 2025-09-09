import React from "react";

export default function ContactUs() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-start"
      style={{
        fontFamily: "Philosopher, sans-serif",
        textTransform: "capitalize",
      }}
    >
      <section className="bg-transparent rounded-[16px] flex flex-col md:flex-row p-[35px] gap-[53px] w-full max-w-[1311px] h-auto md:h-[781px]">
        {/* LEFT: How to Contact Us */}
        <div className="flex-1 relative md:h-full border rounded-[16px] overflow-hidden">
          {/* ✅ Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Union.webp')" }}
          ></div>

          {/* ✅ Content */}
          <div className="relative w-full py-10 px-6 flex justify-center items-center">
            <div className="w-full max-w-lg text-center md:text-left">
              <h2 className="text-[22px] font-semibold text-neutral-900 mb-3">
                How to Contact Us
              </h2>
              <p
                className="text-[14px] text-black leading-5 italic mb-4"
                style={{ fontFamily: "'Ephesis', cursive" }}
              >
                We welcome your questions, comments, and feedback. Please choose
                a way to get in touch, or fill out the form.
              </p>

              <div className="space-y-3 text-[14px]">
                <div>
                  <div className="font-semibold text-neutral-900">
                    General Email:
                  </div>
                  <div
                    className="font-[500] italic"
                    style={{ fontFamily: "'Ephesis', cursive" }}
                  >
                    khatkhazana25@heritage.com
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-900">
                    Email Brian Wilson directly:
                  </div>
                  <div
                    className="font-[500] italic"
                    style={{ fontFamily: "'Ephesis', cursive" }}
                  >
                    khatkhazana@bwilson.com
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-900">
                    By Phone:
                  </div>
                  <div
                    className="font-[500] italic"
                    style={{ fontFamily: "'Ephesis', cursive" }}
                  >
                    (830) 675-1718
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-900">
                    By Snailmail:
                  </div>
                  <div
                    className="font-[500] italic leading-6"
                    style={{ fontFamily: "'Ephesis', cursive" }}
                  >
                    Khat Khazana, c/o Zip
                    <br />
                    P.O. Box 1877
                    <br />
                    Khat Khazana, TX 9000-1847 US
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form className="flex-1 flex flex-col justify-start gap-[10px] relative border">
          {/* Form background image */}
          <img
            src="/images/form-bg.webp"
            alt="Form Background"
            className="absolute top-0 left-0 w-full max-w-[522px] h-[400px] md:h-[687px] md:w-[522px] object-cover rounded-[16px] -z-10"
          />

          {/* Top row */}
          <div className="grid md:grid-cols-2 gap-3 relative z-10">
            <Field label="Name" required />
            <Field label="Email" type="email" required />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-3 mt-3 relative z-10">
            <Field label="Country" />
            <Field label="Phone" type="tel" />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-3 mt-3 relative z-10">
            <Field label="City" required />
            <Field label="State" required />
            <Field label="Zip" />
          </div>

          {/* Address */}
          <div className="mt-3 relative z-10">
            <Field label="Address" required />
          </div>

          {/* Message */}
          <div className="mt-3 relative z-10">
            <label className="block text-[13px] font-medium text-black mb-1">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full rounded-md bg-transparent border border-black/30 px-3 py-2 text-[13px] text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-black/15 focus:border-black/50 shadow-sm"
            />
          </div>

          {/* Checkbox */}
          <label className="mt-3 flex items-start gap-2 text-[12.5px] text-black relative z-10">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-black/40 accent-[#5a3c1e]"
            />
            <span>
              Yes, please put me on your email list
              <br />
              <em className="text-neutral-700">
                (We will never share your email address with anyone.)
              </em>
            </span>
          </label>

          {/* Button */}
          <div className="mt-4 relative z-10">
            <button
              type="submit"
              className="w-full md:w-[666px] h-[56px] rounded-[10px] bg-[#5a3c1e] text-white text-[14px] px-[20px] py-[10px] shadow-md hover:bg-[#3f2b15] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

/** Reusable input field */
function Field({ label, required, type = "text" }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-black mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        required={required}
        className="w-full rounded-md bg-transparent border border-black/30 px-3 py-2 text-[13px] text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-black/15 focus:border-black/50 shadow-sm"
      />
    </div>
  );
}
