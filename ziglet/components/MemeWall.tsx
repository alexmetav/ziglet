import React from 'react';
import { Meme } from '../types';
import { Heart, MessageCircle, Share2, Award } from 'lucide-react';
import Card from './ui/Card';

interface MemeWallProps {
  memes: Meme[];
}

const MemeWall: React.FC<MemeWallProps> = ({ memes }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Meme Wall</h2>
        <span className="text-sm text-slate-400">Feed of pure degen energy</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <Card key={meme.id} className="group hover:-translate-y-1 transition-transform duration-300">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-900">
              <img 
                src={meme.imageUrl} 
                alt="Meme" 
                className={`w-full h-full object-cover transition-opacity duration-300 ${meme.status === 'rejected' ? 'opacity-30 grayscale' : ''}`} 
              />
              
              {/* Status Stamps */}
              {meme.status === 'approved' && (
                <div className="absolute top-4 right-4 bg-green-500 text-black font-black text-xs px-2 py-1 transform rotate-3 rounded uppercase border-2 border-white shadow-lg">
                  Approved
                </div>
              )}
              {meme.status === 'rejected' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-black text-2xl px-4 py-2 transform -rotate-12 rounded border-4 border-white opacity-80">
                  REKT
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-900/80">
              <div className="flex justify-between items-start mb-3">
                <div>
                   <p className="text-sm font-bold text-white">@{meme.creator}</p>
                   {meme.status === 'approved' && (
                     <p className="text-xs text-brand-green flex items-center gap-1">
                       <Award className="h-3 w-3" /> Earned {meme.reward} ZIG
                     </p>
                   )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs font-bold">{meme.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-1 hover:text-green-400 transition-colors ml-auto">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MemeWall;