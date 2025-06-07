// src/components/FeaturesSection.tsx
import { Lightbulb, Mic, Music } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que esperar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aprendizado</h3>
            <p className="text-gray-600 dark:text-gray-300">Descubra e compartilhe conhecimentos sobre os anos 20.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center">
              <Mic className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Debates</h3>
            <p className="text-gray-600 dark:text-gray-300">Participe de rodas de conversa e apresentações dinâmicas.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center">
              <Music className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultura</h3>
            <p className="text-gray-600 dark:text-gray-300">Vivencie a arte, música e costumes que marcaram a década de 20.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
