import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms } from '../api/client';

export function OwnerRoomForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', description: '', address: '', city: '', area: '',
    rentPerMonth: '', bedrooms: '', bathrooms: '', furnished: false, imageUrls: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = {
        ...form,
        rentPerMonth: form.rentPerMonth ? Number(form.rentPerMonth) : 0,
        bedrooms: form.bedrooms ? Number(form.bedrooms) : null,
        bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
        furnished: !!form.furnished,
      };
      await rooms.create(payload);
      navigate('/owner');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create room');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold text-white mb-6">Add room</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="rounded-lg bg-red-500/20 text-red-300 px-3 py-2 text-sm">{error}</div>}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Title *</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            placeholder="e.g. Cozy room in Thamel"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            placeholder="Describe the room..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Address *</label>
          <input
            required
            value={form.address}
            onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            placeholder="Street, ward no."
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">City</label>
            <input
              value={form.city}
              onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
              placeholder="Kathmandu"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Area</label>
            <input
              value={form.area}
              onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
              placeholder="Thamel"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Rent per month (Rs) *</label>
          <input
            required
            type="number"
            min="0"
            value={form.rentPerMonth}
            onChange={(e) => setForm((f) => ({ ...f, rentPerMonth: e.target.value }))}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            placeholder="15000"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Bedrooms</label>
            <input
              type="number"
              min="0"
              value={form.bedrooms}
              onChange={(e) => setForm((f) => ({ ...f, bedrooms: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Bathrooms</label>
            <input
              type="number"
              min="0"
              value={form.bathrooms}
              onChange={(e) => setForm((f) => ({ ...f, bathrooms: e.target.value }))}
              className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="furnished"
            checked={form.furnished}
            onChange={(e) => setForm((f) => ({ ...f, furnished: e.target.checked }))}
            className="rounded text-emerald-500"
          />
          <label htmlFor="furnished" className="text-slate-300 text-sm">Furnished</label>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Image URLs (comma-separated)</label>
          <input
            value={form.imageUrls}
            onChange={(e) => setForm((f) => ({ ...f, imageUrls: e.target.value }))}
            className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
            placeholder="https://..."
          />
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-white font-medium hover:bg-emerald-500 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Create room'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/owner')}
            className="rounded-lg border border-slate-600 px-6 py-2.5 text-slate-300 hover:bg-slate-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
}
