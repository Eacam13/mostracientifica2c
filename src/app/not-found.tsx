import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <AlertTriangle className="text-green-600 w-16 h-16 mx-auto" />

        <h1 className="text-4xl font-bold text-green-700">Página não encontrada</h1>
        <p className="text-gray-600">
          O conteúdo que você está procurando não existe ou foi movido.
        </p>

        <Link href="/">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </main>
  );
}
