import React from "react";
import { BadgeCheck, Zap, Music } from "lucide-react";
import bgImage from "../images/gradientPurple.jpeg";

function Benefits() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Benefits */}
      <section
        id="benefits"
        className="flex items-center justify-center w-full pt-10 md:pt-14 pb-4 md:pb-8 min-h-[40vh] sm:min-h-[50vh] mb-0"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-center mb-4 text-[#ffc100]">
            Benefits of Music NFTs
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <BadgeCheck className="h-10 w-10 text-[#ffc100]" />
              <h3 className="text-lg font-bold text-[#ffc100]">
                Authentic Ownership
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Verifiable proof of ownership for your favorite music tracks and
                albums.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <Zap className="h-10 w-10 text-[#ffc100]" />
              <h3 className="text-lg font-bold text-[#ffc100]">
                Direct Artist Support
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Support artists directly, ensuring they receive fair
                compensation for their work.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <Music className="h-10 w-10 text-[#ffc100]" />
              <h3 className="text-lg font-bold text-[#ffc100]">
                Exclusive Content
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Access to exclusive content, experiences, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex items-center justify-center w-full pt-4 md:pt-8 pb-10 md:pb-14 min-h-[40vh] sm:min-h-[50vh]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-center mb-4 text-[#ffc100]">
            How It Works
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <span className="text-2xl font-bold text-[#ffc100]">1</span>
              <h3 className="text-lg font-bold text-[#ffc100]">
                Artist Mints NFT
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Artists create and mint their music as unique NFTs on our
                platform.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <span className="text-2xl font-bold text-[#ffc100]">2</span>
              <h3 className="text-lg font-bold text-[#ffc100]">
                Fans Purchase
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Music lovers can buy, trade, and collect their favorite music
                NFTs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[#1c1132]/50 border border-[#ffc100]/30 p-4 rounded-lg w-full max-w-xs">
              <span className="text-2xl font-bold text-[#ffc100]">3</span>
              <h3 className="text-lg font-bold text-[#ffc100]">Enjoy & Earn</h3>
              <p className="text-gray-300 text-sm text-center">
                Owners can listen to their NFTs and potentially earn from
                royalties and resales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
