
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, Download, RefreshCw } from 'lucide-react';

// Simulación de datos de alertas por territorio
const alertasTerritorios = [
  { id: 1, nombre: 'Región Metropolitana', lat: -33.4489, lng: -70.6693, nivel: 'alto', alertas: 12 },
  { id: 2, nombre: 'Valparaíso', lat: -33.0472, lng: -71.6127, nivel: 'medio', alertas: 8 },
  { id: 3, nombre: 'Biobío', lat: -36.8201, lng: -73.0444, nivel: 'bajo', alertas: 3 },
  { id: 4, nombre: 'Araucanía', lat: -38.9489, lng: -72.3311, nivel: 'critico', alertas: 18 },
  { id: 5, nombre: 'Antofagasta', lat: -23.6509, lng: -70.3975, nivel: 'medio', alertas: 6 },
];

export const AlertMap = () => {
  const [selectedTerritorio, setSelectedTerritorio] = useState<number | null>(null);

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'bg-green-500';
      case 'medio': return 'bg-yellow-500';
      case 'alto': return 'bg-orange-500';
      case 'critico': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Mapa de Alertas por Territorio</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Leyenda */}
          <div className="flex items-center space-x-4 text-sm">
            <span className="font-medium">Nivel de Riesgo:</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Bajo</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Medio</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Alto</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Crítico</span>
            </div>
          </div>

          {/* Simulación visual del mapa */}
          <div className="relative bg-gray-100 rounded-lg p-4 h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-30"></div>
            
            {/* Territorios simulados con posiciones relativas */}
            {alertasTerritorios.map((territorio) => (
              <div
                key={territorio.id}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 ${
                  selectedTerritorio === territorio.id ? 'scale-125 z-10' : ''
                }`}
                style={{
                  left: `${((territorio.lng + 80) / 60) * 100}%`,
                  top: `${((territorio.lat + 60) / 80) * 100}%`,
                }}
                onClick={() => setSelectedTerritorio(territorio.id)}
              >
                <div className={`w-8 h-8 rounded-full ${getNivelColor(territorio.nivel)} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                  {territorio.alertas}
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded px-2 py-1 text-xs shadow-lg whitespace-nowrap">
                  {territorio.nombre}
                </div>
              </div>
            ))}
          </div>

          {/* Detalles del territorio seleccionado */}
          {selectedTerritorio && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              {(() => {
                const territorio = alertasTerritorios.find(t => t.id === selectedTerritorio);
                return territorio ? (
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">{territorio.nombre}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Nivel de Riesgo:</span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getNivelColor(territorio.nivel)} text-white`}>
                          {territorio.nivel.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Alertas Activas:</span>
                        <span className="ml-2 font-semibold">{territorio.alertas}</span>
                      </div>
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
