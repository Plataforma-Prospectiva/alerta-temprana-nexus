import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Plus, Search, Settings, Users, AlertTriangle, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Territorio {
  id: number;
  nombre: string;
  tipo: 'region' | 'provincia' | 'comuna';
  poblacion: number;
  alertasActivas: number;
  nivelRiesgo: 'bajo' | 'medio' | 'alto' | 'critico';
  indicadoresActivos: string[];
  ultimaActualizacion: string;
}

const territorios: Territorio[] = [
  {
    id: 1,
    nombre: 'Región Metropolitana',
    tipo: 'region',
    poblacion: 7112808,
    alertasActivas: 12,
    nivelRiesgo: 'alto',
    indicadoresActivos: ['Redes Sociales', 'Medios', 'Actividad Policial'],
    ultimaActualizacion: '2024-01-15 14:30'
  },
  {
    id: 2,
    nombre: 'Región de La Araucanía',
    tipo: 'region',
    poblacion: 957224,
    alertasActivas: 18,
    nivelRiesgo: 'critico',
    indicadoresActivos: ['Conflicto Étnico', 'Actividad Policial', 'Medios', 'Organizaciones'],
    ultimaActualizacion: '2024-01-15 14:45'
  },
  {
    id: 3,
    nombre: 'Región de Valparaíso',
    tipo: 'region',
    poblacion: 1815902,
    alertasActivas: 6,
    nivelRiesgo: 'medio',
    indicadoresActivos: ['Conflicto Laboral', 'Redes Sociales'],
    ultimaActualizacion: '2024-01-15 14:20'
  },
  {
    id: 4,
    nombre: 'Región del Biobío',
    tipo: 'region',
    poblacion: 1556805,
    alertasActivas: 3,
    nivelRiesgo: 'bajo',
    indicadoresActivos: ['Medios'],
    ultimaActualizacion: '2024-01-15 14:15'
  }
];

export const Territorios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTipo, setSelectedTipo] = useState<string>('all');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newTerritorio, setNewTerritorio] = useState({
    nombre: '',
    tipo: 'region' as 'region' | 'provincia' | 'comuna',
    poblacion: 0
  });

  const filteredTerritorios = territorios.filter(territorio => {
    const matchesSearch = territorio.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = selectedTipo === 'all' || territorio.tipo === selectedTipo;
    return matchesSearch && matchesTipo;
  });

  const handleAddTerritorio = () => {
    console.log('Agregando territorio:', newTerritorio);
    // Aquí iría la lógica para agregar el territorio
    setShowAddDialog(false);
    setNewTerritorio({ nombre: '', tipo: 'region', poblacion: 0 });
  };

  const getRiskColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'bg-green-100 text-green-800';
      case 'medio': return 'bg-yellow-100 text-yellow-800';
      case 'alto': return 'bg-orange-100 text-orange-800';
      case 'critico': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'region': return 'bg-blue-100 text-blue-800';
      case 'provincia': return 'bg-purple-100 text-purple-800';
      case 'comuna': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Territorios</h2>
            <p className="text-gray-600 mt-1">
              Configure y monitoree territorios para el sistema de alerta temprana
            </p>
          </div>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Territorio
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar Nuevo Territorio</DialogTitle>
                <DialogDescription>
                  Complete la información del nuevo territorio a agregar al sistema.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nombre del Territorio</label>
                  <Input
                    value={newTerritorio.nombre}
                    onChange={(e) => setNewTerritorio({...newTerritorio, nombre: e.target.value})}
                    placeholder="Ej: Región de Tarapacá"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Tipo</label>
                  <select 
                    value={newTerritorio.tipo}
                    onChange={(e) => setNewTerritorio({...newTerritorio, tipo: e.target.value as 'region' | 'provincia' | 'comuna'})}
                    className="w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="region">Región</option>
                    <option value="provincia">Provincia</option>
                    <option value="comuna">Comuna</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Población</label>
                  <Input
                    type="number"
                    value={newTerritorio.poblacion}
                    onChange={(e) => setNewTerritorio({...newTerritorio, poblacion: parseInt(e.target.value) || 0})}
                    placeholder="0"
                    className="mt-1"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleAddTerritorio} className="bg-blue-600 hover:bg-blue-700">
                    Agregar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar territorio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedTipo === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedTipo('all')}
                size="sm"
              >
                Todos
              </Button>
              <Button
                variant={selectedTipo === 'region' ? 'default' : 'outline'}
                onClick={() => setSelectedTipo('region')}
                size="sm"
              >
                Regiones
              </Button>
              <Button
                variant={selectedTipo === 'provincia' ? 'default' : 'outline'}
                onClick={() => setSelectedTipo('provincia')}
                size="sm"
              >
                Provincias
              </Button>
              <Button
                variant={selectedTipo === 'comuna' ? 'default' : 'outline'}
                onClick={() => setSelectedTipo('comuna')}
                size="sm"
              >
                Comunas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de territorios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTerritorios.map((territorio) => (
          <Card key={territorio.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <CardTitle className="text-lg">{territorio.nombre}</CardTitle>
                    <Badge className={getTipoColor(territorio.tipo)} variant="secondary">
                      {territorio.tipo.charAt(0).toUpperCase() + territorio.tipo.slice(1)}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Métricas básicas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-600">Población</div>
                    <div className="font-semibold">{territorio.poblacion.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-600">Alertas Activas</div>
                    <div className="font-semibold">{territorio.alertasActivas}</div>
                  </div>
                </div>
              </div>

              {/* Nivel de riesgo */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Nivel de Riesgo</div>
                <Badge className={getRiskColor(territorio.nivelRiesgo)}>
                  {territorio.nivelRiesgo.toUpperCase()}
                </Badge>
              </div>

              {/* Indicadores activos */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Indicadores Activos</div>
                <div className="flex flex-wrap gap-1">
                  {territorio.indicadoresActivos.map((indicador, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {indicador}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Última actualización */}
              <div className="text-xs text-gray-500 pt-2 border-t">
                Última actualización: {territorio.ultimaActualizacion}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resumen */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen de Territorios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{territorios.length}</div>
              <div className="text-sm text-gray-600">Total Territorios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {territorios.reduce((sum, t) => sum + t.alertasActivas, 0)}
              </div>
              <div className="text-sm text-gray-600">Alertas Totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {territorios.reduce((sum, t) => sum + t.poblacion, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Población Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {territorios.filter(t => t.nivelRiesgo === 'critico' || t.nivelRiesgo === 'alto').length}
              </div>
              <div className="text-sm text-gray-600">Alto Riesgo</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
