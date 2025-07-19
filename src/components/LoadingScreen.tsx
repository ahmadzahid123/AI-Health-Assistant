import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <div className="bg-white/20 p-6 rounded-full">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
            <Heart className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6 text-white animate-bounce" />
          <h1 className="text-3xl font-bold text-white">AI Health Assistant</h1>
          <Sparkles className="w-6 h-6 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
        
        <p className="text-white/80 text-lg mb-8">Connecting Pakistan to Better Healthcare</p>
        
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};