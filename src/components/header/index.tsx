"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        "md:bg-green-500 md:shadow-md",               // sempre verde em telas grandes
        scrolled ? "bg-green-500 shadow-md backdrop-blur" : "bg-green-500"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-white">
        <Link href="/" className="text-xl font-semibold">
          🌱 Impactos Ambientais
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/"        className="hover:underline">Início</Link>
          <Link href="/projects" className="hover:underline">Projetos</Link>
          <Link href="/aboutsection"  className="hover:underline">Sobre</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button className=" cursor-pointer" variant="ghost" size="icon">
                  <Menu className="h-6 w-6 bg-black" />
                </Button>
              </MenubarTrigger>
              <MenubarContent className="bg-green-500" align="end">
                <MenubarItem asChild><Link href="/">Início</Link></MenubarItem>
                <MenubarItem asChild><Link href="/projeto">O Projeto</Link></MenubarItem>
                <MenubarItem asChild><Link href="/equipe">Equipe</Link></MenubarItem>
                <MenubarItem asChild><Link href="/contato">Contato</Link></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
}
