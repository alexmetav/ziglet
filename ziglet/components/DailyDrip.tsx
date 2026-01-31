import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { DayStatus } from '../types';
import { Lock, Check, Flame } from 'lucide-react';

interface DailyDripProps {
  days: DayStatus[];
  currentStreak: number;
}

const DailyDrip: React.FC<DailyDripProps> = ({ days, currentStreak }) => {
  const [claiming, setClaiming] = useState(false);

  const handleClaim = () => {
    setClaiming(true);
    setTimeout(() => {
      setClaiming(false);
      alert('Drip Claimed! (Simulated)');
    }, 1500);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          Daily Drip <span className="text-brand-cyan">💧</span>
        </h2>
        <div className="flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-1 border border-orange-500/30">
          <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
          <span className="font-bold text-orange-500">{currentStreak} Day Streak</span>
        </div>
      </div>

      <p className="text-slate-400">New drip every day. Don’t fumble the bag.</p>

      {/* Calendar Grid */}
      <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
        {days.map((day) => (
          <div 
            key={day.day} 
            className={`
              relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200
              ${day.status === 'claimed' ? 'bg-green-500/10 border-green-500/30 text-green-400' : ''}
              ${day.status === 'available' ? 'bg-brand-purple/10 border-brand-purple text-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.3)] scale-105 z-10' : ''}
              ${day.status === 'locked' ? 'bg-slate-900 border-slate-800 text-slate-600 opacity-70' : ''}
            `}
          >
            <span className="text-xs uppercase font-bold mb-2">Day {day.day}</span>
            
            {day.status === 'claimed' && <Check className="h-6 w-6" />}
            {day.status === 'locked' && <Lock className="h-6 w-6" />}
            {day.status === 'available' && <span className="text-xl font-bold animate-pulse">?</span>}
            
            <div className="mt-2 text-sm font-bold">
              +{day.reward}
            </div>
            
            {day.status === 'available' && (
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping" />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button 
          size="lg" 
          onClick={handleClaim} 
          isLoading={claiming}
          disabled={!days.some(d => d.status === 'available')}
          className="w-full md:w-auto"
        >
          {claiming ? 'Minting Tears...' : 'Claim Today’s Drip'}
        </Button>
      </div>
    </div>
  );
};

export default DailyDrip;