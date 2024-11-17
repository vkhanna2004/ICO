import React, { useState } from "react";

function SubscribingForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Email submitted:", email);

    setEmail("");
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-20 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#f5c843]">
              Join the Music NFT Revolution
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be part of the future of music ownership and support your favorite
              artists directly.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <input
                className="flex-1 bg-[#0C0C0C] border border-[#f5c843] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#f5c843] text-[#0C0C0C] hover:bg-[#f5c843]/90 px-4 py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400">
              By subscribing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribingForm;
