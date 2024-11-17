import React from "react";
import {SubscribingForm} from './index.js'

// import bgImage from "../images/mold(1).jpeg"
// import bgImage from "../images/mold (1).jpeg"
// import bgImage from "../images/mold(1).jpeg"
// import bgImage from "../images/mold (1).jpeg"
import bgImage from "../images/download1.jpeg"
function Footer() {
  return (
    <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
    <SubscribingForm/>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f5c843]/20">
      <p className="text-xs text-gray-400">
        © 2024 MusicNFT Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:text-[#f5c843] text-gray-400 transition-colors" href="#">
          Terms of Service
        </a>
        <a className="text-xs hover:text-[#f5c843] text-gray-400 transition-colors" href="#">
          Privacy
        </a>
      </nav>
    </footer>
    </div>
  );
}

export default Footer;
