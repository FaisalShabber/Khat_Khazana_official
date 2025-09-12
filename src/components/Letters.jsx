// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import buttonBgUrl from "/images/Card.webp";

const Latters = () => {
  const navigate = useNavigate();

  // navigate function
  const handleNavigate = (lang) => {
    if (lang === "English") navigate("/letters/english");
    if (lang === "Urdu") navigate("/letters/urdu");
    if (lang === "Punjabi") navigate("/letters/punjabi");
  };

  return (
    <main className="w-screen flex items-center justify-center h-[90vh]">
      <div className="w-screen  flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl text-black mb-8 font-['Philosopher'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          View letter by
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["English", "Urdu", "Punjabi"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleNavigate(lang)}
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
    </main>
  );
};

export default Latters;
