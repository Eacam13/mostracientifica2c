'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { mockProjects } from '@/data/data-projects';


export default function Projets() {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId(prev => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-green-700 text-center mt-3">
          Subtemas sobre Impactos Ambientais
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockProjects.map(({ id, title, icon: Icon, image, summary, details, team }) => (

            <Card
              key={id}
              className="overflow-hidden border border-green-200 hover:shadow-lg transition-all duration-300 p-0"
            >
              <div className="relative w-full h-52">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-green-600 w-6 h-6" />
                    <h2 className="text-xl font-semibold text-green-700">{title}</h2>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">{summary}</p>

                  <Button
                    variant="outline"
                    className="text-green-700 border-green-500 hover:bg-green-100"
                    onClick={() => toggleCard(id)}
                  >
                    {openCardId === id ? 'Menos informações' : 'Mais informações'}
                    <ChevronDown
                      className={clsx('ml-2 transition-transform', {
                        'rotate-180': openCardId === id
                      })}
                    />
                  </Button>

                  {openCardId === id && (
                    <div className="mt-4 text-sm text-gray-800 bg-green-50 p-4 rounded-md">
                      <p className="mb-2 text-justify">{details}</p>
                      <p className="text-green-700 font-medium">Equipe responsável: {team}</p>
                    </div>
                  )}
                </CardContent>
            </Card>

          ))}
        </div>
      </div>
    </main>
  );
}
