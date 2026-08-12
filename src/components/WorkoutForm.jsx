import React, { useState } from 'react';
import { Dumbbell, Flame, Bike, Target, Send } from 'lucide-react';

const CATEGORIES = [
  { id: 'Functional Trainer', icon: Dumbbell },
  { id: 'Treadmill', icon: Flame },
  { id: 'Stationary Bike', icon: Bike },
  { id: 'Abs', icon: Target },
];

const FUNCTIONAL_EXERCISES = {
  "Arms": {
    "Biceps": ["Cable Bicep Curl", "Single-Arm Cable Curl", "High Cable Bicep Curl"],
    "Triceps": ["Triceps Rope Pushdown", "Overhead Cable Triceps Extension", "Straight Bar Triceps Pushdown"]
  },
  "Chest": {
    "General Chest": ["Standing Cable Chest Fly", "Flat Cable Chest Press", "Incline Cable Chest Press"]
  },
  "Back": {
    "Lats": ["Lat Pulldown (Rope/Bar Attachment)", "Single-Arm Cable Lat Pulldown", "Straight-Arm Cable Pulldown"]
  },
  "Shoulders": {
    "Deltoids": ["Cable Front Raise", "Cable Lateral Raise", "Cable Rear Delt Fly", "Rope Face Pull"]
  },
  "Legs & Glutes": {
    "Lower Body": ["Cable Goblet Squat", "Cable Romanian Deadlift", "Cable Kickback", "Cable Pull-Through"]
  }
};

export default function WorkoutForm({ onSubmit, loading }) {
  const [category, setCategory] = useState('Functional Trainer');
  const [formData, setFormData] = useState({
    exercise: '', weight: '', setsReps: '', speed: '', incline: '', resistance: '', duration: '', distance: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      category, exercise: formData.exercise,
      weight: Number(formData.weight) || 0, setsReps: formData.setsReps,
      speed: Number(formData.speed) || 0, incline: Number(formData.incline) || 0,
      resistance: Number(formData.resistance) || 0, duration: Number(formData.duration) || 0,
      distance: Number(formData.distance) || 0
    });
    setFormData({ exercise: '', weight: '', setsReps: '', speed: '', incline: '', resistance: '', duration: '', distance: '' });
  };

  return (
    <div className="system-window p-4 rounded-lg mb-6">
      <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-3">[ EXECUTE DAILY QUEST ]</div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {CATEGORIES.map(({ id, icon: Icon }) => (
          <button
            key={id} type="button"
            onClick={() => { setCategory(id); setFormData({ exercise: '', weight: '', setsReps: '', speed: '', incline: '', resistance: '', duration: '', distance: '' }); }}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded text-sm font-bold border transition-all ${
              category === id ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-glow-cyan' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="truncate">{id}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {category === 'Functional Trainer' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select name="exercise" value={formData.exercise} onChange={handleChange} required className="sys-input bg-slate-950 text-white">
              <option value="" disabled>-- Select Target Exercise --</option>
              {Object.entries(FUNCTIONAL_EXERCISES).map(([bodyPart, muscleGroups]) => (
                <optgroup key={bodyPart} label={`=== ${bodyPart.toUpperCase()} ===`}>
                  {Object.entries(muscleGroups).map(([group, exList]) => (
                    <React.Fragment key={group}>
                      <option disabled className="text-cyan-400 font-semibold">{`  • ${group}`}</option>
                      {exList.map(ex => <option key={ex} value={ex}>{`    ${ex}`}</option>)}
                    </React.Fragment>
                  ))}
                </optgroup>
              ))}
            </select>
            <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight (lbs)" required className="sys-input" />
            <input name="setsReps" value={formData.setsReps} onChange={handleChange} placeholder="Sets x Reps (e.g. 3x12)" required className="sys-input" />
          </div>
        )}

        {(category === 'Treadmill' || category === 'Stationary Bike') && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <input name="speed" type="number" step="0.1" value={formData.speed} onChange={handleChange} placeholder="Speed (mph)" className="sys-input" />
            {category === 'Treadmill' ? (
              <input name="incline" type="number" step="0.5" value={formData.incline} onChange={handleChange} placeholder="Incline (%)" className="sys-input" />
            ) : (
              <input name="resistance" type="number" value={formData.resistance} onChange={handleChange} placeholder="Resistance" className="sys-input" />
            )}
            <input name="duration" type="number" value={formData.duration} onChange={handleChange} placeholder="Duration (min)" required className="sys-input" />
            <input name="distance" type="number" step="0.01" value={formData.distance} onChange={handleChange} placeholder="Distance (mi)" required className="sys-input" />
          </div>
        )}

        {category === 'Abs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="exercise" value={formData.exercise} onChange={handleChange} placeholder="Core Routine Name" required className="sys-input" />
            <input name="duration" type="number" value={formData.duration} onChange={handleChange} placeholder="Duration (min)" required className="sys-input" />
          </div>
        )}

        <button type="submit" disabled={loading} className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-2.5 rounded flex items-center justify-center gap-2 uppercase tracking-wider shadow-glow-cyan transition-all">
          <Send className="w-4 h-4" />
          {loading ? 'Transmitting to System...' : 'Submit Log & Gain XP'}
        </button>
      </form>
    </div>
  );
}