import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { RoomList } from './pages/RoomList';
import { RoomDetail } from './pages/RoomDetail';
import { OwnerDashboard } from './pages/OwnerDashboard';
import { OwnerRoomForm } from './pages/OwnerRoomForm';
import { OwnerBilling } from './pages/OwnerBilling';
import { SeekerDashboard } from './pages/SeekerDashboard';

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={user ? <Navigate to={user.role === 'OWNER' ? '/owner' : '/seeker'} replace /> : <Login />} />
        <Route path="register" element={user ? <Navigate to={user.role === 'OWNER' ? '/owner' : '/seeker'} replace /> : <Register />} />
        <Route path="rooms" element={<RoomList />} />
        <Route path="rooms/:id" element={<RoomDetail />} />
        <Route path="owner" element={<ProtectedRoute role="OWNER"><OwnerDashboard /></ProtectedRoute>} />
        <Route path="owner/rooms/new" element={<ProtectedRoute role="OWNER"><OwnerRoomForm /></ProtectedRoute>} />
        <Route path="owner/billing" element={<ProtectedRoute role="OWNER"><OwnerBilling /></ProtectedRoute>} />
        <Route path="seeker" element={<ProtectedRoute role="SEEKER"><SeekerDashboard /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
