import React from 'react';
import { Zap, Activity, Heart } from 'lucide-react';

export default function StatsHeader({ stats }) {
  if (!stats) return null;
  
  const xpNeeded = stats.level * 250;
  const xpPercentage = Math.min(100, Math.round((stats.xp / xpNeeded) * 100));

  return (
    <div className="system-window p-4 rounded-lg mb-6 border-cyan-500/50 shadow-glow-cyan">
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-xs text-cyan-400 font-bold tracking-widest uppercase">[ SYSTEM PLAYER STATUS ]</span>
          <h1 className="text-2xl font-bold tracking-wide text-white">Vanshaj</h1>
        </div>
        <div className="text-right">
          <span className="text-xs text-purple-400 font-bold uppercase">RANK</span>
          <div className="text-xl font-bold text-purple-300">E-RANK HUNTER</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1 font-semibold">
          <span className="text-cyan-300">LEVEL {stats.level}</span>
          <span className="text-slate-400">{stats.xp} / {xpNeeded} XP ({xpPercentage}%)</span>
        </div>
        <div className="w-full bg-slate-900 rounded-full h-3 border border-cyan-900 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-500"
            style={{ width: `${xpPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-950/60 p-2.5 rounded border border-cyan-500/20 flex items-center gap-2">
          <Zap className="text-cyan-400 w-5 h-5" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase">STR</div>
            <div className="text-lg font-bold text-white">{stats.strength}</div>
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded border border-purple-500/20 flex items-center gap-2">
          <Activity className="text-purple-400 w-5 h-5" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase">END</div>
            <div className="text-lg font-bold text-white">{stats.endurance}</div>
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded border border-emerald-500/20 flex items-center gap-2">
          <Heart className="text-emerald-400 w-5 h-5" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase">VIT</div>
            <div className="text-lg font-bold text-white">{stats.vitality}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
