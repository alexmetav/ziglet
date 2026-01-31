import React, { useState } from 'react';
import { User } from '../types';
import { Zap, Menu, X, Wallet } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="text-xl font-bold text-white">Z</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Ziglet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
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
        <div className="md:hidden border-b border-white/5 bg-slate-950 px-2 pb-3 pt-2">
           <div className="space-y-1 px-2 pb-3 pt-2">
             <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900">
                <span className="text-slate-400">Streak</span>
                <span className="font-bold text-orange-500 flex items-center gap-1">{user.streak} 🔥</span>
             </div>
             <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900">
                <span className="text-slate-400">Balance</span>
                <span className="font-bold text-brand-cyan">{user.balance} ZIG</span>
             </div>
             <Button className="w-full mt-4" variant="secondary">Wallet Connected</Button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;