import { motion } from 'framer-motion';
import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Handshake,
  LineChart,
  MessageSquareText,
  Network,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

type InstitutionalCardsVariant = 'educacao' | 'consultoria' | 'mentoria' | 'cases' | 'conteudos' | 'eventos' | 'contato';

const content = {
  educacao: {
    badge: 'Jornada Educacional',
    title: 'Aprendizado aplicado ao seu negócio',
    subtitle: 'Cada curso combina fundamento acadêmico, ferramentas práticas e acompanhamento para o aluno sair pronto para executar.',
    visualTitle: 'Da teoria ao resultado',
    visualSteps: [BookOpenCheck, ClipboardCheck, LineChart],
    cards: [
      { icon: GraduationCap, title: 'Conteúdo estruturado', description: 'Aulas objetivas, módulos progressivos e materiais de apoio para aplicar no dia a dia.', stat: 'EAD, híbrido e presencial' },
      { icon: BarChart3, title: 'Ferramentas práticas', description: 'Planilhas, frameworks e exercícios conectados aos desafios reais de empreendedores.', stat: 'Aplicação imediata' },
      { icon: Users, title: 'Especialistas de mercado', description: 'Professores com vivência acadêmica e corporativa orientando decisões concretas.', stat: '30+ anos de experiência' },
    ],
  },
  consultoria: {
    badge: 'Projetos sob medida',
    title: 'Consultoria com método e execução',
    subtitle: 'Diagnóstico, proposta e acompanhamento para empresas que precisam transformar decisões estratégicas em resultado financeiro.',
    visualTitle: 'Diagnóstico → Plano → Execução',
    visualSteps: [MessageSquareText, Target, LineChart],
    cards: [
      { icon: Building2, title: 'Visão empresarial', description: 'Leitura de operação, processos, precificação e posicionamento competitivo.', stat: 'PMEs em crescimento' },
      { icon: Target, title: 'Plano de ação', description: 'Priorização do que move margem, receita, governança e escala.', stat: 'Foco em impacto' },
      { icon: Handshake, title: 'Acompanhamento próximo', description: 'Suporte consultivo para implementar decisões com segurança e cadência.', stat: 'Suporte pós-projeto' },
    ],
  },
  mentoria: {
    badge: 'Direção e clareza',
    title: 'Mentoria para decisões mais seguras',
    subtitle: 'Acompanhamento individual, em grupo ou para sócios com foco em direção estratégica, governança e evolução profissional.',
    visualTitle: 'Clareza para avançar',
    visualSteps: [Compass, MessageSquareText, Users],
    cards: [
      { icon: Compass, title: 'Diagnóstico pessoal', description: 'Entendimento do momento, desafios e prioridades do empreendedor ou gestor.', stat: 'Plano personalizado' },
      { icon: BriefcaseBusiness, title: 'Orientação prática', description: 'Conversas estruturadas para transformar dúvidas em decisões acionáveis.', stat: 'Sessões recorrentes' },
      { icon: Network, title: 'Governança e alinhamento', description: 'Apoio para sócios, lideranças e equipes-chave ganharem cadência.', stat: 'Foco em execução' },
    ],
  },
  cases: {
    badge: 'Resultados comprovados',
    title: 'Transformações mensuráveis',
    subtitle: 'Projetos estruturados para melhorar margem, assertividade comercial e tomada de decisão em empresas reais.',
    visualTitle: 'Problema → Método → Resultado',
    visualSteps: [Building2, ClipboardCheck, BarChart3],
    cards: [
      { icon: Target, title: 'Desafio claro', description: 'Mapeamento do problema central antes de propor qualquer intervenção.', stat: 'Diagnóstico objetivo' },
      { icon: ClipboardCheck, title: 'Método aplicado', description: 'Frameworks adaptados à operação, equipe e maturidade da empresa.', stat: 'Plano executável' },
      { icon: LineChart, title: 'Indicadores de evolução', description: 'Acompanhamento de métricas para validar avanço e corrigir rota.', stat: '+28% em margem' },
    ],
  },
  conteudos: {
    badge: 'Conhecimento contínuo',
    title: 'Conteúdos para decisões melhores',
    subtitle: 'Artigos, insights e materiais que conectam gestão, precificação, estratégia e execução empresarial.',
    visualTitle: 'Ler → Aplicar → Medir',
    visualSteps: [BookOpenCheck, Target, BarChart3],
    cards: [
      { icon: BookOpenCheck, title: 'Artigos práticos', description: 'Textos com linguagem direta e exemplos próximos da realidade de PMEs.', stat: 'Gestão e estratégia' },
      { icon: Sparkles, title: 'Insights acionáveis', description: 'Ideias para revisar preços, processos, metas e posicionamento.', stat: 'Aplicação no negócio' },
      { icon: LineChart, title: 'Visão de crescimento', description: 'Conteúdos orientados a margem, receita e sustentabilidade.', stat: 'Decisão com dados' },
    ],
  },
  eventos: {
    badge: 'Experiências ao vivo',
    title: 'Encontros para aprender e conectar',
    subtitle: 'Workshops, imersões e eventos que aproximam empreendedores, gestores e especialistas.',
    visualTitle: 'Conteúdo + prática + networking',
    visualSteps: [CalendarCheck, Users, Handshake],
    cards: [
      { icon: CalendarCheck, title: 'Agenda prática', description: 'Temas escolhidos por relevância para o momento do mercado.', stat: 'Online e presencial' },
      { icon: Users, title: 'Troca qualificada', description: 'Ambiente para networking e compartilhamento de experiências reais.', stat: 'Comunidade empresarial' },
      { icon: Target, title: 'Aplicação imediata', description: 'Dinâmicas e frameworks para sair do evento com próximos passos.', stat: 'Plano de ação' },
    ],
  },
  contato: {
    badge: 'Atendimento consultivo',
    title: 'O próximo passo começa por uma boa conversa',
    subtitle: 'Direcionamos sua demanda para cursos, mentorias ou consultoria conforme o momento do seu negócio.',
    visualTitle: 'Conversa → Direcionamento → Solução',
    visualSteps: [MessageSquareText, Compass, Target],
    cards: [
      { icon: MessageSquareText, title: 'Escuta inicial', description: 'Entendemos sua demanda antes de indicar qualquer solução.', stat: 'Resposta consultiva' },
      { icon: Compass, title: 'Direcionamento correto', description: 'Indicamos o caminho mais adequado para pessoa física, equipe ou empresa.', stat: 'B2B e B2C' },
      { icon: Handshake, title: 'Relacionamento próximo', description: 'Atendimento humano para construir a melhor proposta de valor.', stat: 'Lapa, SP' },
    ],
  },
} satisfies Record<InstitutionalCardsVariant, {
  badge: string;
  title: string;
  subtitle: string;
  visualTitle: string;
  visualSteps: React.ElementType[];
  cards: { icon: React.ElementType; title: string; description: string; stat: string }[];
}>;

