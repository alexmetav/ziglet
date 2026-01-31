import React from 'react';
import Card from './ui/Card';
import { LeaderboardEntry } from '../types';
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface LeaderboardProps {
  data: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] border-yellow-500/50 bg-yellow-500/10';
      case 2: return 'text-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.5)] border-slate-400/50 bg-slate-400/10';
      case 3: return 'text-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)] border-amber-600/50 bg-amber-600/10';
      default: return 'text-slate-500 border-slate-800 bg-slate-900/50';
    }
  };

  return (
    <Card className="p-0 overflow-hidden" glow>
      {/* Header */}
      <div className="p-6 border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                Top Degens <Trophy className="h-6 w-6 text-brand-purple" />
                </h2>
                <p className="text-sm text-slate-400">Ranked by chaos created this season.</p>
            </div>
            <div className="text-right">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Season ends in</span>
                <div className="text-brand-cyan font-mono font-bold">04:20:69</div>
            </div>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-slate-800/50">
        {data.map((entry) => (
          <div 
            key={entry.rank}
            className={`
                flex items-center justify-between p-4 hover:bg-slate-800/30 transition-colors
                ${entry.username === 'Anon_Degen' ? 'bg-brand-purple/10 border-l-2 border-brand-purple' : ''}
            `}
          >
            <div className="flex items-center gap-4">
              {/* Rank */}
              <div className={`
                w-10 h-10 flex items-center justify-center rounded-lg font-bold border text-lg
                ${getRankStyle(entry.rank)}
              `}>
                {entry.rank}
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-3">
                <div className="relative">
                    <img src={entry.avatar} alt={entry.username} className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700" />
                    {entry.rank === 1 && <div className="absolute -top-2 -right-1 text-lg">👑</div>}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                      <span className={`font-bold ${entry.username === 'Anon_Degen' ? 'text-brand-cyan' : 'text-slate-200'}`}>
                        {entry.username}
                      </span>
                      {entry.badges.map((b, i) => <span key={i} className="text-xs">{b}</span>)}
                  </div>
                  <div className="text-xs text-slate-500">Level {Math.floor(entry.score / 1000) + 1}</div>
                </div>
              </div>
            </div>

            {/* Score & Trend */}
            <div className="flex items-center gap-6">
                <div className="text-right">
                    <div className="font-mono font-bold text-white">{entry.score.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-500 uppercase">ZIG Points</div>
                </div>
                
                <div className="w-6 flex justify-center">
                    {entry.change === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {entry.change === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                    {entry.change === 'same' && <Minus className="w-4 h-4 text-slate-600" />}
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="p-4 bg-slate-950/50 text-center border-t border-slate-800">
        <button className="text-sm text-brand-purple hover:text-white transition-colors font-bold">
            View Full Rankings →
        </button>
      </div>
    </Card>
  );
};

export default Leaderboard;