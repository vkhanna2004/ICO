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
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center " 
    // border-b border-[#f5c843]/20
    style={{
      background:
       'linear-gradient(90deg, #1b121d 0%, #120f2f 50%, #1b121d 100%)',
    }}
    >
      
      <Link className="flex items-center justify-center" to="/">
      <img src="https://momapp.network/Content/SiteCss/assets/images/logo.png" width="50px"/>
          
        <span className="ml-2 text-2xl font-bold text-[#ffc100]">
          MAD OVER MUSIC
        </span>
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/"
          className={`text-lg font-medium hover:text-[#ffc100] transition-colors ${
            isActive("/") ? "text-[#ffc100]" : "text-gray-400"
          }`}
        >
          Home
        </Link>

        {location.pathname === "/" && (
          <>
            <a
              href="#benefits"
              onClick={() => scrollToSection("benefits")}
              className="text-lg font-medium hover:text-[#ffc100] transition-colors text-gray-400"
            >
              Benefits
            </a>
            <a
              href="#roadmap"
              onClick={() => scrollToSection("roadmap")}
              className="text-lg font-medium hover:text-[#ffc100] transition-colors text-gray-400"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => scrollToSection("faq")}
              className="text-lg font-medium hover:text-[#ffc100] transition-colors text-gray-400"
            >
              FAQ
            </a>
          </>
        )}

        <Link
          to="/marketplace"
          className={`text-lg font-medium hover:text-[#ffc100] transition-colors ${
            isActive("/marketplace") ? "text-[#ffc100]" : "text-gray-400"
          }`}
        >
          Marketplace
        </Link>
        <Link
          to="/stats"
          className={`text-lg font-medium hover:text-[#ffc100] transition-colors ${
            isActive("/stats") ? "text-[#ffc100]" : "text-gray-400"
          }`}
        >
          Stats
        </Link>
        <Link
          to="/tokenomics"
          className={`text-lg font-medium hover:text-[#ffc100] transition-colors ${
            isActive("/tokenomics") ? "text-[#ffc100]" : "text-gray-400"
          }`}
        >
          Tokenomics
        </Link>
        <Link
          to="/community"
          className={`text-lg font-medium hover:text-[#ffc100] transition-colors ${
            isActive("/community") ? "text-[#ffc100]" : "text-gray-400"
          }`}
        >
          Community
        </Link>
      </nav>
    </header>
  );
};

export default Header;
