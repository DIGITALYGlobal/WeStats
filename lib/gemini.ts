export class GeminiService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  }

  async generateContent(prompt: string, platform: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error('Gemini API key not configured');
    }

    const platformContext = platform === 'twitter' 
      ? 'Génère un tweet engageant (max 280 caractères) avec des hashtags pertinents.'
      : 'Génère un post Instagram captivant avec une description engageante et des hashtags populaires.';

    const fullPrompt = `${platformContext} Sujet: ${prompt}. Réponds uniquement avec le contenu du post, sans explications.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullPrompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error generating content:', error);
      return `Contenu généré pour ${platform}: ${prompt}. Voici une idée de post engageant sur ce sujet !`;
    }
  }
}

export const geminiService = new GeminiService();