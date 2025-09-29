'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Sidebar from '@/components/navigation/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import SocialConnect from '@/components/dashboard/SocialConnect';
import AIGenerator from '@/components/dashboard/AIGenerator';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import ContactList from '@/components/dashboard/ContactList';
import RevenueChart from '@/components/dashboard/RevenueChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Instagram, 
  Youtube, 
  Music, 
  Twitter,
  Bell,
  Settings,
  User
} from 'lucide-react';
import { Toaster } from 'sonner';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Utilisateur';

  return (
    <div className="min-h-screen bg-gray-950">
      <Toaster richColors position="top-right" />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 ml-64">
          {/* Header */}
          <header className="bg-gray-900/50 border-b border-gray-800 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Salut, {userName}</h1>
                <p className="text-gray-400">Contenu de te revoir</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                  Modifier Dashboard
                </Button>
                <Bell className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                <Settings className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 space-y-8">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Bon Retour</h2>
                    <h3 className="text-2xl font-bold text-purple-300">MEHDI FORHRANI</h3>
                    <p className="text-gray-300 mt-2">Bonjour, demandez-moi n'importe quoi !</p>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Instagram"
                value="4 231"
                change="+55%"
                icon={<Instagram className="h-6 w-6 text-pink-400" />}
                platform="Instagram"
                isPositive={true}
              />
              <StatsCard
                title="YouTube"
                value="1 237"
                change="+55%"
                icon={<Youtube className="h-6 w-6 text-red-400" />}
                platform="YouTube"
                isPositive={true}
              />
              <StatsCard
                title="TikTok"
                value="10 043"
                change="+55%"
                icon={<Music className="h-6 w-6 text-purple-400" />}
                platform="TikTok"
                isPositive={true}
              />
              <StatsCard
                title="Twitter"
                value="2 943"
                change="+55%"
                icon={<Twitter className="h-6 w-6 text-blue-400" />}
                platform="Twitter"
                isPositive={true}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                {/* Messages Inbox */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">Inbox Message</CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">Mail</span>
                        <span className="px-2 py-1 bg-pink-600/20 text-pink-400 text-xs rounded">Instagram</span>
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">TikTok</span>
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">Facebook</span>
                        <span className="px-2 py-1 bg-blue-700/20 text-blue-400 text-xs rounded">LinkedIn</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                        Voir tous
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: 'Proposition Partenariat', date: '23 Mars', preview: 'Proin id ligula dictum, convallis enim ut, facilisis massa...' },
                      { title: 'Retour Monteur', date: '23 Mars', preview: 'Proin id ligula dictum, convallis enim ut, facilisis massa...' },
                      { title: 'BankNet', date: '23 Mars', preview: 'Proin id ligula dictum, convallis enim ut, facilisis massa...' }
                    ].map((msg, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{msg.title}</h4>
                          <p className="text-gray-400 text-sm">{msg.preview}</p>
                        </div>
                        <span className="text-gray-400 text-sm">{msg.date}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Analytics Charts */}
                <AnalyticsChart />
              </div>

              {/* Right Column - 1/3 width */}
              <div className="space-y-8">
                <ContactList />
                <RevenueChart />
              </div>
            </div>

            {/* AI Generator and Social Connect */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AIGenerator />
              <SocialConnect />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}