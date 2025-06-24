
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Map, 
  TrendingUp, 
  Database, 
  Settings, 
  FileText,
  Users,
  AlertCircle
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/mapa', icon: Map, label: 'Mapa de Alertas' },
  { to: '/indicadores', icon: TrendingUp, label: 'Indicadores' },
  { to: '/fuentes', icon: Database, label: 'Fuentes de Datos' },
  { to: '/territorios', icon: Users, label: 'Territorios' },
  { to: '/alertas', icon: AlertCircle, label: 'Gestión de Alertas' },
  { to: '/reportes', icon: FileText, label: 'Reportes' },
  { to: '/configuracion', icon: Settings, label: 'Configuración' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
