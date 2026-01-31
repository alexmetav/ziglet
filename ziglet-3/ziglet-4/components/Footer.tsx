import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
        <div className="mb-4 text-2xl font-bold tracking-tight text-white">Ziglet</div>
        <p className="text-slate-500 text-sm text-center max-w-sm mb-8">
          Not financial advice. We just like the memes. <br/>
          Don't buy crypto you can't afford to lose to a rug.
        </p>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-brand-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Discord</a>
          <a href="#" className="hover:text-green-500 transition-colors">Docs</a>
        </div>
        <div className="mt-8 text-xs text-slate-700">
          © {new Date().getFullYear()} Ziglet Protocol. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;