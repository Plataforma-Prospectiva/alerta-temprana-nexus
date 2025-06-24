
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Settings, Bell, Database, Users, Shield, Mail } from 'lucide-react';

export const Configuracion = () => {
  const [notificaciones, setNotificaciones] = useState(true);
  const [alertasEmail, setAlertasEmail] = useState(false);
  const [actualizacionAutomatica, setActualizacionAutomatica] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Configuración</h2>
          <p className="text-gray-600 mt-1">
            Configure los parámetros del sistema de alerta temprana
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notificaciones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notificaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Notificaciones push</label>
                <p className="text-sm text-gray-600">Recibir notificaciones en tiempo real</p>
              </div>
              <Switch
                checked={notificaciones}
                onCheckedChange={setNotificaciones}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Alertas por email</label>
                <p className="text-sm text-gray-600">Enviar alertas críticas por correo</p>
              </div>
              <Switch
                checked={alertasEmail}
                onCheckedChange={setAlertasEmail}
              />
            </div>
          </CardContent>
        </Card>

        {/* Sistema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Sistema</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Actualización automática</label>
                <p className="text-sm text-gray-600">Actualizar datos automáticamente</p>
              </div>
              <Switch
                checked={actualizacionAutomatica}
                onCheckedChange={setActualizacionAutomatica}
              />
            </div>
            <div>
              <label className="font-medium block mb-2">Intervalo de actualización (minutos)</label>
              <Input type="number" defaultValue="15" className="w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Fuentes de datos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Fuentes de Datos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="font-medium block mb-2">API de redes sociales</label>
              <Input type="password" placeholder="Token de API" />
            </div>
            <div>
              <label className="font-medium block mb-2">Base de datos externa</label>
              <Input placeholder="URL de conexión" />
            </div>
            <Button variant="outline" className="w-full">
              <Database className="h-4 w-4 mr-2" />
              Probar Conexión
            </Button>
          </CardContent>
        </Card>

        {/* Usuarios y permisos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Usuarios y Permisos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="font-medium block mb-2">Administrador principal</label>
              <Input defaultValue="admin@sistema.com" />
            </div>
            <div>
              <label className="font-medium block mb-2">Nivel de acceso por defecto</label>
              <select className="w-full p-2 border rounded-md">
                <option>Lectura</option>
                <option>Lectura y escritura</option>
                <option>Administrador</option>
              </select>
            </div>
            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Gestionar Usuarios
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Acciones */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Respaldo de Datos
            </Button>
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Configurar SMTP
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Exportar Configuración
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Guardar Cambios
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