interface InstitutionalCardsProps {
  variant?: InstitutionalCardsVariant;
}

export function InstitutionalCards({ variant = 'educacao' }: InstitutionalCardsProps) {
  const section = content[variant];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="container-section relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              {section.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-brand">{section.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {section.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-lg p-[1px] bg-gradient-to-br from-primary/45 via-brand-purple/35 to-border shadow-[0_18px_45px_-20px_hsl(var(--brand-purple)/0.5)]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="rounded-lg bg-card/95 p-6 md:p-8 overflow-hidden relative">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p className="text-sm font-semibold text-muted-foreground mb-6">{section.visualTitle}</p>
              <div className="grid grid-cols-3 gap-3 md:gap-5 items-center">
                {section.visualSteps.map((Icon, index) => (
                  <div key={index} className="relative">
                    {index < section.visualSteps.length - 1 && (
                      <div className="absolute top-1/2 left-[70%] w-[60%] h-px bg-gradient-to-r from-primary/50 to-brand-purple/50" />
                    )}
                    <div className="relative aspect-square rounded-lg bg-gradient-to-br from-primary/15 to-brand-purple/10 border border-border flex items-center justify-center shadow-card">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {section.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-brand-purple/15 border border-primary/15 group-hover:border-primary/35 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{card.description}</p>
                <div className="pt-4 border-t border-border/70 text-xs font-semibold text-primary">
                  {card.stat}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}