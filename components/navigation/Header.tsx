'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@supabase/supabase-js';

interface HeaderProps {
  user: User | null;
}

export default function Header({ user }: HeaderProps) {
  const { signOut } = useAuth();

  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-white">WeStats</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Tarifs
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              À propos
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={() => signOut()} variant="ghost" className="text-gray-300 hover:text-white">
                  Se déconnecter
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Se connecter
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Essai gratuit
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}