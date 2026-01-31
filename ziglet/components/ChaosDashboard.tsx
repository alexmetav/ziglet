import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Task } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChaosDashboardProps {
  tasks: Task[];
}

const ChaosDashboard: React.FC<ChaosDashboardProps> = ({ tasks }) => {
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <Card className="p-6" glow={true}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Today’s Chaos</h2>
          <p className="text-sm text-slate-400">Complete tasks to fuel your bag.</p>
        </div>
        <div className="w-full md:w-48">
           <div className="flex justify-between text-xs mb-1">
             <span className="text-slate-400">Progress</span>
             <span className="text-brand-cyan font-bold">{Math.round(progress)}%</span>
           </div>
           <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-500"
               style={{ width: `${progress}%` }}
             />
           </div>
           {progress === 100 ? (
             <p className="text-xs text-green-400 mt-1 text-center font-bold">Absolute Unit. All Done.</p>
           ) : (
             <p className="text-xs text-slate-500 mt-1 text-right">Almost there...</p>
           )}
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`
              flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group
              ${task.status === 'completed' ? 'bg-slate-900/30 border-slate-800 opacity-60' : 'bg-slate-800/40 border-slate-700 hover:border-brand-purple/50'}
            `}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${task.status === 'completed' ? 'bg-slate-800' : 'bg-slate-900'}`}>
                {task.icon}
              </div>
              <div>
                <h3 className={`font-bold ${task.status === 'completed' ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                  {task.title}
                </h3>
                <span className="text-xs font-mono text-brand-green">+{task.reward} ZIG</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
               {task.status === 'completed' ? (
                 <CheckCircle2 className="h-6 w-6 text-green-500" />
               ) : (
                 <Button size="sm" variant={task.status === 'locked' ? 'ghost' : 'secondary'}>
                   {task.actionLabel}
                 </Button>
               )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChaosDashboard;