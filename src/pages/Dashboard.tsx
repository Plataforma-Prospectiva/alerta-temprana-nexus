
import React from 'react';
import { AlertCard } from '@/components/AlertCard';
import { MetricCard } from '@/components/MetricCard';
import { AlertMap } from '@/components/AlertMap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Users, TrendingUp, Database, Clock } from 'lucide-react';

// Datos simulados
const alertasRecientes = [
  {
    nivel: 'critico' as const,
    territorio: 'Región de La Araucanía',
    tema: 'Conflicto Social',
    descripcion: 'Incremento significativo en manifestaciones y tensiones interétnicas. Múltiples indicadores de escalamiento.',
    fecha: 'hace 15 minutos',
    indicadores: ['Redes Sociales', 'Medios Locales', 'Actividad Policial']
  },
  {
    nivel: 'alto' as const,
    territorio: 'Región Metropolitana',
    tema: 'Protesta Estudiantil',
    descripcion: 'Convocatorias masivas detectadas para manifestaciones estudiantiles. Riesgo de confrontación.',
    fecha: 'hace 2 horas',
    indicadores: ['Redes Sociales', 'Organizaciones Estudiantiles']
  },
  {
    nivel: 'medio' as const,
    territorio: 'Región de Valparaíso',
    tema: 'Conflicto Laboral',
    descripcion: 'Huelga portuaria programada puede generar tensiones secundarias en la región.',
    fecha: 'hace 4 horas',
    indicadores: ['Sindicatos', 'Medios Locales']
  }
];

const metricas = [
  {
    titulo: 'Alertas Activas',
    valor: 47,
    tendencia: 'up' as const,
    cambio: 12,
    icono: <AlertTriangle className="h-4 w-4 text-white" />,
    color: 'bg-red-100'
  },
  {
    titulo: 'Territorios Monitoreados',
    valor: 15,
    tendencia: 'stable' as const,
    cambio: 0,
    icono: <Users className="h-4 w-4 text-white" />,
    color: 'bg-blue-100'
  },
  {
    titulo: 'Indicadores Procesados',
    valor: 1247,
    tendencia: 'up' as const,
    cambio: 8,
    icono: <TrendingUp className="h-4 w-4 text-white" />,
    color: 'bg-green-100'
  },
  {
    titulo: 'Fuentes de Datos',
    valor: 23,
    tendencia: 'up' as const,
    cambio: 2,
    icono: <Database className="h-4 w-4 text-white" />,
    color: 'bg-purple-100'
  }
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Panel de Control</h2>
            <p className="text-gray-600 mt-1">
              Monitoreo en tiempo real de indicadores de conflicto social
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Última actualización: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <MetricCard key={index} {...metrica} />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa de alertas */}
        <div className="lg:col-span-2">
          <AlertMap />
        </div>

        {/* Alertas recientes */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Alertas Recientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alertasRecientes.map((alerta, index) => (
                <AlertCard key={index} {...alerta} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resumen de actividad */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen de Actividad del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">96%</div>
              <div className="text-sm text-gray-600">Cobertura Territorial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.2%</div>
              <div className="text-sm text-gray-600">Disponibilidad del Sistema</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.3s</div>
              <div className="text-sm text-gray-600">Tiempo de Respuesta Promedio</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
