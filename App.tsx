import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ExecutiveDashboard from './screens/ExecutiveDashboard';
import ActiveProjects from './screens/ActiveProjects';
import SuppliesScreen from './screens/SuppliesScreen';
import MenuScreen from './screens/MenuScreen';
import DailyReportScreen from './screens/DailyReportScreen';
import BottomNav from './components/BottomNav';

// Layout for authenticated screens that show the bottom navigation
const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Outlet />
      <BottomNav />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        
        {/* Authenticated Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<ExecutiveDashboard />} />
          <Route path="/projects" element={<ActiveProjects />} />
          <Route path="/supplies" element={<SuppliesScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
        </Route>

        {/* Standalone Authenticated Routes (No Bottom Nav) */}
        <Route path="/daily-report" element={<DailyReportScreen />} />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;