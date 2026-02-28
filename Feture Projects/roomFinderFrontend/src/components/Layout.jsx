import { Link, useNavigate, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { notifications } from '../api/client';
import { useState, useEffect } from 'react';

export function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [unread, setUnread] = useState(0);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    if (!user) return;
    notifications.unreadCount().then((r) => setUnread(r.data.count)).catch(() => {});
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to={user ? (user.role === 'OWNER' ? '/owner' : '/seeker') : '/'} className="text-xl font-bold text-emerald-400">
            RoomFinder.np
          </Link>
          <nav className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/rooms" className="text-slate-300 hover:text-white transition">Rooms</Link>
                {user.role === 'OWNER' && <Link to="/owner" className="text-slate-300 hover:text-white transition">Dashboard</Link>}
                {user.role === 'SEEKER' && <Link to="/seeker" className="text-slate-300 hover:text-white transition">My Requests</Link>}
                <button
                  type="button"
                  onClick={() => setShowNotif(!showNotif)}
                  className="relative p-2 text-slate-400 hover:text-white transition"
                  aria-label="Notifications"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {unread > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-500 text-[10px] text-slate-900 font-bold flex items-center justify-center">
                      {unread > 9 ? '9+' : unread}
                    </span>
                  )}
                </button>
                <span className="text-slate-400 text-sm">{user.fullName}</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/rooms" className="text-slate-300 hover:text-white transition">Browse</Link>
                <Link to="/login" className="px-3 py-1.5 rounded-lg text-slate-300 hover:bg-slate-700 transition">Login</Link>
                <Link to="/register" className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition">Register</Link>
              </>
            )}
          </nav>
        </div>
        {showNotif && user && (
          <div className="absolute right-4 top-full mt-1 w-80 max-h-96 overflow-auto rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
            <NotificationsPanel onClose={() => setShowNotif(false)} onRead={() => setUnread((c) => Math.max(0, c - 1))} />
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

function NotificationsPanel({ onClose, onRead }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    notifications.list().then((r) => setList(r.data)).catch(() => {});
  }, []);
  return (
    <div className="p-2">
      <div className="flex justify-between items-center px-2 py-1">
        <span className="font-medium text-slate-200">Notifications</span>
        <button type="button" onClick={() => notifications.markAllRead().then(onRead)} className="text-xs text-emerald-400 hover:underline">
          Mark all read
        </button>
      </div>
      <ul className="divide-y divide-slate-700/50">
        {list.length === 0 && <li className="py-4 text-center text-slate-500 text-sm">No notifications</li>}
        {list.map((n) => (
          <li
            key={n.id}
            className={`px-3 py-2 text-sm ${n.read ? 'text-slate-500' : 'text-slate-200'}`}
          >
            <p className="font-medium">{n.title}</p>
            {n.body && <p className="text-slate-400 truncate">{n.body}</p>}
            <button
              type="button"
              onClick={() => { notifications.markRead(n.id).then(onRead); onClose(); }}
              className="text-xs text-emerald-400 hover:underline mt-1"
            >
              {n.read ? 'Read' : 'Mark read'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
