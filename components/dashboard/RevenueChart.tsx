'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const revenueData = [
  { name: 'Instagram', value: 40, color: '#E91E63' },
  { name: 'YouTube', value: 30, color: '#FF5722' },
  { name: 'TikTok', value: 20, color: '#9C27B0' },
  { name: 'Twitter', value: 10, color: '#2196F3' }
];

const transactions = [
  {
    id: 1,
    platform: 'Instagram',
    amount: '+1121.40 €',
    date: '4 july, 2024 11:32 am',
    color: 'bg-pink-500'
  },
  {
    id: 2,
    platform: 'YouTube',
    amount: '+2564.20 €',
    date: '4 july, 2024 11:32 am',
    color: 'bg-red-500'
  },
  {
    id: 3,
    platform: 'TikTok',
    amount: '+132.40 €',
    date: '4 july, 2024 11:32 am',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    platform: 'Twitter',
    amount: '+563.15 €',
    date: '4 july, 2024 11:32 am',
    color: 'bg-blue-500'
  }
];

export default function RevenueChart() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Revenus</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">Total</p>
            <p className="text-2xl font-bold text-white">$17754.07</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Dernières Transactions</h4>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${transaction.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {transaction.platform[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{transaction.platform}</p>
                      <p className="text-gray-400 text-xs">{transaction.date}</p>
                    </div>
                  </div>
                  <p className="text-green-400 font-medium text-sm">{transaction.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}