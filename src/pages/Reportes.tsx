
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react';

export const Reportes = () => {
  const reportes = [
    {
      id: 1,
      titulo: 'Reporte Mensual de Conflictos',
      descripcion: 'Análisis completo de conflictos sociales del último mes',
      fecha: '2024-01-15',
      tipo: 'mensual',
      icon: BarChart3
    },
    {
      id: 2,
      titulo: 'Análisis de Tendencias',
      descripcion: 'Tendencias y patrones en indicadores de alerta temprana',
      fecha: '2024-01-10',
      tipo: 'análisis',
      icon: TrendingUp
    },
    {
      id: 3,
      titulo: 'Reporte por Territorios',
      descripcion: 'Situación de conflictos agrupada por territorios',
      fecha: '2024-01-08',
      tipo: 'territorial',
      icon: PieChart
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Reportes</h2>
            <p className="text-gray-600 mt-1">
              Genere y descargue reportes detallados del sistema de alerta temprana
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Generar Reporte
          </Button>
        </div>
      </div>

      {/* Tipos de reportes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>Reporte Ejecutivo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Resumen ejecutivo con métricas clave y alertas principales
            </p>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Generar
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Análisis de Tendencias</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Análisis detallado de tendencias y patrones históricos
            </p>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Generar
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              <span>Reporte por Territorios</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Desglose detallado por territorios y regiones
            </p>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Generar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Reportes recientes */}
      <Card>
        <CardHeader>
          <CardTitle>Reportes Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportes.map((reporte) => (
              <div key={reporte.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <reporte.icon className="h-6 w-6 text-gray-500" />
                  <div>
                    <h4 className="font-medium">{reporte.titulo}</h4>
                    <p className="text-sm text-gray-600">{reporte.descripcion}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {reporte.fecha}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
