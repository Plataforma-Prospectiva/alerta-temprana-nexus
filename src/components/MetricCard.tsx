
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  titulo: string;
  valor: number;
  unidad?: string;
  tendencia: 'up' | 'down' | 'stable';
  cambio: number;
  icono: React.ReactNode;
  color: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  titulo,
  valor,
  unidad = '',
  tendencia,
  cambio,
  icono,
  color
}) => {
  const getTrendIcon = () => {
    switch (tendencia) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-green-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = () => {
    switch (tendencia) {
      case 'up': return 'text-red-600';
      case 'down': return 'text-green-600';
      case 'stable': return 'text-gray-600';
    }
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {titulo}
        </CardTitle>
        <div className={`p-2 rounded-full ${color}`}>
          {icono}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {valor.toLocaleString()}{unidad}
            </div>
            <div className={`flex items-center space-x-1 text-sm ${getTrendColor()}`}>
              {getTrendIcon()}
              <span>
                {cambio > 0 ? '+' : ''}{cambio}% vs mes anterior
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
