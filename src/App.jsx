import React, { useEffect, useState } from 'react';
import StatsHeader from './components/StatsHeader';
import BodyHeatmap from './components/BodyHeatmap';
import WorkoutForm from './components/WorkoutForm';
import AnalyticsChart from './components/AnalyticsChart';
import { fetchSystemData, logWorkout } from './services/api';

export default function App() {
  const [data, setData] = useState({ stats: null, logs: [], muscleStats: {} });
  const [loading, setLoading] = useState(false);
  const [levelModal, setLevelModal] = useState(null);

  const loadData = async () => {
    const res = await fetchSystemData();
    if (res) setData(res);
  };

  useEffect(() => { loadData(); }, []);

  const handleWorkoutSubmit = async (payload) => {
    setLoading(true);
    const result = await logWorkout(payload);
    setLoading(false);

    if (result.status === 'success') {
      if (result.leveledUp) setLevelModal(result.newLevel);
      loadData();
    }
  };

  return (
    <main className="max-w-xl mx-auto p-4 min-h-screen pb-12">
      <StatsHeader stats={data.stats} />
      <BodyHeatmap muscleStats={data.muscleStats} />
      <WorkoutForm onSubmit={handleWorkoutSubmit} loading={loading} />
      <AnalyticsChart logs={data.logs} />

      {levelModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="system-window p-6 rounded-lg text-center max-w-sm w-full border-2 border-cyan-400 shadow-glow-cyan">
            <h2 className="text-3xl font-black text-cyan-300 mb-2">LEVEL UP!</h2>
            <p className="text-slate-300 mb-4">Reached Level <span className="text-purple-400 font-bold">{levelModal}</span>.</p>
            <button onClick={() => setLevelModal(null)} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-2 rounded uppercase">
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </main>
  );
}