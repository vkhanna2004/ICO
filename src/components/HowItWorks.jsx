import React from "react";

function HowItWorks() {
  return (
    <section id="howItWorks" className="w-full py-12 md:py-24 lg:py-32 bg-[#0C0C0C]/90">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#f5c843]">
          How It Works
        </h2>
        <ol className="grid gap-6 lg:grid-cols-3 lg:gap-12 justify-center">
          <li className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-6 rounded-lg text-center w-full max-w-xs mx-auto">
            <span className="text-3xl font-bold text-[#f5c843]">1</span>
            <h3 className="text-xl font-bold text-[#f5c843]">
              Artist Mints NFT
            </h3>
            <p className="text-gray-300">
              Artists create and mint their music as unique NFTs on our
              platform.
            </p>
          </li>
          <li className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-6 rounded-lg text-center w-full max-w-xs mx-auto">
            <span className="text-3xl font-bold text-[#f5c843]">2</span>
            <h3 className="text-xl font-bold text-[#f5c843]">Fans Purchase</h3>
            <p className="text-gray-300">
              Music lovers can buy, trade, and collect their favorite music
              NFTs.
            </p>
          </li>
          <li className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-6 rounded-lg text-center w-full max-w-xs mx-auto">
            <span className="text-3xl font-bold text-[#f5c843]">3</span>
            <h3 className="text-xl font-bold text-[#f5c843]">Enjoy & Earn</h3>
            <p className="text-gray-300">
              Owners can listen to their NFTs and potentially earn from
              royalties and resales.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
