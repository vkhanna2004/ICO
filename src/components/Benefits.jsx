import React from "react";
import { BadgeCheck, Zap, Music } from "lucide-react"; 

function Benefits() {
  return (
    <>
      <section
        id="benefits"
        className="flex w-full h-screen bg-[#0C0C0C] items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#f5c843]">
            Benefits of Music NFTs
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-4 rounded-lg w-full max-w-xs">
              <BadgeCheck className="h-12 w-12 text-[#f5c843]" />
              <h3 className="text-xl font-bold text-[#f5c843]">
                Authentic Ownership
              </h3>
              <p className="text-gray-300 text-center">
                Verifiable proof of ownership for your favorite music tracks and
                albums.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-4 rounded-lg w-full max-w-xs">
              <Zap className="h-12 w-12 text-[#f5c843]" />
              <h3 className="text-xl font-bold text-[#f5c843]">
                Direct Artist Support
              </h3>
              <p className="text-gray-300 text-center">
                Support artists directly, ensuring they receive fair
                compensation for their work.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#f5c843]/20 p-4 rounded-lg w-full max-w-xs">
              <Music className="h-12 w-12 text-[#f5c843]" />
              <h3 className="text-xl font-bold text-[#f5c843]">
                Exclusive Content
              </h3>
              <p className="text-gray-300 text-center">
                Access to exclusive content, experiences, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
