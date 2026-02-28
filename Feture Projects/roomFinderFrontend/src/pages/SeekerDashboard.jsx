import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { requests } from '../api/client';

export function SeekerDashboard() {
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requests.my().then((r) => setMyRequests(r.data)).catch(() => setMyRequests([])).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-12 text-slate-400">Loading...</div>;
  }

  const statusColor = (s) => {
    if (s === 'APPROVED') return 'text-emerald-400';
    if (s === 'REJECTED') return 'text-red-400';
    if (s === 'COMPLETED') return 'text-slate-400';
    return 'text-amber-400';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-white mb-8">
        My tour requests
      </motion.h1>
      <div className="space-y-4">
        {myRequests.length === 0 ? (
          <p className="text-slate-500">
            You haven&apos;t requested any tours yet.{' '}
            <Link to="/rooms" className="text-emerald-400 hover:underline">Browse rooms</Link>
          </p>
        ) : (
          myRequests.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <Link to={'/rooms/' + req.roomId} className="font-medium text-white hover:text-emerald-400">
                  {req.roomTitle}
                </Link>
                <p className={`text-sm mt-1 ${statusColor(req.status)}`}>{req.status}</p>
                {req.preferredTourTime && (
                  <p className="text-slate-500 text-xs mt-1">Preferred: {req.preferredTourTime}</p>
                )}
              </div>
              <span className="text-slate-400 text-sm">
                Requested {new Date(req.createdAt).toLocaleDateString()}
              </span>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
