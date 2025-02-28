'use client';

import React from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const candidates = [
  { name: 'Dan Gatwa', category: 'SEO Blogs', rating: 4, img: '/assets/dan.jpg' },
  { name: 'Sophie D', category: '', rating: 3, img: '/assets/sophie.jpg' },
  { name: 'Derek James', category: 'In-depth Content', rating: 5, img: '/assets/derek.jpg' },
  { name: 'Chris Elliot', category: '', rating: 5, img: '/assets/chris.jpg' },
  { name: 'Jean Carlos', category: '', rating: 4, img: '/assets/jean.jpg' },
  { name: 'Sofia S', category: 'Blog Writer', rating: 5, img: '/assets/sofia.jpg', location: 'London, UK', experience: '15 years' }
];

const SocialMediaUI = () => {
  return (
    <div className="bg-[#f9f5f0] min-h-screen flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-center">Get Access to the <span className="text-purple-500">Top 1%</span></h1>
      
      {/* Tabs */}
      <div className="mt-4 flex space-x-6 border-b border-gray-300 pb-2">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-1">For Candidates</button>
        <button className="text-gray-400">For Enterprises</button>
      </div>
      
      {/* Content */}
      <div className="flex flex-col md:flex-row mt-6 w-full max-w-5xl">
        <div className="flex-1 text-left px-6">
          <h2 className="text-2xl font-bold">Designera carefully screens and onboards talent, boasting a network of over <span className="text-blue-600">100,000 skilled designers.</span></h2>
          <p className="text-gray-600 mt-3">We match you with the best creator and ensure content diversity, customized expertise, and editorial excellence.</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md">Get Hired</button>
        </div>
        
        {/* Candidates Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6 mt-6 md:mt-0 relative">
          {candidates.map((candidate, index) => (
            <div key={index} className="relative bg-white shadow-md p-4 rounded-lg text-center">
              <img src={candidate.img} alt={candidate.name} className="w-full h-28 object-cover rounded-md" />
              {candidate.category && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-md">{candidate.category}</span>
              )}
              <h3 className="mt-2 font-bold">{candidate.name}</h3>
              <div className="flex justify-center mt-1">
                {Array.from({ length: candidate.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              {candidate.location && (
                <p className="text-xs text-gray-600 mt-1">📍 {candidate.location} | {candidate.experience} experience</p>
              )}
              {candidate.name === 'Sofia S' && (
                <div className="absolute bottom-2 right-2 text-green-500 text-2xl">
                  <FaCheckCircle />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaUI;