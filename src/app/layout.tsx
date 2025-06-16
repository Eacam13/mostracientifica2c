import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mostra Científica do 2º C",
  description: "Site da mostra científica do 2º C",
  icons: {
    icon: "/iconsiteup.ico",
  },
  openGraph: {
    title: "Mostra Científica do 2º C",
    description: "Confira os projetos da mostra científica!",
    url: "https://mostracientifica2c.vercel.app/",
    siteName: "Feira do 2º C",
    images: [
      {
        url: "/imagesite.png",
        width: 1200,
        height: 630,
        alt: "Banner da Feira do 2º C",
      },
    ],
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
