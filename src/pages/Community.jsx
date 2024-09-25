import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

function Community() {
  return (
    <div className="bg-[#0C0C0C] text-[#f5c843] p-6">
      <h1 className="text-3xl font-bold mb-4">Join Our Community</h1>
      <p className="text-lg text-gray-400 mb-6">
        Stay connected with us on social media to get the latest updates, network with other members, and become a part of our growing community.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <Instagram className="w-8 h-8 text-[#f5c843]" />
          <div>
            <h2 className="text-xl font-medium text-[#f5c843]">Instagram</h2>
            <p className="text-gray-400">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5c843]">
                @yourprofile
              </a>
            </p>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <Facebook className="w-8 h-8 text-[#f5c843]" />
          <div>
            <h2 className="text-xl font-medium text-[#f5c843]">Facebook</h2>
            <p className="text-gray-400">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5c843]">
                /yourpage
              </a>
            </p>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <Linkedin className="w-8 h-8 text-[#f5c843]" />
          <div>
            <h2 className="text-xl font-medium text-[#f5c843]">LinkedIn</h2>
            <p className="text-gray-400">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5c843]">
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Why Connect with Us?</h2>
        <p className="text-gray-400">
          - Be the first to know about our latest features and updates.
          <br />
          - Engage with a vibrant community of like-minded individuals.
          <br />
          - Get access to exclusive content, events, and offers.
        </p>
      </div>
    </div>
  );
}

export default Community;
