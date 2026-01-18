import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const getLinkClass = (isActive: boolean) => 
    `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`;

  const getIconClass = (isActive: boolean) => 
    `material-symbols-outlined text-2xl ${isActive ? 'fill-1' : ''}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#1c2127]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-safe z-50 h-[80px]">
      <div className="flex justify-around items-center h-full pb-2">
        <NavLink to="/dashboard" className={({ isActive }) => getLinkClass(isActive)}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>dashboard</span>
              <span className="text-[10px] font-bold">Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => getLinkClass(isActive)}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>apartment</span>
              <span className="text-[10px] font-bold">Obras</span>
            </>
          )}
        </NavLink>

        <NavLink to="/supplies" className={({ isActive }) => getLinkClass(isActive)}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>inventory_2</span>
              <span className="text-[10px] font-bold">Suprimentos</span>
            </>
          )}
        </NavLink>

        <NavLink to="/menu" className={({ isActive }) => getLinkClass(isActive)}>
          {({ isActive }) => (
            <>
              <span className={getIconClass(isActive)}>menu</span>
              <span className="text-[10px] font-bold">Mais</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;