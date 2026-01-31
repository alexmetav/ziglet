import React, { useState } from 'react';
import Button from './ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [characterMood, setCharacterMood] = useState<'happy' | 'neutral' | 'hype'>('neutral');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-purple/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="mb-8 inline-flex animate-bounce items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-sm font-medium text-brand-cyan">SZN 1 is Live: Get in Early</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple">
            Scroll. Like.
          </span>
          <span className="block mt-2">
             Meme. Repeat.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mb-10 max-w-2xl text-xl text-slate-400">
          Ziglet rewards you for doing what you already do every day. 
          Stop scrolling for free. Start earning for chaos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
             onMouseEnter={() => setCharacterMood('hype')}
             onMouseLeave={() => setCharacterMood('neutral')}
        >
          <Button size="lg" className="w-full sm:w-auto group">
            Claim Today’s Drip 💧
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="ghost" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </div>

        {/* Character Reaction */}
        <div className="mt-16 relative">
          <div className="animate-float text-9xl select-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:scale-110 cursor-pointer"
               onClick={() => setCharacterMood('happy')}
          >
            {characterMood === 'neutral' && '🗿'}
            {characterMood === 'hype' && '🤯'}
            {characterMood === 'happy' && '🤑'}
          </div>
          <div className="mt-4 inline-block rounded-xl bg-slate-800/80 px-4 py-2 text-sm text-slate-300 border border-slate-700">
             {characterMood === 'neutral' && '"You gonna claim that?"'}
             {characterMood === 'hype' && '"LFG!!! Click it!"'}
             {characterMood === 'happy' && '"We rich now fam."'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;