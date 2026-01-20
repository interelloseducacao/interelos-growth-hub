// Mock data for courses, events, cases, and articles

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  modality: 'ead' | 'hibrido' | 'presencial';
  type: 'curso' | 'treinamento' | 'workshop' | 'encontro' | 'imersao';
  duration: string;
  workload: string;
  price?: string;
  originalPrice?: string;
  themes: string[];
  target: string[];
  benefits: string[];
  modules: { title: string; topics: string[] }[];
  instructors: { name: string; role: string; bio: string }[];
  dates?: string;
  location?: string;
  featured?: boolean;
  highlight?: boolean;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  modality: 'online' | 'hibrido' | 'presencial';
  date: string;
  time: string;
  location?: string;
  topics: string[];
  target: string[];
  featured?: boolean;
}

export interface Case {
  id: string;
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  approach: string;
  result: string;
  metrics?: string[];
  featured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: '0',
    slug: 'precificacao-empreendedores-facilities',
    title: 'Precificacao para Empreendedores de Facilities',
    description: 'Curso completo de precificacao especifico para o setor de facilities. Aprenda a calcular custos, definir margens e conquistar contratos lucrativos.',
    shortDescription: 'Domine a precificacao no setor de facilities e aumente sua lucratividade.',
    modality: 'ead',
    type: 'curso',
    duration: '6 semanas',
    workload: '30 horas',
    price: 'R$ 899',
    originalPrice: 'R$ 2.999',
    themes: ['Precificacao', 'Facilities', 'Gestao'],
    target: ['Empreendedores de facilities', 'Gestores de contratos', 'Empresarios do setor de servicos'],
    benefits: [
      'Metodologia exclusiva para facilities',
      'Planilhas de calculo prontas para uso',
      'Cases reais do setor',
      'Certificado de conclusao',
      'Suporte durante o curso'
    ],
    modules: [
      { title: 'Fundamentos de Custos em Facilities', topics: ['Custos diretos e indiretos', 'Mao de obra e encargos', 'Materiais e equipamentos'] },
      { title: 'Formacao de Precos', topics: ['Markup e margem', 'BDI para servicos', 'Precificacao por metro quadrado'] },
      { title: 'Estrategias Comerciais', topics: ['Proposta comercial vencedora', 'Negociacao de contratos', 'Reajustes e revisoes'] }
    ],
    instructors: [{ name: 'Prof. Carlos Silva', role: 'Diretor Academico', bio: 'Especialista em estrategia com 20+ anos de experiencia no setor.' }],
    featured: true,
    highlight: true
  },
  {
    id: '7',
    slug: 'marketing-inteligencia-artificial-pmes',
    title: 'Marketing e Inteligencia Artificial para Empreendedores PMEs',
    description: 'Curso completo para empreendedores de pequenas e medias empresas que desejam dominar estrategias de marketing potencializadas pela inteligencia artificial. Aprenda a usar ferramentas de IA para automatizar campanhas, criar conteudo e analisar dados.',
    shortDescription: 'Domine o marketing com IA e revolucione sua estrategia digital.',
    modality: 'ead',
    type: 'curso',
    duration: '8 semanas',
    workload: '40 horas',
    price: 'R$ 1.200',
    originalPrice: 'R$ 3.200',
    themes: ['Marketing', 'Inteligencia Artificial', 'PMEs'],
    target: ['Empreendedores de PMEs', 'Gestores de marketing', 'Empresarios que buscam inovacao'],
    benefits: [
      'Ferramentas de IA para marketing',
      'Automacao de campanhas',
      'Criacao de conteudo com IA',
      'Analise de dados e insights',
      'Certificado de conclusao',
      'Parcele em ate 10x sem juros'
    ],
    modules: [
      { title: 'Fundamentos de IA no Marketing', topics: ['O que e IA', 'Ferramentas disponiveis', 'Cases de sucesso'] },
      { title: 'Automacao e Conteudo', topics: ['ChatGPT para negocios', 'Geracao de conteudo', 'E-mail marketing automatizado'] },
      { title: 'Analise e Otimizacao', topics: ['Metricas com IA', 'Testes A/B inteligentes', 'Personalizacao de campanhas'] }
    ],
    instructors: [{ name: 'Prof. Ricardo Tech', role: 'Especialista em IA', bio: 'Consultor de marketing digital e inteligencia artificial com 15 anos de experiencia.' }],
    featured: true,
    highlight: true
  },
  {
    id: '1',
    slug: 'formacao-precificacao-estrategica',
    title: 'Formacao em Precificacao Estrategica',
    description: 'Domine as tecnicas de precificacao para maximizar margens e competitividade.',
    shortDescription: 'Aprenda a precificar produtos e servicos de forma estrategica.',
    modality: 'ead',
    type: 'curso',
    duration: '8 semanas',
    workload: '40 horas',
    price: 'R$ 2.497',
    themes: ['Precificacao', 'Estrategia', 'Gestao'],
    target: ['Empreendedores', 'Gestores comerciais', 'Diretores'],
    benefits: [
      'Aumento medio de 15% nas margens',
      'Metodologia aplicavel imediatamente',
      'Ferramentas exclusivas de calculo',
      'Mentoria em grupo durante o curso'
    ],
    modules: [
      { title: 'Fundamentos da Precificacao', topics: ['Custos fixos e variaveis', 'Margem de contribuicao', 'Ponto de equilibrio'] },
      { title: 'Estrategias de Precificacao', topics: ['Precificacao por valor', 'Precificacao competitiva', 'Precificacao dinamica'] },
      { title: 'Implementacao Pratica', topics: ['Analise de elasticidade', 'Testes de preco', 'Comunicacao de valor'] }
    ],
    instructors: [{ name: 'Prof. Carlos Silva', role: 'Diretor Academico', bio: 'Especialista em estrategia com 20+ anos de experiencia.' }],
    featured: true
  },
  {
    id: '2',
    slug: 'gestao-financeira-para-pmes',
    title: 'Gestao Financeira para PMEs',
    description: 'Controle financeiro completo para pequenas e medias empresas.',
    shortDescription: 'Domine as financas da sua empresa.',
    modality: 'hibrido',
    type: 'treinamento',
    duration: '6 semanas',
    workload: '30 horas',
    price: 'R$ 1.997',
    themes: ['Gestao', 'Financas', 'Crescimento'],
    target: ['Empresarios', 'Controllers', 'Gerentes financeiros'],
    benefits: [
      'Fluxo de caixa sob controle',
      'Indicadores financeiros claros',
      'Tomada de decisao baseada em dados'
    ],
    modules: [
      { title: 'Controle Financeiro', topics: ['DRE', 'Balanco', 'Fluxo de caixa'] },
      { title: 'Indicadores e Metricas', topics: ['ROI', 'Payback', 'Margens'] }
    ],
    instructors: [{ name: 'Profa. Ana Costa', role: 'Consultora Financeira', bio: 'CFO com passagem por empresas de diversos portes.' }],
    featured: true
  },
  {
    id: '3',
    slug: 'workshop-planejamento-estrategico',
    title: 'Workshop de Planejamento Estrategico',
    description: 'Construa o plano estrategico da sua empresa em 2 dias intensivos.',
    shortDescription: 'Planejamento estrategico pratico e aplicado.',
    modality: 'presencial',
    type: 'workshop',
    duration: '2 dias',
    workload: '16 horas',
    price: 'R$ 3.497',
    themes: ['Estrategia', 'Planejamento', 'Inovacao'],
    target: ['Socios', 'Diretores', 'Gestores'],
    benefits: [
      'Saia com plano estrategico pronto',
      'Metodologia testada em 500+ empresas',
      'Acompanhamento pos-workshop'
    ],
    modules: [
      { title: 'Diagnostico Estrategico', topics: ['Analise SWOT', 'Posicionamento', 'Vantagem competitiva'] },
      { title: 'Construcao do Plano', topics: ['Metas', 'Iniciativas', 'Cronograma'] }
    ],
    instructors: [{ name: 'Prof. Carlos Silva', role: 'Diretor Academico', bio: 'Especialista em estrategia com 20+ anos de experiencia.' }],
    dates: '15 e 16 de Fevereiro de 2025',
    location: 'Lapa - Sao Paulo',
    featured: true
  },
  {
    id: '4',
    slug: 'imersao-crescimento-acelerado',
    title: 'Imersao Crescimento Acelerado',
    description: 'Estrategias comprovadas para escalar seu negocio.',
    shortDescription: 'Acelere o crescimento da sua empresa.',
    modality: 'presencial',
    type: 'imersao',
    duration: '3 dias',
    workload: '24 horas',
    price: 'R$ 4.997',
    themes: ['Crescimento', 'Estrategia', 'Inovacao'],
    target: ['Empreendedores', 'CEOs', 'Fundadores'],
    benefits: [
      'Networking com outros empresarios',
      'Plano de crescimento personalizado',
      'Acesso a rede de investidores'
    ],
    modules: [
      { title: 'Modelo de Negocios', topics: ['Canvas', 'Proposta de valor', 'Canais'] },
      { title: 'Estrategias de Crescimento', topics: ['Growth hacking', 'Vendas B2B', 'Parcerias'] }
    ],
    instructors: [{ name: 'Prof. Roberto Mendes', role: 'Mentor de Startups', bio: 'Investidor-anjo e mentor de mais de 100 startups.' }],
    dates: '22 a 24 de Marco de 2025',
    location: 'Lapa - Sao Paulo',
    featured: true
  },
  {
    id: '5',
    slug: 'lideranca-e-gestao-de-equipes',
    title: 'Lideranca e Gestao de Equipes',
    description: 'Desenvolva habilidades de lideranca para formar times de alta performance.',
    shortDescription: 'Torne-se um lider inspirador.',
    modality: 'ead',
    type: 'curso',
    duration: '6 semanas',
    workload: '24 horas',
    price: 'R$ 1.497',
    themes: ['Gestao', 'Lideranca', 'Pessoas'],
    target: ['Gestores', 'Coordenadores', 'Supervisores'],
    benefits: [
      'Comunicacao assertiva',
      'Gestao de conflitos',
      'Desenvolvimento de talentos'
    ],
    modules: [
      { title: 'Fundamentos da Lideranca', topics: ['Estilos de lideranca', 'Autoconhecimento', 'Inteligencia emocional'] },
      { title: 'Gestao de Times', topics: ['Delegacao', 'Feedback', 'Motivacao'] }
    ],
    instructors: [{ name: 'Profa. Mariana Santos', role: 'Coach Executiva', bio: 'Especialista em desenvolvimento de liderancas.' }]
  },
  {
    id: '6',
    slug: 'vendas-consultivas-b2b',
    title: 'Vendas Consultivas B2B',
    description: 'Tecnicas avancadas de vendas para o mercado corporativo.',
    shortDescription: 'Venda mais e melhor para empresas.',
    modality: 'hibrido',
    type: 'treinamento',
    duration: '4 semanas',
    workload: '20 horas',
    price: 'R$ 1.797',
    themes: ['Vendas', 'Estrategia', 'Crescimento'],
    target: ['Vendedores', 'Gerentes comerciais', 'Empreendedores'],
    benefits: [
      'Aumento de taxa de conversao',
      'Ticket medio maior',
      'Relacionamento de longo prazo com clientes'
    ],
    modules: [
      { title: 'Processo de Venda Consultiva', topics: ['Prospeccao', 'Qualificacao', 'Apresentacao'] },
      { title: 'Negociacao e Fechamento', topics: ['Tecnicas de negociacao', 'Objecoes', 'Follow-up'] }
    ],
    instructors: [{ name: 'Prof. Fernando Alves', role: 'Diretor Comercial', bio: 'Liderou equipes comerciais em multinacionais.' }]
  }
];

