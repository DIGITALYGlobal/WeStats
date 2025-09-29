'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const communityData = [
  { name: 'Jan', currentYear: 600, lastYear: 400 },
  { name: 'Fév', currentYear: 700, lastYear: 450 },
  { name: 'Mar', currentYear: 800, lastYear: 600 },
  { name: 'Avr', currentYear: 900, lastYear: 700 },
  { name: 'Mai', currentYear: 750, lastYear: 650 },
  { name: 'Jun', currentYear: 950, lastYear: 800 },
  { name: 'Jul', currentYear: 1100, lastYear: 900 },
  { name: 'Aoû', currentYear: 950, lastYear: 850 },
  { name: 'Sep', currentYear: 1050, lastYear: 950 },
  { name: 'Oct', currentYear: 1200, lastYear: 1000 },
  { name: 'Nov', currentYear: 1150, lastYear: 1100 },
  { name: 'Déc', currentYear: 1300, lastYear: 1200 }
];

const deviceData = [
  { name: '2024', Android: 300, iOS: 400, Mac: 200, Windows: 350, Linux: 100 },
  { name: '2025', Android: 350, iOS: 450, Mac: 250, Windows: 400, Linux: 150 }
];

export default function AnalyticsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Total Communauté</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={communityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="currentYear" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                  name="Cette Année"
                />
                <Line 
                  type="monotone" 
                  dataKey="lastYear" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Année Dernière"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Trafic par Appareil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
                <Bar dataKey="Android" fill="#F59E0B" />
                <Bar dataKey="iOS" fill="#10B981" />
                <Bar dataKey="Mac" fill="#8B5CF6" />
                <Bar dataKey="Windows" fill="#EF4444" />
                <Bar dataKey="Linux" fill="#06B6D4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}