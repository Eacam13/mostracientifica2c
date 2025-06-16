/* File: components/AboutSection.tsx */
import { Button } from "@/components/ui/button";
import { Calendar, Users, Leaf, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sobre o Evento</h2>
            <p className="text-gray-600 mb-6 text-justify">
              A Mostra Científica é um evento anual que reúne estudantes, professores
              e outros profissionais interessados em compartilhar conhecimentos e soluções
              para um futuro mais sustentável. Com exposições e muito mais,
              o evento é uma oportunidade única para aprender e se conectar.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span>15-20 de Junho</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>+100 participantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span>+20 projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-green-600" />
                <span>7 categorias</span>
              </div>
            </div>
            <Link href="/blog" >
              <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">
                Deixe sua mensagem
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-96">
              <img
                src="/meioambiente.jpg"
                alt="Edição anterior da feira"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}