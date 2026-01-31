import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Copy, Users } from 'lucide-react';

interface ReferralSystemProps {
  code: string;
}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ code }) => {
  return (
    <Card className="p-6 bg-gradient-to-r from-slate-900 to-indigo-900/30 border-indigo-500/20">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-400" />
            Recruit Degens
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            More friends = more rewards. You get 10% of their earnings forever. 
            Basically a pyramid scheme but cool.
          </p>
          <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
            <div className="bg-indigo-500 h-2 rounded-full w-[40%]"></div>
          </div>
          <p className="text-xs text-indigo-300">2/5 Recruited for Bonus</p>
        </div>

        <div className="flex flex-col items-end gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-700 w-full md:w-auto">
            <code className="text-brand-cyan font-mono font-bold text-lg px-2">{code}</code>
            <button className="p-2 hover:bg-slate-800 rounded-md transition-colors" title="Copy Code">
              <Copy className="h-4 w-4 text-slate-400" />
            </button>
          </div>
          <Button size="sm" variant="primary" className="w-full">
            Copy Link
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ReferralSystem;