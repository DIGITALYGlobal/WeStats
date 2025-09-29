'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/navigation/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap, Target, Search, Users, ChartBar as BarChart3, Cloud, Lightbulb, ChevronRight, Play, Star, CircleCheck as CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const features = [
  {
    title: 'Statistiques avancées',
    description: 'Suivez vos performances en temps réel avec des métriques détaillées et des analyses approfondies.',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Automatisation des posts',
    description: 'Créez et planifiez vos publications automatiquement grâce à notre IA avancée.',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-orange-500 to-orange-700'
  },
  {
    title: 'Optimisation SEO & hashtags',
    description: 'Optimisez votre contenu pour maximiser votre portée et votre engagement.',
    icon: <Target className="h-6 w-6" />,
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Messages Centralisés',
    description: 'Gérez tous vos messages et interactions depuis une seule interface unifiée.',
    icon: <Search className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Analyse Concurrentielle',
    description: 'Analysez vos concurrents et découvrez de nouvelles opportunités de croissance.',
    icon: <Users className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Gestion d\'équipe',
    description: 'Collaborez efficacement avec votre équipe grâce aux outils de gestion intégrés.',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'from-orange-500 to-orange-700'
  },
  {
    title: 'Stockage Cloud illimité',
    description: 'Stockez et organisez tous vos contenus dans le cloud de manière sécurisée.',
    icon: <Cloud className="h-6 w-6" />,
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Idées de contenu IA',
    description: 'Obtenez des idées créatives et originales générées par notre intelligence artificielle.',
    icon: <Lightbulb className="h-6 w-6" />,
    color: 'from-blue-500 to-blue-700'
  }
];

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Influenceuse Lifestyle',
    content: 'WeStats a transformé ma façon de créer du contenu. L\'IA génère des idées créatives que je n\'aurais jamais pensées !',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5
  },
  {
    name: 'Thomas Dubois',
    role: 'YouTuber Tech',
    content: 'Les analyses détaillées m\'ont permis d\'augmenter mon engagement de 300% en 3 mois. Un outil indispensable !',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5
  },
  {
    name: 'Emma Leroy',
    role: 'Créatrice de Mode',
    content: 'La planification automatique me fait gagner 5 heures par semaine. Je peux enfin me concentrer sur ma créativité !',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5
  }
];

const brandLogos = [
  'Beam Valley', 'Shoppie', 'Xata Valley', 'VousPay', 'DevFly', 
  'TCS', 'Bluto', 'ContentFly', 'SilverBr', 'DealUp', 'Sepia'
];

export default function Home() {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header user={user} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Crownds WeStats partenaire certifié E-app. Aucune carte de crédit required
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Les données qui font{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  briller ton contenu.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Tout ce dont vous avez besoin pour suivre et optimiser vos performances.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
                    Lancer votre C'est Gratuit
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Rencontrer un conseiller
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className={`bg-gray-800/50 border-gray-700 ${i === 2 ? 'col-span-2' : ''}`}>
                    <CardContent className="p-6">
                      {i === 2 ? (
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                          <div>
                            <h3 className="text-white font-semibold">MEHDI FORHRANI</h3>
                            <p className="text-gray-400 text-sm">Bonjour, demandez-moi n'importe quoi !</p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg"></div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brandLogos.map((brand, index) => (
              <div key={index} className="text-gray-400 font-medium">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Des outils puissants</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour analyser, planifier et développer votre contenu en un seul endroit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors group">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Découvrez l'avenir de l'analyse de contenu
                </h2>
                <div className="space-y-4">
                  {[
                    'Analyse en temps réel de tous vos plateformes',
                    'Planification et automatisation avancées',
                    'Optimisation SEO & hashtag booster sur IA',
                    'Collaboration équipe et gestion avancée',
                    'Stockage sécurisé et données centralisées'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Découvrir WeStats
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                      <BarChart3 className="h-10 w-10 text-white" />
                    </div>
                    <p className="text-gray-400">Aperçu du Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Ce que disent nos créateurs</h2>
            <p className="text-xl text-gray-300">Rejoignez des milliers de créateurs qui ont transformé leur approche du contenu</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Une question ? Nous avons la réponse !</h2>
            <p className="text-xl text-gray-300">
              Voici vos questions comment améliorer analytics votre stratégie de contenu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Comment fonctionne WeStats ?",
                a: "WeStats analyse vos performances sur les plateformes et vous aide à optimiser votre contenu grâce à des insights personnalisés."
              },
              {
                q: "Quelles plateformes sont compatibles avec WeStats ?",
                a: "Nous supportons Instagram, TikTok, YouTube, Twitter, LinkedIn et Facebook avec plus de plateformes à venir."
              },
              {
                q: "À qui est destiné WeStats ?",
                a: "WeStats s'adresse aux créateurs de contenu, influenceurs, marketeurs et entreprises souhaitant optimiser leur présence digitale."
              },
              {
                q: "Quels types d'analyses WeStats propose-t-il ?",
                a: "Nous offrons des analyses d'engagement, de croissance, de contenu performant, d'audience et bien plus encore."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-4">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 lg:p-16 border border-purple-800/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Vous aimez WeStats ?
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Devenez Ambassadeur et gagnez des revenus
            </h3>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
                Rejoindre le programme
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold text-white">WeStats</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">À propos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Notre histoire</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Équipe</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Guide d'utilisation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support & Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Centre d'aide</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-center text-gray-400">
              © 2024 WeStats. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}