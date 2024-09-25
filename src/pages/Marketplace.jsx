import React from "react";

function Marketplace() {
  return (
    <div className="bg-[#0C0C0C] text-[#f5c843] min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <p className="text-lg text-gray-400">Explore the song listings below:</p>
      <div className="mt-8 space-y-4">
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#f5c843]">Song 1</h2>
          <p className="text-gray-400">Description of song 1.</p>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#f5c843]">Song 2</h2>
          <p className="text-gray-400">Description of song 2.</p>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#f5c843]">Song 3</h2>
          <p className="text-gray-400">Description of song 3.</p>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
