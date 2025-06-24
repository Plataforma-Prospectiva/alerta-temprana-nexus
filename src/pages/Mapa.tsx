
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertMap } from '@/components/AlertMap';

export const Mapa = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mapa de Alertas</h2>
          <p className="text-gray-600 mt-1">
            Visualización geográfica de alertas y conflictos sociales en tiempo real
          </p>
        </div>
      </div>

      {/* Mapa */}
      <Card>
        <CardHeader>
          <CardTitle>Alertas por Territorio</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertMap />
        </CardContent>
      </Card>
    </div>
  );
};
