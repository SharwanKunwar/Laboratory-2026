import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms, requests, billings } from '../api/client';

export function OwnerDashboard() {
  const [myRooms, setMyRooms] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const [billingList, setBillingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([rooms.getMy(), requests.incoming(), billings.list()])
      .then(([r1, r2, r3]) => {
        setMyRooms(r1.data);
        setIncoming(r2.data);
        setBillingList(r3.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const [respondId, setRespondId] = useState(null);
  const handleRespond = async (id, status) => {
    setRespondId(id);
    try {
      await requests.respond(id, status);
      setIncoming((prev) => prev.filter((x) => x.id !== id));
    } catch (e) {
      alert('Failed to update');
    } finally {
      setRespondId(null);
    }
  };

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-12 text-slate-400">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-white mb-8">
        Owner Dashboard
      </motion.h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <section>
          <h2 className="text-lg font-semibold text-slate-200 mb-4">My rooms</h2>
          <div className="space-y-3">
            {myRooms.length === 0 ? (
              <p className="text-slate-500 text-sm">No rooms yet.</p>
            ) : (
              myRooms.map((r) => (
                <Link
                  key={r.id}
                  to={'/rooms/' + r.id}
                  className="block p-3 rounded-lg border border-slate-700/50 bg-slate-800/40 text-white hover:border-emerald-500/50"
                >
                  {r.title} — Rs {Number(r.rentPerMonth).toLocaleString()}/mo
                </Link>
              ))
            )}
            <Link
              to="/owner/rooms/new"
              className="inline-block mt-2 text-emerald-400 hover:underline text-sm"
            >
              + Add room
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Tour requests</h2>
          <div className="space-y-3">
            {incoming.length === 0 ? (
              <p className="text-slate-500 text-sm">No pending requests.</p>
            ) : (
              incoming.map((req) => (
                <div
                  key={req.id}
                  className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/40"
                >
                  <p className="text-white font-medium">{req.roomTitle}</p>
                  <p className="text-slate-400 text-sm">{req.seekerName} — {req.status}</p>
                  {req.message && <p className="text-slate-500 text-xs mt-1">{req.message}</p>}
                  {req.status === 'PENDING' && (
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        disabled={respondId === req.id}
                        onClick={() => handleRespond(req.id, 'APPROVED')}
                        className="text-sm px-2 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        disabled={respondId === req.id}
                        onClick={() => handleRespond(req.id, 'REJECTED')}
                        className="text-sm px-2 py-1 rounded bg-slate-600 text-white hover:bg-slate-500 disabled:opacity-50"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Billing & payments</h2>
          <div className="space-y-3">
            {billingList.length === 0 ? (
              <p className="text-slate-500 text-sm">No billings yet.</p>
            ) : (
              billingList.slice(0, 5).map((b) => (
                <Link
                  key={b.id}
                  to={'/owner/billing'}
                  className="block p-3 rounded-lg border border-slate-700/50 bg-slate-800/40 text-slate-300 hover:border-emerald-500/50"
                >
                  {b.roomTitle} — {b.billingYear}-{String(b.billingMonth).padStart(2, '0')} — Rs {Number(b.amount).toLocaleString()} ({b.status})
                </Link>
              ))
            )}
            <Link to="/owner/billing" className="inline-block mt-2 text-emerald-400 hover:underline text-sm">
              View all billing
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
