
import React from 'react';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AlertCardProps {
  nivel: 'bajo' | 'medio' | 'alto' | 'critico';
  territorio: string;
  tema: string;
  descripcion: string;
  fecha: string;
  indicadores: string[];
}

export const AlertCard: React.FC<AlertCardProps> = ({
  nivel,
  territorio,
  tema,
  descripcion,
  fecha,
  indicadores
}) => {
  const getAlertColor = (nivel: string) => {
    switch (nivel) {
      case 'bajo': return 'border-green-500 bg-green-50';
      case 'medio': return 'border-yellow-500 bg-yellow-50';
      case 'alto': return 'border-orange-500 bg-orange-50';
      case 'critico': return 'border-red-500 bg-red-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getAlertIcon = (nivel: string) => {
    const colors = {
      bajo: 'text-green-600',
      medio: 'text-yellow-600',
      alto: 'text-orange-600',
      critico: 'text-red-600'
    };
    return colors[nivel as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <Card className={`border-l-4 ${getAlertColor(nivel)} transition-all hover:shadow-md`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center space-x-2">
            <AlertTriangle className={`h-5 w-5 ${getAlertIcon(nivel)}`} />
            <span className="capitalize">Alerta {nivel}</span>
          </CardTitle>
          <span className={`px-2 py-1 rounded text-xs font-medium ${getAlertColor(nivel)}`}>
            {tema}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{territorio}</span>
          </div>
          
          <p className="text-sm text-gray-700">{descripcion}</p>
          
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{fecha}</span>
          </div>
          
          {indicadores.length > 0 && (
            <div className="mt-3">
              <p className="text-xs font-medium text-gray-700 mb-1">Indicadores activados:</p>
              <div className="flex flex-wrap gap-1">
                {indicadores.map((indicador, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                  >
                    {indicador}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
