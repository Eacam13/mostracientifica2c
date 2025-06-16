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
              <Link href="/projects" className="hover:underline">Projetos</Link>
            </li>
            <li>
              <Link href="/aboutsection" className="hover:underline">Sobre</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contato</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              RUA SAO RAIMUNDO, 199 PIRAMBU - CEARÁ
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@escolaexemplo.edu" className="hover:underline">
                segundocdhc@gmail.com
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
