import React from 'react';

export default function BodyHeatmap({ muscleStats }) {
  const getMuscleStyle = (muscleName) => {
    const data = muscleStats?.[muscleName] || { hueAngle: 0 };
    const hue = data.hueAngle || 0;
    return {
      fill: `hsl(${hue}, 100%, 45%)`,
      filter: `drop-shadow(0px 0px 6px hsl(${hue}, 100%, 50%))`,
      transition: 'all 0.8s ease-in-out'
    };
  };

  return (
    <div className="system-window p-4 rounded-lg mb-6 border-cyan-500/40">
      <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-3 text-center">
        [ SYSTEM STATUS: MUSCLE SATURATION MAP ]
      </div>

      <div className="flex justify-around items-center h-64 my-2">
        <svg viewBox="0 0 200 300" className="h-full w-auto">
          <circle cx="100" cy="30" r="16" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
          <path id="Chest" d="M75 55 H125 V85 H75 Z" style={getMuscleStyle('Chest')} />
          <path id="Abs" d="M80 88 H120 V130 H80 Z" style={getMuscleStyle('Abs')} />
          <rect id="Biceps-L" x="52" y="60" width="18" height="35" rx="5" style={getMuscleStyle('Biceps')} />
          <rect id="Biceps-R" x="130" y="60" width="18" height="35" rx="5" style={getMuscleStyle('Biceps')} />
          <circle id="Shoulder-L" cx="60" cy="55" r="10" style={getMuscleStyle('Shoulders')} />
          <circle id="Shoulder-R" cx="140" cy="55" r="10" style={getMuscleStyle('Shoulders')} />
          <path id="Quads-L" d="M75 135 L93 135 L90 200 L72 200 Z" style={getMuscleStyle('Quads')} />
          <path id="Quads-R" d="M107 135 L125 135 L128 200 L110 200 Z" style={getMuscleStyle('Quads')} />
          <rect id="Calves-L" x="72" y="205" width="16" height="50" rx="3" style={getMuscleStyle('Quads')} />
          <rect id="Calves-R" x="112" y="205" width="16" height="50" rx="3" style={getMuscleStyle('Quads')} />
        </svg>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-1">
          <span className="text-red-500">UNTRAINED (0%)</span>
          <span className="text-yellow-400">PROGRESSING (50%)</span>
          <span className="text-emerald-400">AWAKENED (100%)</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gradient-to-r from-red-600 via-yellow-400 to-emerald-400 border border-slate-700" />
      </div>
    </div>
  );
}