export const events: Event[] = [
  {
    id: '1',
    slug: 'encontro-empreendedores-lapa',
    title: 'Encontro de Empreendedores',
    description: 'Networking e troca de experiencias entre empresarios de diversos setores.',
    shortDescription: 'Conecte-se com outros empreendedores.',
    modality: 'presencial',
    date: '15 de Marco de 2026',
    time: '19h00 - 22h00',
    location: 'Lapa - Sao Paulo',
    topics: ['Networking', 'Troca de experiencias', 'Parcerias'],
    target: ['Empreendedores', 'Empresarios', 'Startups'],
    featured: true
  },
  {
    id: '2',
    slug: 'webinar-tendencias-2026',
    title: 'Webinar: Tendencias de Negocios 2026',
    description: 'Analise das principais tendencias e oportunidades para o proximo ano.',
    shortDescription: 'Prepare-se para 2026.',
    modality: 'online',
    date: '10 de Abril de 2026',
    time: '14h00 - 16h00',
    topics: ['Tendencias', 'Inovacao', 'Estrategia'],
    target: ['Empresarios', 'Gestores', 'Empreendedores'],
    featured: true
  },
  {
    id: '3',
    slug: 'cafe-com-mentor',
    title: 'Cafe com Mentor',
    description: 'Sessao informal de mentoria com especialistas da Interellos.',
    shortDescription: 'Mentoria em formato descontraido.',
    modality: 'presencial',
    date: '22 de Maio de 2026',
    time: '08h30 - 10h30',
    location: 'Lapa - Sao Paulo',
    topics: ['Mentoria', 'Duvidas', 'Orientacao'],
    target: ['Empreendedores em fase inicial', 'Empresarios em transicao'],
    featured: true
  }
];

