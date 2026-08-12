import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default function AnalyticsChart({ logs }) {
  if (!logs || logs.length === 0) return null;

  const chartData = logs.slice(-10).map((log, idx) => ({
    name: `W${idx + 1}`,
    xp: log.xpEarned,
    category: log.category
  }));

  return (
    <div className="system-window p-4 rounded-lg">
      <div className="text-xs text-purple-400 font-bold tracking-widest uppercase mb-3">[ SYSTEM ANALYTICS: XP GAINS ]</div>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#0b1120', borderColor: '#00f0ff', color: '#fff' }} />
            <Area type="monotone" dataKey="xp" stroke="#00f0ff" fillOpacity={1} fill="url(#colorXp)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}