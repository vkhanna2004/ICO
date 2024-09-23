import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // You can use any icon library or even an SVG

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-[#0C0C0C]">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#f5c843]">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-[#f5c843]/20">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 text-left text-[#f5c843] font-bold"
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 text-[#f5c843] transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`text-gray-300 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-screen py-4" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: "What is a Music NFT?",
    answer:
      "A Music NFT is a unique digital asset representing ownership of a specific piece of music or musical content, stored on a blockchain.",
  },
  {
    question: "How do I participate in the token sale?",
    answer:
      "To participate, you'll need to create an account on our platform, complete KYC verification, and have a compatible cryptocurrency wallet. Detailed instructions will be provided closer to the sale date.",
  },
  {
    question: "What can I do with Music NFTs?",
    answer:
      "Music NFTs can be collected, traded, and in some cases, provide access to exclusive content or experiences. Some may also generate royalties for the owner when the associated music is played or licensed.",
  },
];

export default FAQ;
