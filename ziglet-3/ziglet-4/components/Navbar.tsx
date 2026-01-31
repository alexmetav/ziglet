import React, { useState } from 'react';
import { User, Tab } from '../types';
import { Zap, Menu, X, Wallet, Home, ImagePlus, Trophy } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  user: User;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Tab.HOME, label: 'Home', icon: Home },
    { id: Tab.MEME_FACTORY, label: 'Meme Factory', icon: ImagePlus },
    { id: Tab.LEADERBOARD, label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveTab(Tab.HOME)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="text-xl font-bold text-white">Z</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Ziglet</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
             {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className={`
                   px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                   ${activeTab === item.id 
                     ? 'bg-slate-800 text-white shadow-inner' 
                     : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
                 `}
               >
                 <item.icon className="w-4 h-4" />
                 {item.label}
               </button>
             ))}
          </div>

          {/* Desktop User Stats */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full bg-slate-900/50 px-3 py-1 border border-slate-800">
              <span className="text-sm text-slate-400">Streak:</span>
              <span className="text-sm font-bold text-orange-500 flex items-center gap-1">
                {user.streak} <Zap className="h-3 w-3 fill-orange-500" />
              </span>
            </div>
            
            <div className="flex items-center gap-1 rounded-full bg-slate-900/50 px-3 py-1 border border-slate-800">
              <span className="text-sm text-slate-400">Balance:</span>
              <span className="text-sm font-bold text-brand-cyan">{user.balance} ZIG</span>
            </div>

            <Button size="sm" variant="secondary" className="gap-2">
              <Wallet className="h-4 w-4" />
              <span>{user.username}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/5 bg-slate-950 px-2 pb-3 pt-2 shadow-xl">
           <div className="space-y-1 px-2 pb-3 pt-2">
             {/* Navigation Items Mobile */}
             <div className="grid grid-cols-3 gap-2 mb-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      flex flex-col items-center justify-center p-3 rounded-xl text-xs font-bold gap-1 border
                      ${activeTab === item.id 
                        ? 'bg-brand-purple/20 border-brand-purple text-white' 
                        : 'bg-slate-900 border-slate-800 text-slate-400'}
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
             </div>

             <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900">
                <span className="text-slate-400">Streak</span>
                <span className="font-bold text-orange-500 flex items-center gap-1">{user.streak} 🔥</span>
             </div>
             <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900">
                <span className="text-slate-400">Balance</span>
                <span className="font-bold text-brand-cyan">{user.balance} ZIG</span>
             </div>
             <Button className="w-full mt-4" variant="secondary">Wallet Connected: {user.username}</Button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;