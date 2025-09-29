'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, TrendingUp, FileText, Eye, Users, Calendar, Library, Zap, DollarSign, CreditCard, Settings, Circle as HelpCircle, Search } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, current: true },
];

const analyticsNav = [
  { name: 'Performance', href: '/dashboard/performance', icon: TrendingUp },
  { name: 'Contenus & Posts', href: '/dashboard/content', icon: FileText },
  { name: 'Tendances & Insights', href: '/dashboard/insights', icon: Eye },
];

const managementNav = [
  { name: 'Équipe & Collaborateurs', href: '/dashboard/team', icon: Users },
  { name: 'Calendrier & Planification', href: '/dashboard/calendar', icon: Calendar },
];

const creatorNav = [
  { name: 'Bibliothèque de Contenu', href: '/dashboard/library', icon: Library },
  { name: 'Planification Automatisée', href: '/dashboard/automation', icon: Zap },
];

const financeNav = [
  { name: 'Revenus Mensuels', href: '/dashboard/revenue', icon: DollarSign },
  { name: 'Paiements & Factures', href: '/dashboard/billing', icon: CreditCard },
];

export default function Sidebar() {
  const pathname = usePathname();

  const NavGroup = ({ title, items }: { title: string; items: typeof navigation }) => (
    <div>
      <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                pathname === item.href
                  ? 'bg-purple-900/50 text-white border-r-2 border-purple-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors'
              )}
            >
              <item.icon
                className={cn(
                  pathname === item.href ? 'text-purple-400' : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-5 w-5'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900 w-64 flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="flex items-center h-16 px-4 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-bold text-white">WeStats</span>
        </Link>
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Rechercher ..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4 overflow-y-auto space-y-8">
        <NavGroup title="" items={navigation} />
        <NavGroup title="Statistiques & Analytics" items={analyticsNav} />
        <NavGroup title="Gestion & Collaboration" items={managementNav} />
        <NavGroup title="Outils Créateurs" items={creatorNav} />
        <NavGroup title="Finances & Facturation" items={financeNav} />
      </nav>

      {/* Help section */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-4 mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <HelpCircle className="h-5 w-5 text-purple-400" />
            <span className="text-sm font-medium text-white">Besoin d'aide ?</span>
          </div>
          <p className="text-xs text-gray-300 mb-3">Voulez consulter notre docs</p>
          <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded transition-colors">
            Documentation
          </button>
        </div>

        <Link
          href="/dashboard/settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400" />
          Paramètres
        </Link>
      </div>
    </div>
  );
}