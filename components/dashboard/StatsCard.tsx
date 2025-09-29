'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  platform: string;
  isPositive: boolean;
  className?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon,
  platform,
  isPositive,
  className
}: StatsCardProps) {
  return (
    <Card className={cn("bg-gray-800/50 border-gray-700", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">{platform}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-xs text-gray-400 mt-1">Stats de la semaine dernière</p>
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-sm text-gray-400">+ 120 00 Vues</span>
          <span className={cn(
            "text-sm font-medium",
            isPositive ? "text-green-400" : "text-red-400"
          )}>
            {change}
          </span>
        </div>
        <div className="flex items-center mt-1 space-x-2">
          <span className="text-sm text-gray-400">+ 123 Likes</span>
          <span className="text-sm font-medium text-green-400">+15%</span>
        </div>
        <div className="flex items-center mt-1 space-x-2">
          <span className="text-sm text-gray-400">+ 23 Commentaires</span>
          <span className="text-sm font-medium text-red-400">-7%</span>
        </div>
      </CardContent>
    </Card>
  );
}