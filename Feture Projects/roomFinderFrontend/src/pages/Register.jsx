import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { auth } from '../api/client';

export function Register() {
  const [form, setForm] = useState({ email: '', password: '', fullName: '', phone: '', role: 'SEEKER' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await auth.register(form);
      login(data);
      navigate(data.role === 'OWNER' ? '/owner' : '/seeker', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Create account</h1>
        <p className="text-slate-400 text-sm mb-6">Join as Owner or Seeker</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-500/20 text-red-300 px-3 py-2 text-sm">{error}</div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full name</label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              required
              minLength={6}
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone (optional)</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="98..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">I am a</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="SEEKER"
                  checked={form.role === 'SEEKER'}
                  onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                  className="text-emerald-500"
                />
                <span className="text-slate-300">Seeker (looking for a room)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="OWNER"
                  checked={form.role === 'OWNER'}
                  onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                  className="text-emerald-500"
                />
                <span className="text-slate-300">Owner (list rooms)</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 py-2.5 font-medium text-white hover:bg-emerald-500 disabled:opacity-50 transition"
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>
        <p className="mt-6 text-center text-slate-400 text-sm">
          Already have an account? <Link to="/login" className="text-emerald-400 hover:underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
