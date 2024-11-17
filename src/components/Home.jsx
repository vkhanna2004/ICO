import React from "react";
// import bgImage from "../images/circles.jpeg"
import bgImage from "../images/download.gif"
// import bgImage from "../images/GradientBlue.jpeg"

// import bgImage from "../images/gradientPurple.jpeg"
function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 md:px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#ffc100]">
            Revolutionize Music Ownership with NFTs
          </h1>
          <p className="mx-auto max-w-[900px] font-semibold text-gray-400 md:text-3xl">
            Join the future of music. Own, trade, and experience your favorite
            tracks like never before.
          </p>
          <div className="space-x-4">
            <button className="bg-[#ffc100] font-semibold text-[#0C0C0C] hover:bg-[#DDA800] px-4 py-2 rounded">
              Join Whitelist
            </button>
            <button className="border border-[#ffc100] text-[#ffc100] hover:bg-[#DDA800] hover:text-[#0C0C0C] font-semibold px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
