import React from 'react';

function Header({ activeSection }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0C0C0C] px-4 lg:px-6 h-14 flex items-center border-b border-[#f5c843]/20">
      <a className="flex items-center justify-center" href="#">
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
        <span className="ml-2 text-2xl font-bold text-[#f5c843]">MAD OVER MUSIC</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'home' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'home' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#home"
        >
          Marketplace
        </a>
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'home' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#home"
        >
          Stats
        </a>
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'benefits' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#benefits"
        >
          Benefits
        </a>
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'roadmap' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#roadmap"
        >
          Roadmap
        </a>
        <a
          className={`text-l font-medium hover:text-[#f5c843] transition-colors ${
            activeSection === 'faq' ? 'text-[#f5c843]' : 'text-gray-400'
          }`}
          href="#faq"
        >
          FAQ
        </a>

      </nav>
    </header>
  );
}

export default Header;
