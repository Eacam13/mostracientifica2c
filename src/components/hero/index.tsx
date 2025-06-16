/* File: components/HeroSection.tsx */
'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black">
        <img
          src="/sustentabilidade.jpg"
          alt="Banner da feira de sustentabilidade"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-4 bg-green-600 hover:bg-green-700">
          16-18 de Junho, 2025
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Mostra Científica 2025
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100">
          Conectando pessoas, ideias e soluções para um futuro mais sustentável e consciente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 cursor-pointer">
              Participar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black cursor-pointer"
            >
              Conhecer mais
            </Button>
          </Link>

        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Button
          variant="ghost"
          className="rounded-full animate-bounce"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronRight className="h-6 w-6 rotate-90" />
        </Button>
      </div>
    </section>
  );
}