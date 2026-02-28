import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find your perfect room in Nepal
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          RoomFinder.np connects room seekers with owners. Browse listings, request tours, and manage billing in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/rooms"
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/25"
          >
            Browse rooms
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition"
          >
            List your room
          </Link>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-24 grid md:grid-cols-3 gap-6"
      >
        {[
          { title: 'For Seekers', desc: 'Browse available rooms, request tours, and track your requests.', to: '/rooms', cta: 'Browse' },
          { title: 'For Owners', desc: 'List rooms, manage tour requests, and track billing and payments.', to: '/register', cta: 'Get started' },
          { title: 'Simple & fast', desc: 'Role-based dashboards and notifications keep everything in one place.', to: '/login', cta: 'Sign in' },
        ].map((card, i) => (
          <Link
            key={card.title}
            to={card.to}
            className="block p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-emerald-500/50 hover:bg-slate-800/50 transition"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{card.desc}</p>
            <span className="text-emerald-400 text-sm font-medium">{card.cta} →</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
