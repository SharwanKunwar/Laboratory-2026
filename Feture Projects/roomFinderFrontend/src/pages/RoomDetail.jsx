import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms, requests } from '../api/client';
import { useAuth } from '../context/AuthContext';

export function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requesting, setRequesting] = useState(false);
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  useEffect(() => {
    rooms.getPublic(id).then((r) => setRoom(r.data)).catch(() => setRoom(null)).finally(() => setLoading(false));
  }, [id]);

  const handleRequestTour = async (e) => {
    e.preventDefault();
    if (!user || user.role !== 'SEEKER') {
      navigate('/login');
      return;
    }
    setRequesting(true);
    try {
      await requests.create({
        roomId: Number(id),
        message: message || undefined,
        preferredTourTime: preferredTime || null,
      });
      navigate('/seeker');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to submit request');
    } finally {
      setRequesting(false);
    }
  };

  if (loading || !room) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-slate-400 text-center">
        {loading ? 'Loading...' : 'Room not found.'}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 overflow-hidden">
        <div className="aspect-video bg-slate-700/50 flex items-center justify-center text-slate-500">
          {room.imageUrls ? (
            <img src={room.imageUrls.split(',')[0].trim()} alt="" className="w-full h-full object-cover" />
          ) : (
            <span>No image</span>
          )}
        </div>
        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold text-white">{room.title}</h1>
          <p className="text-emerald-400 font-medium mt-1">Rs {Number(room.rentPerMonth).toLocaleString()}/month</p>
          <p className="text-slate-400 text-sm mt-2">{room.address}{room.city ? ', ' + room.city : ''}</p>
          {room.description && <p className="text-slate-300 mt-4 whitespace-pre-wrap">{room.description}</p>}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
            {room.bedrooms != null && <span>{room.bedrooms} bed</span>}
            {room.bathrooms != null && <span>{room.bathrooms} bath</span>}
            {room.furnished != null && <span>{room.furnished ? 'Furnished' : 'Unfurnished'}</span>}
          </div>
          {user && user.role === 'SEEKER' && (
            <form onSubmit={handleRequestTour} className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 space-y-3">
              <h3 className="font-medium text-white">Request a tour</h3>
              <input
                type="datetime-local"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message (optional)"
                rows={2}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={requesting}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-500 disabled:opacity-50"
              >
                {requesting ? 'Sending...' : 'Send request'}
              </button>
            </form>
          )}
          {!user && (
            <p className="mt-6 text-slate-400">
              <Link to="/login" className="text-emerald-400 hover:underline">Sign in</Link> as a seeker to request a tour.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
