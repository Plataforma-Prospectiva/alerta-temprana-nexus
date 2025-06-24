
import React from 'react';
import { Bell, Settings, User, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            Sistema de Alerta Temprana
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Sistema Activo</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Última actualización: hace 2 min</span>
          </div>
          
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Alertas (3)
          </Button>
          
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configuración
          </Button>
          
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Usuario
          </Button>
        </div>
      </div>
    </header>
  );
};
