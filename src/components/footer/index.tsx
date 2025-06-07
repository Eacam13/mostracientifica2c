'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Mostra Científica 2025</h2>
          <p className="text-sm text-gray-100">
            Um evento educacional promovido pela EEM Centro Don Hélio Campos, reunindo ciência, tecnologia e sustentabilidade em um só lugar.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Navegação</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">Início</Link>
            </li>
            <li>
              <Link href="/projeto" className="hover:underline">Projetos</Link>
            </li>
            <li>
              <Link href="/equipe" className="hover:underline">Equipe</Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">Contato</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contato</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Av. das Ciências, 123 – Centro, Cidade/UF
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@escolaexemplo.edu" className="hover:underline">
                segundocdhc@gmail.com
              </a>
            </li>
            <li className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} acamDeveloper. Todos os direitos reservados.
      </div>
    </footer>
  );
}
