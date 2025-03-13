'use client';

import React from 'react';
import Image from 'next/image';

const SocialCard = ({ 
  imageUrl, 
  caption, 
  profilePic, 
  username, 
  subtitle, 
  viewCount, 
  darkMode = true,
  isVideo = false,
  accentColor = null
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'} w-72 h-[500px] shadow-lg`}>
      <div className="h-full flex flex-col">
        {/* Main content */}
        <div className="flex-grow relative">
          <div className="absolute inset-0">
            <Image 
              src={imageUrl} 
              alt={caption} 
              fill 
              className="object-cover"
            />
          </div>
          
          {/* Caption overlay */}
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                {caption}
              </p>
            </div>
          )}

          {/* Video indicator */}
          {isVideo && (
            <div className="absolute top-2 right-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm3.5 10.5l-5 3a.5.5 0 0 1-.75-.43v-6a.5.5 0 0 1 .75-.43l5 3a.5.5 0 0 1 0 .86z" />
              </svg>
            </div>
          )}
          
          {/* Accent color banner */}
          {accentColor && (
            <div className="absolute top-0 left-0 right-0">
              <div className={`bg-${accentColor}-400 px-2 py-1 text-xs font-medium text-white`}>
                ACQUIRED
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="px-3 py-2 flex items-center">
          {/* Profile photo */}
          <div className="h-8 w-8 rounded-full overflow-hidden relative">
            <Image 
              src={profilePic} 
              alt={username} 
              fill 
              className="object-cover"
            />
          </div>
          
          {/* Username and subtitle */}
          <div className="ml-2 flex-grow">
            <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {username}
            </p>
            {subtitle && (
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
          
          {/* View count */}
          <div className="flex items-center">
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {viewCount}
            </p>
            <svg className={`w-3 h-3 ml-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaCards = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Card 1 - Darknet Diaries */}
        <SocialCard
          imageUrl="/illustrations/hand-phone.svg"
          caption="and he was called"
          profilePic="/avatars/darknet-diaries.jpg"
          username="DARKNET DIARIES"
          viewCount="2.4M+ Views"
          darkMode={true}
        />
        
        {/* Card 2 - Reid Hoffman */}
        <SocialCard
          imageUrl="/illustrations/cars.svg"
          caption="that the shift in cars"
          profilePic="/avatars/reid-hoffman.jpg"
          username="REID HOFFMAN"
          subtitle="Co-founder LinkedIn"
          viewCount=""
          darkMode={true}
        />
        
        {/* Card 3 - Acquired FM */}
        <SocialCard
          imageUrl="/podcast-screenshot.jpg"
          caption="So Costco"
          profilePic="/avatars/acquired-fm.jpg"
          username="ACQUIRED FM"
          viewCount="4.9M+ Views"
          darkMode={true}
          accentColor="green"
          isVideo={true}
        />
      </div>
    </div>
  );
};

export default SocialMediaCards;