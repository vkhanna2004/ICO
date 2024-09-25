import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0C0C0C] px-4 lg:px-6 h-14 flex items-center border-b border-[#f5c843]/20">
      <Link className="flex items-center justify-center" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#f5c843]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6l12-2v13M9 10l12-2"
          />
        </svg>
        <span className="ml-2 text-2xl font-bold text-[#f5c843]">
          MAD OVER MUSIC
        </span>
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/"
          className={`text-lg font-medium hover:text-[#f5c843] transition-colors ${
            isActive("/") ? "text-[#f5c843]" : "text-gray-400"
          }`}
        >
          Home
        </Link>

        {location.pathname === "/" && (
          <>
            <a
              href="#benefits"
              onClick={() => scrollToSection("benefits")}
              className="text-lg font-medium hover:text-[#f5c843] transition-colors text-gray-400"
            >
              Benefits
            </a>
            <a
              href="#roadmap"
              onClick={() => scrollToSection("roadmap")}
              className="text-lg font-medium hover:text-[#f5c843] transition-colors text-gray-400"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => scrollToSection("faq")}
              className="text-lg font-medium hover:text-[#f5c843] transition-colors text-gray-400"
            >
              FAQ
            </a>
          </>
        )}

        <Link
          to="/marketplace"
          className={`text-lg font-medium hover:text-[#f5c843] transition-colors ${
            isActive("/marketplace") ? "text-[#f5c843]" : "text-gray-400"
          }`}
        >
          Marketplace
        </Link>
        <Link
          to="/stats"
          className={`text-lg font-medium hover:text-[#f5c843] transition-colors ${
            isActive("/stats") ? "text-[#f5c843]" : "text-gray-400"
          }`}
        >
          Stats
        </Link>
        <Link
          to="/tokenomics"
          className={`text-lg font-medium hover:text-[#f5c843] transition-colors ${
            isActive("/tokenomics") ? "text-[#f5c843]" : "text-gray-400"
          }`}
        >
          Tokenomics
        </Link>
        <Link
          to="/community"
          className={`text-lg font-medium hover:text-[#f5c843] transition-colors ${
            isActive("/community") ? "text-[#f5c843]" : "text-gray-400"
          }`}
        >
          Community
        </Link>
      </nav>
    </header>
  );
};

export default Header;