export const cases: Case[] = [
  {
    id: '1',
    slug: 'empresa-facilities-precificacao',
    company: 'Empresa de Facilities',
    industry: 'Facilities',
    challenge: 'Margens baixas e dificuldade em precificar contratos de forma competitiva, perdendo oportunidades de vendas por falta de assertividade nas propostas.',
    approach: 'Treinamento completo em precificação estratégica para o setor de facilities, com metodologia prática para cálculo de custos, definição de margens e elaboração de propostas comerciais vencedoras.',
    result: 'Aumento de 28% na margem dos contratos e participação em 40% mais processos de vendas com propostas assertivas e competitivas.',
    metrics: ['+28% margem', '+40% processos', '6 meses'],
    featured: true
  },
  {
    id: '2',
    slug: 'industria-transformacao-digital',
    company: 'Industria Metalurgica Regional',
    industry: 'Industria',
    challenge: 'Margens decrescentes e perda de competitividade frente a concorrentes internacionais.',
    approach: 'Revisao completa da estrategia de precificacao, identificacao de ineficiencias operacionais e reposicionamento de mercado.',
    result: 'Aumento de 22% na margem liquida e conquista de 3 novos mercados em 18 meses.',
    metrics: ['+22% margem', '3 novos mercados', '18 meses'],
    featured: true
  },
  {
    id: '3',
    slug: 'varejo-expansao-nacional',
    company: 'Rede de Varejo Especializado',
    industry: 'Varejo',
    challenge: 'Estagnacao no crescimento e dificuldade em replicar o modelo de sucesso para novas unidades.',
    approach: 'Estruturacao de processos, desenvolvimento de liderancas regionais e planejamento de expansao.',
    result: 'Abertura de 12 novas lojas em 2 anos com ROI positivo a partir do 8o mes.',
    metrics: ['12 novas lojas', 'ROI em 8 meses', '2 anos'],
    featured: true
  }
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'como-precificar-servicos-profissionais',
    title: 'Como Precificar Servicos Profissionais',
    excerpt: 'Guia pratico para definir precos que refletem o valor entregue ao cliente.',
    content: 'Conteudo completo do artigo sobre precificacao de servicos...',
    category: 'Precificacao',
    author: 'Equipe Interellos',
    date: '15 de Janeiro de 2025',
    readTime: '8 min',
    featured: true
  },
  {
    id: '2',
    slug: '5-erros-gestao-financeira-pmes',
    title: '5 Erros Comuns na Gestao Financeira de PMEs',
    excerpt: 'Identifique e corrija os principais erros que comprometem a saude financeira.',
    content: 'Conteudo completo do artigo sobre gestao financeira...',
    category: 'Gestao',
    author: 'Equipe Interellos',
    date: '10 de Janeiro de 2025',
    readTime: '6 min',
    featured: true
  },
  {
    id: '3',
    slug: 'planejamento-estrategico-passo-a-passo',
    title: 'Planejamento Estrategico: Passo a Passo',
    excerpt: 'Metodologia pratica para construir o plano estrategico da sua empresa.',
    content: 'Conteudo completo do artigo sobre planejamento estrategico...',
    category: 'Estrategia',
    author: 'Equipe Interellos',
    date: '05 de Janeiro de 2025',
    readTime: '10 min',
    featured: true
  },
  {
    id: '4',
    slug: 'crescimento-sustentavel-vs-acelerado',
    title: 'Crescimento Sustentavel vs Acelerado: Qual Escolher?',
    excerpt: 'Entenda as diferencas e saiba qual estrategia e mais adequada para seu momento.',
    content: 'Conteudo completo do artigo sobre crescimento...',
    category: 'Crescimento',
    author: 'Equipe Interellos',
    date: '28 de Dezembro de 2024',
    readTime: '7 min'
  },
  {
    id: '5',
    slug: 'inovacao-incremental-radical',
    title: 'Inovacao Incremental ou Radical: Por Onde Comecar?',
    excerpt: 'Estrategias de inovacao para empresas em diferentes estagios de maturidade.',
    content: 'Conteudo completo do artigo sobre inovacao...',
    category: 'Inovacao',
    author: 'Equipe Interellos',
    date: '20 de Dezembro de 2024',
    readTime: '9 min'
  },
  {
    id: '6',
    slug: 'execucao-estrategica-desafios',
    title: 'Os 7 Maiores Desafios da Execucao Estrategica',
    excerpt: 'Por que tantos planos estrategicos falham e como evitar as armadilhas.',
    content: 'Conteudo completo do artigo sobre execucao...',
    category: 'Execucao',
    author: 'Equipe Interellos',
    date: '15 de Dezembro de 2024',
    readTime: '8 min'
  }
];

export const getModalityLabel = (modality: string): string => {
  const labels: Record<string, string> = {
    ead: 'EAD',
    hibrido: 'Hibrido',
    presencial: 'Presencial',
    online: 'Online'
  };
  return labels[modality] || modality;
};

export const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    curso: 'Curso',
    treinamento: 'Treinamento',
    workshop: 'Workshop',
    encontro: 'Encontro',
    imersao: 'Imersao'
  };
  return labels[type] || type;
};
