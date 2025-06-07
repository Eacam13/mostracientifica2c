'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Smile } from 'lucide-react';

import dynamic from 'next/dynamic';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

interface Message {
  name: string;
  comment: string;
  emoji: string;
}

const mockMessages: Message[] = [
  { name: 'Ana', comment: 'Projeto incrível, aprendi muito! 🌱', emoji: '💚' },
  { name: 'Lucas', comment: 'Muito legal a forma como explicaram os temas!', emoji: '👏' },
  { name: 'Bia', comment: 'Amei o tema sobre mudanças climáticas!', emoji: '🌍' }
];

export default function Blog() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [emoji, setEmoji] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || !emoji) return;

    const newMessage: Message = { name, comment, emoji };
    setMessages(prev => [newMessage, ...prev]);

    setName('');
    setComment('');
    setEmoji('');
    setShowPicker(false);
  };

  const onEmojiClick = (emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center md:mt-5 mt-6 mb-8">
          💬 Mural de Recados
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-green-200 rounded-xl p-6 mb-10 shadow-sm space-y-4"
        >
          <Input
            placeholder="Seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Textarea
            placeholder="Deixe um comentário sobre o site ou os projetos..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />

          <div className="relative">
            <Button
              type="button"
              variant="outline"
              className="w-full justify-start text-left text-gray-700"
              onClick={() => setShowPicker(prev => !prev)}
            >
              {emoji || 'Escolha um emoji'}
              <Smile className="ml-auto w-5 h-5 text-green-600" />
            </Button>

            {showPicker && (
              <div className="absolute z-50 top-full mt-2">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-green-600 text-white hover:bg-green-700 w-full flex items-center gap-2"
            disabled={!name || !comment || !emoji}
          >
            <Smile className="w-4 h-4" />
            Enviar mensagem
          </Button>
        </form>

        <div className="grid gap-4">
          {messages.map((msg, idx) => (
            <Card key={idx} className="border border-green-100 shadow-sm">
              <CardContent className="p-4 space-y-1">
                <p className="text-sm text-gray-600">
                  <strong className="text-green-700">{msg.name}</strong> diz:
                </p>
                <p className="text-base text-gray-800">{msg.comment}</p>
                <p className="text-3xl">{msg.emoji}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
