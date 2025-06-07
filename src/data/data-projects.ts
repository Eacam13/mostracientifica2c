import { ChevronDown, Leaf, Droplet, Wind, Factory } from 'lucide-react';

export const mockProjects = [
  {
    id: 1,
    title: 'Mudanças climáticas e Aquecimento Global',
    icon: Wind, // Representa ventos, mudanças atmosféricas
    image: '/sustentabilidade.jpg',
    summary: 'Efeitos das mudanças climáticas e do aquecimento global no planeta.',
    details:
      'O aumento das temperaturas globais tem impactos diretos no clima, nos oceanos e nos ecossistemas. Este projeto explora as causas do aquecimento global, como o efeito estufa, e propõe ações para mitigação, como a redução de emissões e o reflorestamento.',
    team: 'Clima em Alerta - 3º Ano A',
  },
  {
    id: 2,
    title: 'Desperdício e Gestão de Resíduos',
    icon: Factory, // Representa produção e lixo industrial
    image: '/sustentabilidade.jpg',
    summary: 'Como o desperdício e o lixo impactam o meio ambiente.',
    details:
      'O descarte inadequado de resíduos sólidos é um dos maiores desafios urbanos. Este projeto aborda práticas de reciclagem, compostagem e redução de resíduos no dia a dia escolar e familiar, além de apresentar dados sobre o impacto do lixo no solo e nos mares.',
    team: 'EcoConsciência - 2º Ano B',
  },
  {
    id: 3,
    title: 'Desmatamento e Perda de Biodiversidade',
    icon: Leaf, // Representa a vegetação
    image: '/sustentabilidade.jpg',
    summary: 'Consequências do desmatamento e extinção de espécies.',
    details:
      'A destruição de florestas tropicais como a Amazônia compromete a biodiversidade e acelera mudanças climáticas. O grupo investigou as causas do desmatamento, a relação com o agronegócio e propôs soluções como reflorestamento e preservação de áreas nativas.',
    team: 'Raízes Verdes - 1º Ano C',
  },
  {
    id: 4,
    title: 'Poluição e seus efeitos no meio ambiente',
    icon: Droplet, // Ícone de água representando poluição de rios/mar
    image: '/sustentabilidade.jpg',
    summary: 'Tipos de poluição e seus impactos na saúde e na natureza.',
    details:
      'A poluição atmosférica, sonora, hídrica e do solo afeta diretamente a saúde humana e o equilíbrio ambiental. Este projeto apresenta dados locais de poluição, impactos em comunidades e alternativas como transporte sustentável e preservação dos recursos naturais.',
    team: 'Guardians do Planeta - 3º Ano C',
  }
];
