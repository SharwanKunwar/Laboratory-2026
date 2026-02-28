import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { rooms } from '../api/client';

export function RoomList() {
  const [list, setList] = useState([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rooms.listPublic(city || null).then((r) => setList(r.data)).catch(() => setList([])).finally(() => setLoading(false));
  }, [city]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Available rooms</h1>
        <input
          type="text"
          placeholder="Filter by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none w-full sm:w-64"
        />
      </div>
      {loading ? (
        <div className="text-slate-400 text-center py-12">Loading...</div>
      ) : (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {list.length === 0 ? (
              <li className="col-span-full text-center text-slate-500 py-12">No rooms found.</li>
            ) : (
              list.map((room) => (
                <motion.li
                  key={room.id}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  layout
                >
                  <Link
                    to={'/rooms/' + room.id}
                    className="block rounded-xl border border-slate-700/50 bg-slate-800/40 overflow-hidden hover:border-emerald-500/50 hover:bg-slate-800/60 transition"
                  >
                    <div className="aspect-video bg-slate-700/50 flex items-center justify-center text-slate-500">
                      {room.imageUrls ? (
                        <img src={room.imageUrls.split(',')[0].trim()} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <span>No image</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="font-semibold text-white truncate">{room.title}</h2>
                      <p className="text-slate-400 text-sm mt-1">{room.city || room.area || room.address}</p>
                      <p className="text-emerald-400 font-medium mt-2">Rs {Number(room.rentPerMonth).toLocaleString()}/month</p>
                    </div>
                  </Link>
                </motion.li>
              ))
            )}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}
