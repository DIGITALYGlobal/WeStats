'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  color: string;
}

export default function SocialConnect() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      connected: false,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      icon: <Twitter className="h-6 w-6" />,
      connected: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook className="h-6 w-6" />,
      connected: false,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      connected: false,
      color: 'from-blue-700 to-blue-800'
    }
  ]);

  const handleConnect = async (platformId: string) => {
    // Simulate connection process
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, connected: true } : p
    ));
  };

  const handleDisconnect = async (platformId: string) => {
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, connected: false } : p
    ));
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Connexion aux réseaux sociaux</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${platform.color} text-white`}>
                {platform.icon}
              </div>
              <div>
                <h3 className="text-white font-medium">{platform.name}</h3>
                <p className="text-sm text-gray-400">
                  {platform.connected ? 'Connecté' : 'Non connecté'}
                </p>
              </div>
            </div>
            <Button
              onClick={() => platform.connected ? handleDisconnect(platform.id) : handleConnect(platform.id)}
              variant={platform.connected ? 'destructive' : 'default'}
              size="sm"
              className={platform.connected ? '' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'}
            >
              {platform.connected ? 'Déconnecter' : 'Connecter'}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}