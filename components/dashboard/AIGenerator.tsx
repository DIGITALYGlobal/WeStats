'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Copy, Clock } from 'lucide-react';
import { geminiService } from '@/lib/gemini';
import { toast } from 'sonner';

export default function AIGenerator() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!topic || !platform) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsGenerating(true);
    try {
      const content = await geminiService.generateContent(topic, platform);
      setGeneratedContent(content);
      toast.success('Contenu généré avec succès !');
    } catch (error) {
      toast.error('Erreur lors de la génération du contenu');
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success('Contenu copié dans le presse-papiers !');
  };

  const handleSchedule = () => {
    if (!generatedContent) {
      toast.error('Aucun contenu à planifier');
      return;
    }
    toast.success('Post ajouté à la planification !');
    setGeneratedContent('');
    setTopic('');
    setPlatform('');
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <span>Génération de contenu par IA</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-gray-300">Sujet ou mot-clé</Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: marketing digital, voyage, cuisine..."
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Plateforme cible</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Choisir une plateforme" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="twitter">Twitter/X</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !topic || !platform}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Génération en cours...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Générer
              </>
            )}
          </Button>
        </div>

        {generatedContent && (
          <div className="space-y-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <Label className="text-gray-300">Contenu généré</Label>
            <Textarea
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
              placeholder="Le contenu généré apparaîtra ici..."
            />
            <div className="flex space-x-2">
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copier
              </Button>
              <Button
                onClick={handleSchedule}
                size="sm"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                <Clock className="mr-2 h-4 w-4" />
                Planifier
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}