import React from "react";
import {SubscribingForm} from './index.js'
function Footer() {
  return (
    <>
    <SubscribingForm/>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f5c843]/20 bg-[#0C0C0C]">
      <p className="text-xs text-gray-400">
        © 2024 MusicNFT Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:text-[#f5c843] transition-colors" href="#">
          Terms of Service
        </a>
        <a className="text-xs hover:text-[#f5c843] transition-colors" href="#">
          Privacy
        </a>
      </nav>
    </footer>
    </>
  );
}

export default Footer;
