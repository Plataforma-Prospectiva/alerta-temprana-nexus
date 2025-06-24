
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Database, 
  Globe, 
  MessageCircle, 
  Newspaper, 
  Shield, 
  Users, 
  Activity,
  Settings,
  Plus,
  AlertCircle
} from 'lucide-react';

interface FuenteDatos {
  id: number;
  nombre: string;
  tipo: 'api' | 'rss' | 'social' | 'gobierno' | 'ong';
  icono: React.ReactNode;
  descripcion: string;
  estado: 'activa' | 'inactiva' | 'error';
  ultimaActualizacion: string;
  frecuencia: string;
  registrosProcesados: number;
  confiabilidad: number;
  territorios: string[];
  temas: string[];
}

const fuentesDatos: FuenteDatos[] = [
  {
    id: 1,
    nombre: 'Twitter/X API',
    tipo: 'social',
    icono: <MessageCircle className="h-5 w-5" />,
    descripcion: 'Monitoreo de menciones y hashtags relevantes en tiempo real',
    estado: 'activa',
    ultimaActualizacion: '2024-01-15 14:45',
    frecuencia: '1 minuto',
    registrosProcesados: 15420,
    confiabilidad: 75,
    territorios: ['RM', 'Araucanía', 'Valparaíso'],
    temas: ['Protesta', 'Conflicto Social', 'Manifestaciones']
  },
  {
    id: 2,
    nombre: 'Noticias RSS',
    tipo: 'rss',
    icono: <Newspaper className="h-5 w-5" />,
    descripcion: 'Agregación de noticias de medios locales y nacionales',
    estado: 'activa',
    ultimaActualizacion: '2024-01-15 14:30',
    frecuencia: '15 minutos',
    registrosProcesados: 3240,
    confiabilidad: 85,
    territorios: ['Nacional'],
    temas: ['Todos']
  },
  {
    id: 3,
    nombre: 'API Carabineros',
    tipo: 'gobierno',
    icono: <Shield className="h-5 w-5" />,
    descripcion: 'Datos oficiales de incidentes y operativos policiales',
    estado: 'activa',
    ultimaActualizacion: '2024-01-15 14:20',
    frecuencia: '30 minutos',
    registrosProcesados: 890,
    confiabilidad: 95,
    territorios: ['RM', 'Araucanía', 'Biobío'],
    temas: ['Seguridad', 'Orden Público']
  },
  {
    id: 4,
    nombre: 'Observatorio CIPER',
    tipo: 'ong',
    icono: <Users className="h-5 w-5" />,
    descripcion: 'Análisis de conflictos sociales y territoriales',
    estado: 'activa',
    ultimaActualizacion: '2024-01-15 13:45',
    frecuencia: '1 hora',
    registrosProcesados: 156,
    confiabilidad: 90,
    territorios: ['Araucanía', 'Antofagasta'],
    temas: ['Conflicto Étnico', 'Minería']
  },
  {
    id: 5,
    nombre: 'Sistema de Emergencias',
    tipo: 'gobierno',
    icono: <AlertCircle className="h-5 w-5" />,
    descripcion: 'Alertas oficiales de emergencias y desastres',
    estado: 'error',
    ultimaActualizacion: '2024-01-15 12:30',
    frecuencia: 'Tiempo real',
    registrosProcesados: 45,
    confiabilidad: 98,
    territorios: ['Nacional'],
    temas: ['Emergencias', 'Desastres']
  }
];

export const FuentesDatos = () => {
  const [selectedFuente, setSelectedFuente] = useState<number | null>(null);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activa': return 'bg-green-100 text-green-800';
      case 'inactiva': return 'bg-gray-100 text-gray-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'api': return 'bg-blue-100 text-blue-800';
      case 'rss': return 'bg-orange-100 text-orange-800';
      case 'social': return 'bg-purple-100 text-purple-800';
      case 'gobierno': return 'bg-green-100 text-green-800';
      case 'ong': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConfiabilidadColor = (confiabilidad: number) => {
    if (confiabilidad >= 90) return 'text-green-600';
    if (confiabilidad >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Fuentes de Datos</h2>
            <p className="text-gray-600 mt-1">
              Configure y monitoree las fuentes de información del sistema
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Fuente
          </Button>
        </div>
      </div>

      {/* Resumen de estado */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {fuentesDatos.filter(f => f.estado === 'activa').length}
                </div>
                <div className="text-sm text-gray-600">Fuentes Activas</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {fuentesDatos.reduce((sum, f) => sum + f.registrosProcesados, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Registros Procesados</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(fuentesDatos.reduce((sum, f) => sum + f.confiabilidad, 0) / fuentesDatos.length)}%
                </div>
                <div className="text-sm text-gray-600">Confiabilidad Promedio</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {fuentesDatos.filter(f => f.estado === 'error').length}
                </div>
                <div className="text-sm text-gray-600">Con Errores</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de fuentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {fuentesDatos.map((fuente) => (
          <Card key={fuente.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {fuente.icono}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{fuente.nombre}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getTipoColor(fuente.tipo)} variant="secondary">
                        {fuente.tipo.toUpperCase()}
                      </Badge>
                      <Badge className={getEstadoColor(fuente.estado)}>
                        {fuente.estado.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={fuente.estado === 'activa'} 
                    disabled={fuente.estado === 'error'}
                  />
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{fuente.descripcion}</p>
              
              {/* Métricas */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Registros Procesados</div>
                  <div className="font-semibold">{fuente.registrosProcesados.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Confiabilidad</div>
                  <div className={`font-semibold ${getConfiabilidadColor(fuente.confiabilidad)}`}>
                    {fuente.confiabilidad}%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Frecuencia</div>
                  <div className="font-semibold">{fuente.frecuencia}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Última Actualización</div>
                  <div className="font-semibold text-xs">{fuente.ultimaActualizacion}</div>
                </div>
              </div>

              {/* Territorios */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Territorios</div>
                <div className="flex flex-wrap gap-1">
                  {fuente.territorios.map((territorio, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {territorio}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Temas */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Temas Monitoreados</div>
                <div className="flex flex-wrap gap-1">
                  {fuente.temas.map((tema, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-blue-50">
                      {tema}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
