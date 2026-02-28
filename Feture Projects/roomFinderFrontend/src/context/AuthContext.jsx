import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const s = localStorage.getItem('user');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onLogout = () => setUser(null);
    window.addEventListener('auth-logout', onLogout);
    return () => window.removeEventListener('auth-logout', onLogout);
  }, []);

  const login = (data) => {
    setUser({
      id: data.id,
      email: data.email,
      fullName: data.fullName,
      role: data.role,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify({ id: data.id, email: data.email, fullName: data.fullName, role: data.role }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, setLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
