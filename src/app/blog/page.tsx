'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/connect-firebase';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Smile, Loader2 } from 'lucide-react'; // importei o Loader2 para spinner
import dynamic from 'next/dynamic';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

interface Message {
  id?: string;
  name: string;
  comment: string;
  emoji: string;
}

export default function Blog() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [emoji, setEmoji] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  // Carrega as mensagens do Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  // Envia mensagem para o Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || !emoji) return;

    setLoading(true); // start loading

    const newMessage = {
      name,
      comment,
      emoji,
      timestamp: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'messages'), newMessage);
      setMessages(prev => [{ id: docRef.id, ...newMessage }, ...prev]);

      // limpar campos só após o envio
      setName('');
      setComment('');
      setEmoji('');
      setShowPicker(false);
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  const onEmojiClick = (emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8 mt-[5%]">
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
            disabled={loading}
          />
          <Textarea
            placeholder="Deixe um comentário sobre o site ou os projetos..."
            value={comment}
            onChange={e => setComment(e.target.value)}
            disabled={loading}
          />

          <div className="relative">
            <Button
              type="button"
              variant="outline"
              className="w-full justify-start text-left text-gray-700"
              onClick={() => setShowPicker(prev => !prev)}
              disabled={loading}
            >
              {emoji || 'Escolha um emoji'}
              <Smile className="ml-auto w-5 h-5 text-green-600" />
            </Button>

            {showPicker && !loading && (
              <div className="absolute z-50 top-full mt-2">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-green-600 text-white hover:bg-green-700 cursor-pointer w-full flex justify-center items-center gap-2"
            disabled={!name || !comment || !emoji || loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Enviando...
              </>
            ) : (
              <>
                <Smile className="w-4 h-4" />
                Enviar mensagem
              </>
            )}
          </Button>
        </form>

        <div className="grid gap-4">
          {messages.map((msg) => (
            <Card key={msg.id} className="border border-green-100 shadow-sm">
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
