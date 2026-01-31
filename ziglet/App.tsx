import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyDrip from './components/DailyDrip';
import ChaosDashboard from './components/ChaosDashboard';
import MemeFactory from './components/MemeFactory';
import MemeWall from './components/MemeWall';
import ReferralSystem from './components/ReferralSystem';
import Footer from './components/Footer';
import { INITIAL_USER, WEEKLY_DRIP, DAILY_TASKS, RECENT_MEMES } from './constants';
import { User, Tab } from './types';
import { Home, ImagePlus, Trophy, Info } from 'lucide-react';

const App: React.FC = () => {
  const [user] = useState<User>(INITIAL_USER);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  // How it works data
  const steps = [
    { title: "Daily Drip", icon: "💧", desc: "Claim once a day. Keep the streak alive or cry." },
    { title: "Touch Grass", icon: "🌱", desc: "Engage on social. We verify, you earn." },
    { title: "Meme Factory", icon: "🏭", desc: "Cook memes. Community votes. Bags pump." },
    { title: "Recruit", icon: "🧲", desc: "Invite friends. Build your downline." }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 selection:bg-brand-purple selection:text-white">
      <Navbar user={user} />

      <main>
        <Hero />

        {/* Floating Navigation Tabs for Mobile/Desktop separation visual */}
        <div className="sticky top-20 z-40 mx-auto max-w-md px-4 mb-8 md:hidden">
            <div className="flex justify-around bg-slate-900/90 backdrop-blur-md p-1 rounded-2xl border border-slate-700 shadow-lg">
                <button 
                  onClick={() => setActiveTab(Tab.HOME)}
                  className={`p-3 rounded-xl transition-all ${activeTab === Tab.HOME ? 'bg-brand-purple text-white' : 'text-slate-400'}`}
                >
                    <Home className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab(Tab.MEME_FACTORY)}
                  className={`p-3 rounded-xl transition-all ${activeTab === Tab.MEME_FACTORY ? 'bg-brand-purple text-white' : 'text-slate-400'}`}
                >
                    <ImagePlus className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab(Tab.LEADERBOARD)}
                  className={`p-3 rounded-xl transition-all ${activeTab === Tab.LEADERBOARD ? 'bg-brand-purple text-white' : 'text-slate-400'}`}
                >
                    <Trophy className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
          
          {/* How It Works (Visible on Home) */}
          {(activeTab === Tab.HOME) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center hover:bg-slate-800/80 transition-colors">
                        <div className="text-4xl mb-3">{step.icon}</div>
                        <h3 className="font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-xs text-slate-400">{step.desc}</p>
                    </div>
                ))}
            </div>
          )}

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Tasks & Drip */}
            <div className={`space-y-8 lg:col-span-2 ${activeTab === Tab.LEADERBOARD ? 'hidden lg:block' : ''}`}>
               {activeTab !== Tab.MEME_FACTORY && (
                   <>
                     <DailyDrip days={WEEKLY_DRIP} currentStreak={user.streak} />
                     <ChaosDashboard tasks={DAILY_TASKS} />
                     <ReferralSystem code={user.referralCode} />
                   </>
               )}
               {activeTab === Tab.MEME_FACTORY && <MemeFactory />}
            </div>

            {/* Right Column: Social Proof / Meme Wall */}
            <div className={`space-y-8 ${activeTab === Tab.HOME ? 'hidden lg:block' : ''}`}>
               <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 sticky top-24">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                     <Info className="w-5 h-5 text-brand-cyan" />
                     Roadmap
                  </h3>
                  <div className="space-y-3">
                     <div className="flex items-center gap-3 text-sm">
                        <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                        <span className="text-slate-300">Phase 1: The Drip (Live)</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-slate-300">Phase 2: Meme Wars (WIP)</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm opacity-50">
                        <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                        <span className="text-slate-500">Phase 3: Token Launch</span>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-800">
                     <h3 className="font-bold text-lg mb-4">Latest Alpha</h3>
                     <p className="text-xs text-slate-400 italic">
                        "Devs are cooking something spicy for streak holders > 30 days. NFA."
                     </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Full Width Sections */}
          {(activeTab === Tab.HOME || activeTab === Tab.LEADERBOARD) && (
             <MemeWall memes={RECENT_MEMES} />
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;