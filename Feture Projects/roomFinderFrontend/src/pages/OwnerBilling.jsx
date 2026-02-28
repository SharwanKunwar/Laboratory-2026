import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { billings, payments, rooms } from '../api/client';

export function OwnerBilling() {
  const [list, setList] = useState([]);
  const [myRooms, setMyRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [paymentModal, setPaymentModal] = useState(null);

  useEffect(() => {
    billings.list().then((r) => setList(r.data)).catch(() => setList([]));
    rooms.getMy().then((r) => setMyRooms(r.data)).catch(() => setMyRooms([]));
  }, []);

  useEffect(() => {
    if (!showAdd && !paymentModal) return;
    setLoading(false);
  }, [showAdd, paymentModal]);

  useEffect(() => {
    if (!showAdd) return;
    setLoading(false);
  }, [showAdd]);

  const refresh = () => {
    setLoading(true);
    billings.list().then((r) => setList(r.data)).finally(() => setLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Billing & payments</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowAdd(true)}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-500"
          >
            Add billing
          </button>
          <Link to="/owner" className="rounded-lg border border-slate-600 px-4 py-2 text-slate-300 hover:bg-slate-800">
            Back
          </Link>
        </div>
      </div>
      {loading && list.length === 0 ? (
        <p className="text-slate-400">Loading...</p>
      ) : (
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
          {list.map((b) => (
            <li
              key={b.id}
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/40 flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <p className="text-white font-medium">{b.roomTitle}</p>
                <p className="text-slate-400 text-sm">
                  {b.billingYear}-{String(b.billingMonth).padStart(2, '0')} — Rs {Number(b.amount).toLocaleString()} — {b.status}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPaymentModal(b)}
                className="rounded-lg bg-slate-700 px-3 py-1.5 text-slate-300 text-sm hover:bg-slate-600"
              >
                Record payment
              </button>
            </li>
          ))}
        </motion.ul>
      )}
      {showAdd && (
        <AddBillingModal
          rooms={myRooms}
          onClose={() => setShowAdd(false)}
          onSaved={() => { setShowAdd(false); refresh(); }}
        />
      )}
      {paymentModal && (
        <AddPaymentModal
          billing={paymentModal}
          onClose={() => setPaymentModal(null)}
          onSaved={() => { setPaymentModal(null); refresh(); }}
        />
      )}
    </div>
  );
}

function AddBillingModal({ rooms: roomList, onClose, onSaved }) {
  const [form, setForm] = useState({
    roomId: '', billingYear: new Date().getFullYear(), billingMonth: new Date().getMonth() + 1, amount: '', dueDate: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await billings.create({
        roomId: Number(form.roomId),
        billingYear: form.billingYear,
        billingMonth: form.billingMonth,
        amount: Number(form.amount),
        dueDate: form.dueDate ? new Date(form.dueDate).toISOString() : null,
      });
      onSaved();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6"
      >
        <h2 className="text-lg font-semibold text-white mb-4">New billing</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Room</label>
            <select
              required
              value={form.roomId}
              onChange={(e) => setForm((f) => ({ ...f, roomId: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            >
              <option value="">Select room</option>
              {roomList.map((r) => (
                <option key={r.id} value={r.id}>{r.title}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Year</label>
              <input
                type="number"
                required
                value={form.billingYear}
                onChange={(e) => setForm((f) => ({ ...f, billingYear: e.target.value }))}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Month (1-12)</label>
              <input
                type="number"
                min="1"
                max="12"
                required
                value={form.billingMonth}
                onChange={(e) => setForm((f) => ({ ...f, billingMonth: e.target.value }))}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Amount (Rs)</label>
            <input
              type="number"
              required
              min="0"
              value={form.amount}
              onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Due date (optional)</label>
            <input
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm((f) => ({ ...f, dueDate: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" disabled={loading} className="rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm disabled:opacity-50">
              Save
            </button>
            <button type="button" onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-slate-300 text-sm">
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function AddPaymentModal({ billing, onClose, onSaved }) {
  const [form, setForm] = useState({
    amount: billing.amount, method: 'CASH', transactionId: '', notes: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await payments.create({
        billingId: billing.id,
        amount: Number(form.amount),
        method: form.method,
        transactionId: form.transactionId || null,
        notes: form.notes || null,
      });
      onSaved();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6"
      >
        <h2 className="text-lg font-semibold text-white mb-1">Record payment</h2>
        <p className="text-slate-400 text-sm mb-4">{billing.roomTitle} — {billing.billingYear}-{String(billing.billingMonth).padStart(2, '0')}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Amount (Rs)</label>
            <input
              type="number"
              required
              min="0.01"
              step="0.01"
              value={form.amount}
              onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Method</label>
            <select
              value={form.method}
              onChange={(e) => setForm((f) => ({ ...f, method: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            >
              <option value="CASH">Cash</option>
              <option value="BANK_TRANSFER">Bank transfer</option>
              <option value="ESEWA">eSewa</option>
              <option value="KHALTI">Khalti</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Transaction ID (optional)</label>
            <input
              value={form.transactionId}
              onChange={(e) => setForm((f) => ({ ...f, transactionId: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Notes (optional)</label>
            <input
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" disabled={loading} className="rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm disabled:opacity-50">
              Save
            </button>
            <button type="button" onClick={onClose} className="rounded-lg border border-slate-600 px-4 py-2 text-slate-300 text-sm">
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
