import React, { useRef, useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';

const MemeFactory: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Card className="p-6 md:p-8" glow>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
          Meme Factory 🏭
        </h2>
        <p className="text-slate-400">
          Good memes only. No effort = no rewards. <br/>
          <span className="text-xs text-slate-500">(We judge you harshly)</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div className="flex flex-col gap-4">
          <div 
            className="flex-1 min-h-[250px] border-2 border-dashed border-slate-700 hover:border-brand-purple rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 bg-slate-900/50 cursor-pointer group"
            onClick={() => fileInputRef.current?.click()}
          >
             <input 
               type="file" 
               className="hidden" 
               ref={fileInputRef} 
               accept="image/*"
               onChange={handleFileChange}
             />
             
             <div className="bg-slate-800 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
               <Upload className="h-8 w-8 text-brand-purple" />
             </div>
             
             {fileName ? (
               <p className="font-bold text-brand-cyan truncate max-w-full">{fileName}</p>
             ) : (
               <>
                 <p className="font-bold text-white text-lg">Drop your cooked memes</p>
                 <p className="text-sm text-slate-500 mt-2">JPG, PNG, GIF (Max 5MB)</p>
               </>
             )}
          </div>
          <Button disabled={!fileName} className="w-full">
            Submit to Council
          </Button>
        </div>

        {/* Rules & Status */}
        <div className="space-y-4">
           <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-500" /> 
                Submission Criteria
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> Original content preferred
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> Must include $ZIG ticker or logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span> No low-effort reposts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span> Don't be boring
                </li>
              </ul>
           </div>

           <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 p-4 rounded-xl border border-brand-purple/20">
              <h3 className="font-bold text-brand-cyan mb-2">Rewards</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Approved Meme</span>
                <span className="font-bold text-white">+150 ZIG</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-slate-300">Viral Bonus (&gt;100 Likes)</span>
                <span className="font-bold text-yellow-400">+500 ZIG</span>
              </div>
           </div>
        </div>
      </div>
    </Card>
  );
};

export default MemeFactory;