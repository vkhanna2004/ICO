import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen bg-[#0C0C0C]"
    >
      <div className="container px-4 md:px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#f5c843]">
            Revolutionize Music Ownership with NFTs
          </h1>
          <p className="mx-auto max-w-[900px] text-gray-400 md:text-3xl">
            Join the future of music. Own, trade, and experience your favorite
            tracks like never before.
          </p>
          <div className="space-x-4">
            <button className="bg-[#f5c843] text-[#0C0C0C] hover:bg-[#f5c843]/90 px-4 py-2 rounded">
              Join Whitelist
            </button>
            <button className="border border-[#f5c843] text-[#f5c843] hover:bg-[#f5c843] hover:text-[#0C0C0C] px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
