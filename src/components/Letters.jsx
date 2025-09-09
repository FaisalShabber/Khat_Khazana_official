// @ts-nocheck

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 navigation hook
import buttonBgUrl from "/images/bg-button.webp";

const Latters = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const navigate = useNavigate(); // 👈 useNavigate hook

  // function for navigation
  const handleNavigate = (lang) => {
    if (lang === "English") navigate("/letters/english");
    if (lang === "Urdu") navigate("/letters/urdu");
    if (lang === "Punjabi") navigate("/letters/punjabi");
  };

  return (
    <main className=" w-screen flex items-center justify-center">
      <div className="w-screen h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* First state: Only "View letters" button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              showLanguages
                ? "opacity-0 -translate-y-5 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <button
              onClick={() => setShowLanguages(true)}
              className="w-64 h-16 bg-cover bg-center flex items-center justify-center 
             text-black text-3xl font-['Ephesis'] tracking-widest rounded-3xl cursor-pointer
             shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${buttonBgUrl})` }}
            >
              <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-['Philosopher']">
                View letters
              </span>
            </button>
          </div>

          {/* Second state: Language selection */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              showLanguages
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
          >
            <h2 className="text-4xl text-black mb-8 font-['Philosopher'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              View letter by
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["English", "Urdu", "Punjabi"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleNavigate(lang)} // 👈 navigate on click
                  className="w-64 h-16 bg-cover bg-center flex items-center justify-center 
             text-black text-3xl font-['Philosopher'] tracking-widest rounded-3xl cursor-pointer
             shadow-lg transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${buttonBgUrl})` }}
                >
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {lang}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Latters;
