
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, Plus, Search, Settings, AlertTriangle } from 'lucide-react';

interface Indicador {
  id: number;
  nombre: string;
  categoria: 'social' | 'economico' | 'politico' | 'seguridad';
  valor: number;
  tendencia: 'subiendo' | 'bajando' | 'estable';
  cambio: number;
  estado: 'normal' | 'alerta' | 'critico';
  ultimaActualizacion: string;
  descripcion: string;
}

const indicadores: Indicador[] = [
  {
    id: 1,
    nombre: 'Actividad en Redes Sociales',
    categoria: 'social',
    valor: 75,
    tendencia: 'subiendo',
    cambio: 12,
    estado: 'alerta',
    ultimaActualizacion: '2024-01-15 14:30',
    descripcion: 'Nivel de menciones relacionadas con conflictos sociales'
  },
  {
    id: 2,
    nombre: 'Índice de Desempleo',
    categoria: 'economico',
    valor: 8.5,
    tendencia: 'bajando',
    cambio: -2.1,
    estado: 'normal',
    ultimaActualizacion: '2024-01-15 14:25',
    descripcion: 'Porcentaje de desempleo en la región'
  },
  {
    id: 3,
    nombre: 'Conflictos Laborales',
    categoria: 'social',
    valor: 23,
    tendencia: 'subiendo',
    cambio: 8,
    estado: 'critico',
    ultimaActualizacion: '2024-01-15 14:20',
    descripcion: 'Número de conflictos laborales activos'
  },
  {
    id: 4,
    nombre: 'Aprobación Gubernamental',
    categoria: 'politico',
    valor: 42,
    tendencia: 'estable',
    cambio: 0.5,
    estado: 'normal',
    ultimaActualizacion: '2024-01-15 14:15',
    descripcion: 'Porcentaje de aprobación del gobierno local'
  },
  {
    id: 5,
    nombre: 'Incidentes de Seguridad',
    categoria: 'seguridad',
    valor: 15,
    tendencia: 'subiendo',
    cambio: 5,
    estado: 'alerta',
    ultimaActualizacion: '2024-01-15 14:10',
    descripcion: 'Número de incidentes de seguridad reportados'
  }
];

export const Indicadores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState<string>('all');

  const filteredIndicadores = indicadores.filter(indicador => {
    const matchesSearch = indicador.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = selectedCategoria === 'all' || indicador.categoria === selectedCategoria;
    return matchesSearch && matchesCategoria;
  });

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'social': return 'bg-blue-100 text-blue-800';
      case 'economico': return 'bg-green-100 text-green-800';
      case 'politico': return 'bg-purple-100 text-purple-800';
      case 'seguridad': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'alerta': return 'bg-yellow-100 text-yellow-800';
      case 'critico': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case 'subiendo': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'bajando': return <TrendingDown className="h-4 w-4 text-green-500" />;
      case 'estable': return <Activity className="h-4 w-4 text-gray-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Indicadores de Alerta Temprana</h2>
            <p className="text-gray-600 mt-1">
              Monitoree los indicadores clave para la detección temprana de conflictos sociales
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Indicador
          </Button>
        </div>
      </div>

      {/* Filtros */}
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
                  placeholder="Buscar indicador..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedCategoria === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategoria('all')}
                size="sm"
              >
                Todos
              </Button>
              <Button
                variant={selectedCategoria === 'social' ? 'default' : 'outline'}
                onClick={() => setSelectedCategoria('social')}
                size="sm"
              >
                Social
              </Button>
              <Button
                variant={selectedCategoria === 'economico' ? 'default' : 'outline'}
                onClick={() => setSelectedCategoria('economico')}
                size="sm"
              >
                Económico
              </Button>
              <Button
                variant={selectedCategoria === 'politico' ? 'default' : 'outline'}
                onClick={() => setSelectedCategoria('politico')}
                size="sm"
              >
                Político
              </Button>
              <Button
                variant={selectedCategoria === 'seguridad' ? 'default' : 'outline'}
                onClick={() => setSelectedCategoria('seguridad')}
                size="sm"
              >
                Seguridad
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de indicadores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredIndicadores.map((indicador) => (
          <Card key={indicador.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{indicador.nombre}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoriaColor(indicador.categoria)} variant="secondary">
                      {indicador.categoria.charAt(0).toUpperCase() + indicador.categoria.slice(1)}
                    </Badge>
                    <Badge className={getEstadoColor(indicador.estado)}>
                      {indicador.estado.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Valor principal */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{indicador.valor}</div>
                <div className="text-sm text-gray-600">{indicador.descripcion}</div>
              </div>

              {/* Tendencia */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getTendenciaIcon(indicador.tendencia)}
                  <span className="text-sm font-medium">
                    {indicador.tendencia.charAt(0).toUpperCase() + indicador.tendencia.slice(1)}
                  </span>
                </div>
                <div className={`text-sm font-semibold ${
                  indicador.cambio > 0 ? 'text-red-600' : 
                  indicador.cambio < 0 ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {indicador.cambio > 0 ? '+' : ''}{indicador.cambio}%
                </div>
              </div>

              {/* Progreso visual */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    indicador.estado === 'critico' ? 'bg-red-500' :
                    indicador.estado === 'alerta' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(indicador.valor, 100)}%` }}
                ></div>
              </div>

              {/* Última actualización */}
              <div className="text-xs text-gray-500 pt-2 border-t">
                Última actualización: {indicador.ultimaActualizacion}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resumen */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen de Indicadores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{indicadores.length}</div>
              <div className="text-sm text-gray-600">Total Indicadores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {indicadores.filter(i => i.estado === 'critico').length}
              </div>
              <div className="text-sm text-gray-600">Estado Crítico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {indicadores.filter(i => i.estado === 'alerta').length}
              </div>
              <div className="text-sm text-gray-600">En Alerta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {indicadores.filter(i => i.estado === 'normal').length}
              </div>
              <div className="text-sm text-gray-600">Normal</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
