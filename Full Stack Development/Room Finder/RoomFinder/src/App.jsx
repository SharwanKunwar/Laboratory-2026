import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SeekerDashboard from "./pages/SeekerDashboard";
import Feed from "./seekerPages/Feed";
import OwnerDashboard from "./pages/OwnerDashboard";
import SavedRoom from "./seekerPages/SavedRoom";
import MyRoom from "./seekerPages/MyRoom";
import Settings from "./seekerPages/Settings";
import OwnerSettings from "./ownerPages/OwnerSettings";
import DashboardOwner from "./ownerPages/DashboardOwner";
import Message from "./ownerPages/Message";
import Profile from "./ownerPages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Seeker Dashboard with nested routes */}
        <Route path="/seeker" element={<SeekerDashboard />}>
          <Route index element={<Feed />} />          {/* default /seeker */}
          <Route path="feed" element={<Feed />} />   {/* /seeker/feed */}
          <Route path="savedRoom" element={<SavedRoom/>}/>
          <Route path="myRoom" element={<MyRoom/>}/>
          <Route path="settings" element={<Settings/>}/>
          {/* You can add more nested routes here, e.g. saved, application */}
        </Route>

        {/* Owner Dashboard */}
        <Route path="/owner" element={<OwnerDashboard />} >
          <Route index element={<DashboardOwner/>} />          {/* default /seeker */}
          <Route path="dashboardOwner" element={<DashboardOwner />} />   {/* /seeker/feed */}
          <Route path="messages" element={<Message/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="ownerSettings" element={<OwnerSettings/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
