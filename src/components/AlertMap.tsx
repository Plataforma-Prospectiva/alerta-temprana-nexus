
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, Download, RefreshCw, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Simulación de datos de alertas por territorio con más información
const alertasTerritorios = [
  { 
    id: 1, 
    nombre: 'Región Metropolitana', 
    lat: -33.4489, 
    lng: -70.6693, 
    nivel: 'alto', 
    alertas: 12,
    poblacion: '7.112.808',
    tipoAlerta: 'Protesta Social',
    ultimaActualizacion: 'hace 5 min'
  },
  { 
    id: 2, 
    nombre: 'Valparaíso', 
    lat: -33.0472, 
    lng: -71.6127, 
    nivel: 'medio', 
    alertas: 8,
    poblacion: '1.815.902',
    tipoAlerta: 'Conflicto Laboral',
    ultimaActualizacion: 'hace 12 min'
  },
  { 
    id: 3, 
    nombre: 'Biobío', 
    lat: -36.8201, 
    lng: -73.0444, 
    nivel: 'bajo', 
    alertas: 3,
    poblacion: '1.556.805',
    tipoAlerta: 'Tensión Menor',
    ultimaActualizacion: 'hace 1 hora'
  },
  { 
    id: 4, 
    nombre: 'Araucanía', 
    lat: -38.9489, 
    lng: -72.3311, 
    nivel: 'critico', 
    alertas: 18,
    poblacion: '957.224',
    tipoAlerta: 'Conflicto Interétnico',
    ultimaActualizacion: 'hace 2 min'
  },
  { 
    id: 5, 
    nombre: 'Antofagasta', 
    lat: -23.6509, 
    lng: -70.3975, 
    nivel: 'medio', 
    alertas: 6,
    poblacion: '607.534',
    tipoAlerta: 'Conflicto Minero',
    ultimaActualizacion: 'hace 30 min'
  },
];

export const AlertMap = () => {
  const [selectedTerritorio, setSelectedTerritorio] = useState<number | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'bg-green-500 border-green-600';
      case 'medio': return 'bg-yellow-500 border-yellow-600';
      case 'alto': return 'bg-orange-500 border-orange-600';
      case 'critico': return 'bg-red-500 border-red-600';
      default: return 'bg-gray-500 border-gray-600';
    }
  };

  const getNivelTextColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'text-green-700 bg-green-100';
      case 'medio': return 'text-yellow-700 bg-yellow-100';
      case 'alto': return 'text-orange-700 bg-orange-100';
      case 'critico': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const territoriosFiltrados = filtroNivel === 'todos' 
    ? alertasTerritorios 
    : alertasTerritorios.filter(t => t.nivel === filtroNivel);

  const handleRefresh = () => {
    console.log('Actualizando datos...');
    // Aquí iría la lógica de actualización
  };

  const handleExport = () => {
    console.log('Exportando datos...');
    // Aquí iría la lógica de exportación
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Mapa de Alertas por Territorio</CardTitle>
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Configurar Filtros</DialogTitle>
                  <DialogDescription>
                    Selecciona los niveles de alerta que deseas visualizar
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nivel de Riesgo:</label>
                    <select 
                      value={filtroNivel} 
                      onChange={(e) => setFiltroNivel(e.target.value)}
                      className="w-full mt-1 p-2 border rounded-md"
                    >
                      <option value="todos">Todos los niveles</option>
                      <option value="critico">Solo Crítico</option>
                      <option value="alto">Solo Alto</option>
                      <option value="medio">Solo Medio</option>
                      <option value="bajo">Solo Bajo</option>
                    </select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="sm" onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Leyenda mejorada */}
          <div className="flex flex-wrap items-center gap-4 text-sm p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Nivel de Riesgo:</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-green-500 rounded-full border border-green-600"></div>
              <span>Bajo (1-5)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-yellow-500 rounded-full border border-yellow-600"></div>
              <span>Medio (6-10)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-orange-500 rounded-full border border-orange-600"></div>
              <span>Alto (11-15)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-red-500 rounded-full border border-red-600"></div>
              <span>Crítico (16+)</span>
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div className="p-2 bg-red-50 rounded">
              <div className="font-bold text-red-600">
                {territoriosFiltrados.filter(t => t.nivel === 'critico').length}
              </div>
              <div className="text-red-700">Crítico</div>
            </div>
            <div className="p-2 bg-orange-50 rounded">
              <div className="font-bold text-orange-600">
                {territoriosFiltrados.filter(t => t.nivel === 'alto').length}
              </div>
              <div className="text-orange-700">Alto</div>
            </div>
            <div className="p-2 bg-yellow-50 rounded">
              <div className="font-bold text-yellow-600">
                {territoriosFiltrados.filter(t => t.nivel === 'medio').length}
              </div>
              <div className="text-yellow-700">Medio</div>
            </div>
            <div className="p-2 bg-green-50 rounded">
              <div className="font-bold text-green-600">
                {territoriosFiltrados.filter(t => t.nivel === 'bajo').length}
              </div>
              <div className="text-green-700">Bajo</div>
            </div>
          </div>

          {/* Simulación visual del mapa mejorada */}
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 h-96 overflow-hidden border">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30"></div>
            
            {/* Grid de referencia */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Territorios con mejor visualización */}
            {territoriosFiltrados.map((territorio) => (
              <div
                key={territorio.id}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                  selectedTerritorio === territorio.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                }`}
                style={{
                  left: `${((territorio.lng + 80) / 60) * 100}%`,
                  top: `${((territorio.lat + 60) / 80) * 100}%`,
                }}
                onClick={() => setSelectedTerritorio(territorio.id)}
              >
                {/* Círculo principal con borde */}
                <div className={`w-10 h-10 rounded-full ${getNivelColor(territorio.nivel)} border-2 flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                  {territorio.alertas}
                </div>
                
                {/* Tooltip mejorado */}
                <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-2 shadow-xl border whitespace-nowrap z-30 transition-opacity ${
                  selectedTerritorio === territorio.id ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                }`}>
                  <div className="text-sm font-semibold">{territorio.nombre}</div>
                  <div className="text-xs text-gray-600">{territorio.tipoAlerta}</div>
                  <div className="text-xs text-gray-500">{territorio.ultimaActualizacion}</div>
                  {/* Flecha del tooltip */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t rotate-45"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel de detalles mejorado */}
          {selectedTerritorio && (
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-sm">
              {(() => {
                const territorio = alertasTerritorios.find(t => t.id === selectedTerritorio);
                return territorio ? (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg text-gray-900">{territorio.nombre}</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setSelectedTerritorio(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="space-y-1">
                        <span className="text-gray-600 font-medium">Nivel de Riesgo:</span>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold text-center ${getNivelTextColor(territorio.nivel)}`}>
                          {territorio.nivel.toUpperCase()}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-600 font-medium">Alertas Activas:</span>
                        <div className="text-xl font-bold text-gray-900">{territorio.alertas}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-600 font-medium">Población:</span>
                        <div className="font-semibold text-gray-900">{territorio.poblacion}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-600 font-medium">Tipo Principal:</span>
                        <div className="font-semibold text-gray-900">{territorio.tipoAlerta}</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t">
                      <span className="text-xs text-gray-500">
                        Última actualización: {territorio.ultimaActualizacion}
                      </span>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
