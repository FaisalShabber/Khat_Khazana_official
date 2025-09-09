import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { createPortal } from "react-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";

const linkBase =
  "text-black text-base tracking-[0.2px] hover:underline underline-offset-4 whitespace-nowrap";
const linkActive = "font-bold underline";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `${linkBase} ${isActive ? linkActive : ""}`;

  // Languages
  const LANGS = [
    { code: "GB", label: "English" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
    { code: "PK", label: "Urdu" },
  ];
  const [lang, setLang] = useState(LANGS[0]);

  // Flags dropdown
  const [flagOpen, setFlagOpen] = useState(false);
  const flagBtnRef = useRef(null);
  const [flagPos, setFlagPos] = useState({ top: 0, left: 0 });

  const toggleFlag = () => {
    const r = flagBtnRef.current?.getBoundingClientRect();
    if (r)
      setFlagPos({
        top: r.bottom + 8,
        left: Math.max(8, r.right - 160),
      });
    setFlagOpen((v) => !v);
  };

  useEffect(() => {
    if (!flagOpen) return;
    const onClick = (e) => {
      if (!flagBtnRef.current) return;
      if (e.target instanceof Node && !flagBtnRef.current.contains(e.target))
        setFlagOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setFlagOpen(false);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onEsc);
    };
  }, [flagOpen]);

  // Nav links
  const NAV_LINKS = [
    { to: "/about", label: "About Us" },
    { to: "/letters", label: "Letters" },
    { to: "/photographs", label: "Photographs" },
    { to: "/featured", label: "Featured letters & Photographs" },
    { to: "/contact", label: "Contact Us" },
    { to: "/submission", label: "Submission" },
    { to: "/shop", label: "Shop" },
  ];

  // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[999] bg-no-repeat bg-top"
      style={{
        fontFamily: "Philosopher, sans-serif",
        backgroundImage: "url('/images/navbar-bg.webp')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto w-full Padding-container px-4 lg:px-6 py-2 flex items-center justify-between z-50">
        {/* LEFT: Logo */}
        <Link
          to="/"
          className="flex items-center mt-[10px] min-w-0"
          aria-label="Home"
        >
          <img
            src="/images/main-logo.webp"
            alt="Logo"
            className="h-[60px] w-fit object-contain"
          />
        </Link>

        {/* CENTER: Desktop nav */}
        <nav
          className="hidden xl:flex items-center justify-center gap-x-6 flex-1"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT: Search + Flag + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative hidden sm:flex items-center rounded-full"
            style={{
              width: "140px",
              height: "40px",
              border: "1.5px solid",
            }}
          >
            <input
              type="search"
              aria-label="Search"
              className="w-full h-full pl-8 pr-2 bg-transparent outline-none text-base"
              placeholder="Search..."
            />
            <LuSearch className="absolute left-2 text-black text-xl" />
          </form>

          {/* Flag Dropdown */}
          <button
            ref={flagBtnRef}
            type="button"
            onClick={toggleFlag}
            className="flex items-center gap-1"
            aria-haspopup="listbox"
            aria-expanded={flagOpen}
            title={lang.label}
          >
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
              <ReactCountryFlag
                countryCode={lang.code}
                svg
                style={{ width: "100%", height: "100%" }}
                className="rounded-full object-cover"
              />
            </div>
            <MdOutlineKeyboardArrowDown size={16} />
          </button>

          {/* Hamburger (mobile right) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="xl:hidden relative w-8 h-8 flex items-center justify-center border-black/10 text-black"
          >
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu (slide in from left) */}
      <div
        id="mobile-nav"
        className={`xl:hidden fixed top-0 left-0 h-full rounded-br-4xl rounded-tr-4xl w-[80%] bg-[#F7DBB9] shadow-2xl shadow-black/50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* 🔹 Logo Section */}
        <div className="flex justify-center items-center mt-6 mb-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/main-logo.webp"
              alt="Logo"
              className="h-[60px] object-contain"
            />
          </Link>
        </div>

        {/* 🔹 Divider */}
        <div className="border-b border-gray-500 mx-4 mb-4"></div>

        {/* 🔹 Nav Links */}
        <div className="flex flex-col gap-2 p-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${linkBase} ${
                  isActive ? linkActive : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Flag dropdown */}
      {flagOpen &&
        createPortal(
          <ul
            className="fixed z-[10000] w-40 rounded-md border border-black/10 bg-white shadow-lg p-2 flex flex-col gap-1"
            style={{ top: flagPos.top, left: flagPos.left }}
            role="listbox"
          >
            {LANGS.map((opt) => (
              <li key={opt.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(opt);
                    setFlagOpen(false);
                  }}
                  className="flex items-center justify-between w-full h-[39px] px-3 rounded-md border border-black/20 bg-white hover:bg-gray-100"
                  role="option"
                  aria-selected={lang.code === opt.code}
                >
                  <ReactCountryFlag
                    countryCode={opt.code}
                    svg
                    className="w-6 h-4 rounded-sm ring-1 ring-black/15"
                  />
                  <span className="ml-2 text-sm">{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </header>
  );
}
