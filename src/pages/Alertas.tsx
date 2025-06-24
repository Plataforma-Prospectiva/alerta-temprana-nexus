
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Bell, Search, Plus, Eye, Edit } from 'lucide-react';

interface Alerta {
  id: number;
  titulo: string;
  descripcion: string;
  territorio: string;
  nivel: 'bajo' | 'medio' | 'alto' | 'critico';
  estado: 'activa' | 'resuelta' | 'en_seguimiento';
  fecha: string;
  fuente: string;
}

const alertas: Alerta[] = [
  {
    id: 1,
    titulo: 'Tensión laboral en sector minero',
    descripcion: 'Incremento significativo en las protestas laborales',
    territorio: 'Región Norte',
    nivel: 'alto',
    estado: 'activa',
    fecha: '2024-01-15',
    fuente: 'Monitoreo de medios'
  },
  {
    id: 2,
    titulo: 'Conflicto por recursos hídricos',
    descripcion: 'Disputa entre comunidades rurales por acceso al agua',
    territorio: 'Región Centro',
    nivel: 'medio',
    estado: 'en_seguimiento',
    fecha: '2024-01-14',
    fuente: 'Reportes comunitarios'
  },
  {
    id: 3,
    titulo: 'Manifestaciones estudiantiles',
    descripcion: 'Protestas universitarias por reformas educativas',
    territorio: 'Región Sur',
    nivel: 'bajo',
    estado: 'resuelta',
    fecha: '2024-01-13',
    fuente: 'Redes sociales'
  }
];

export const Alertas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNivel, setSelectedNivel] = useState<string>('all');

  const filteredAlertas = alertas.filter(alerta => {
    const matchesSearch = alerta.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNivel = selectedNivel === 'all' || alerta.nivel === selectedNivel;
    return matchesSearch && matchesNivel;
  });

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'bg-green-100 text-green-800';
      case 'medio': return 'bg-yellow-100 text-yellow-800';
      case 'alto': return 'bg-orange-100 text-orange-800';
      case 'critico': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activa': return 'bg-red-100 text-red-800';
      case 'en_seguimiento': return 'bg-yellow-100 text-yellow-800';
      case 'resuelta': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Alertas</h2>
            <p className="text-gray-600 mt-1">
              Administre y monitoree las alertas de conflictos sociales
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Alerta
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
                  placeholder="Buscar alerta..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedNivel === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedNivel('all')}
                size="sm"
              >
                Todas
              </Button>
              <Button
                variant={selectedNivel === 'bajo' ? 'default' : 'outline'}
                onClick={() => setSelectedNivel('bajo')}
                size="sm"
              >
                Bajo
              </Button>
              <Button
                variant={selectedNivel === 'medio' ? 'default' : 'outline'}
                onClick={() => setSelectedNivel('medio')}
                size="sm"
              >
                Medio
              </Button>
              <Button
                variant={selectedNivel === 'alto' ? 'default' : 'outline'}
                onClick={() => setSelectedNivel('alto')}
                size="sm"
              >
                Alto
              </Button>
              <Button
                variant={selectedNivel === 'critico' ? 'default' : 'outline'}
                onClick={() => setSelectedNivel('critico')}
                size="sm"
              >
                Crítico
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de alertas */}
      <div className="space-y-4">
        {filteredAlertas.map((alerta) => (
          <Card key={alerta.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <h3 className="text-lg font-semibold">{alerta.titulo}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{alerta.descripcion}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Territorio: {alerta.territorio}</span>
                    <span>Fecha: {alerta.fecha}</span>
                    <span>Fuente: {alerta.fuente}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex space-x-2">
                    <Badge className={getNivelColor(alerta.nivel)}>
                      {alerta.nivel.toUpperCase()}
                    </Badge>
                    <Badge className={getEstadoColor(alerta.estado)}>
                      {alerta.estado.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
