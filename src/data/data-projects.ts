import { ChevronDown, Leaf, Droplet, Wind, Factory } from 'lucide-react';

export const mockProjects = [
  {
    id: 1,
    title: 'Mudanças climáticas e Aquecimento Global',
    icon: Wind, // Representa ventos, mudanças atmosféricas
    image: '/imagem01.png',
    summary: 'Efeitos das mudanças climáticas e do aquecimento global no planeta.',
    details:
      'As mudanças climáticas representam alterações significativas nos padrões do clima ao'+ 
      'longo do tempo, causadas, em grande parte, pelas atividades humanas. O principal fator'+ 
      ' é o aquecimento global, que consiste no aumento da temperatura média da Terra devido à'+ 
      ' emissão de gases de efeito estufa, como o dióxido de carbono (CO₂). Esses gases são liberados,'+ 
      ' principalmente, pela queima de combustíveis fósseis, desmatamento e poluição industrial. Como'+ 
      ' consequência, observamos o derretimento de geleiras, o aumento do nível dos oceanos, eventos'+ 
      ' climáticos extremos como secas e enchentes, além de impactos na agricultura e na biodiversidade.'+ 
      ' Enfrentar essas mudanças exige ações urgentes para reduzir as emissões e preservar o meio ambiente.',
    team: 'Alex, Cauâ, Emyson, Cícera e Otávio',
  },
  {
    id: 2,
    title: 'Desperdício e Gestão de Resíduos',
    icon: Factory, // Representa produção e lixo industrial
    image: '/imagem02.jpg',
    summary: 'Como o desperdício e o lixo impactam o meio ambiente.',
    details:
      'O desperdício de recursos e a má gestão de resíduos são problemas que afetam diretamente'+ 
      ' o meio ambiente e a qualidade de vida nas cidades. O consumo excessivo e o descarte'+ 
      ' inadequado de lixo contribuem para a poluição do solo, da água e do ar, além de'+ 
      ' sobrecarregar os aterros sanitários. Muitos materiais, como plásticos e eletrônicos,'+ 
      ' demoram anos para se decompor e podem causar danos irreversíveis à natureza. A gestão'+ 
      ' eficiente dos resíduos envolve a redução do consumo, a reutilização de materiais, a'+ 
      ' reciclagem e o descarte correto. Adotar hábitos sustentáveis é essencial para diminuir'+ 
      ' o impacto ambiental e construir um futuro mais equilibrado.',
    team: 'Caue, Riquelme, Vanessa, Yasmin e Lindemberg',
  },
  {
    id: 3,
    title: 'Desmatamento e Perda de Biodiversidade',
    icon: Leaf, // Representa a vegetação
    image: '/imagem03.png',
    summary: 'Consequências do desmatamento e extinção de espécies.',
    details:
      'O desmatamento é a remoção da vegetação nativa, especialmente em florestas, para dar lugar'+ 
      ' à agricultura, pecuária ou exploração de recursos naturais. Essa prática tem impactos'+ 
      ' profundos no meio ambiente, sendo uma das principais causas da perda de biodiversidade.'+ 
      ' Ao destruir os habitats naturais, milhares de espécies de plantas e animais ficam'+ 
      ' ameaçadas de extinção. Além disso, o desmatamento contribui para o aquecimento global,'+ 
      ' pois reduz a capacidade das florestas de absorver o dióxido de carbono da atmosfera.'+ 
      ' Proteger as florestas e conservar os ecossistemas são medidas urgentes para preservar'+ 
      ' a diversidade da vida e garantir o equilíbrio ambiental.',
    team: 'Alunos do 2° ano C',
  },
  {
    id: 4,
    title: 'Poluição e seus efeitos no meio ambiente',
    icon: Droplet, // Ícone de água representando poluição de rios/mar
    image: '/imagem04.png',
    summary: 'Tipos de poluição e seus impactos na saúde e na natureza.',
    details:
      'A poluição é um dos maiores desafios enfrentados pela sociedade moderna. Ela ocorre quando'+ 
      ' substâncias nocivas são lançadas no ar, na água ou no solo, causando desequilíbrios nos'+ 
      ' ecossistemas. Entre os principais efeitos estão o aquecimento global, a destruição da'+ 
      ' camada de ozônio, a contaminação de rios e oceanos, além da perda da biodiversidade.'+ 
      ' A poluição do ar, por exemplo, contribui para doenças respiratórias em humanos e animais.'+ 
      ' Já o lixo descartado incorretamente prejudica a fauna e polui os recursos hídricos.'+ 
      ' Combater a poluição é essencial para garantir a saúde do planeta e das futuras gerações.',
    team: 'Pauline, Pedro, Joyce, Larissa e Vitória',
  }
];
