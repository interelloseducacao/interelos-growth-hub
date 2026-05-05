import { Layout } from '@/components/layout/Layout';
import { SocialProof } from '@/components/sections/SocialProof';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users, Award, Sparkles, Quote, Compass, Eye } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Tudo o que fazemos e orientado para gerar impacto real no seu negocio.',
  },
  {
    icon: Lightbulb,
    title: 'Pratica Aplicada',
    description: 'Metodologias que voce pode implementar imediatamente.',
  },
  {
    icon: Users,
    title: 'Parceria Genuina',
    description: 'Acompanhamos sua jornada com comprometimento e proximidade.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos a melhor versao de cada projeto e cada aluno.',
  },
];

const team = [
  {
    name: 'Prof. Anderson Claudino',
    role: 'Especialista em Gestão Estratégica',
    bio: 'Especialista em Gestão Estratégica de Negócios e Valuation. Consultor Empresarial e empreendedor em diversas empresas.',
  },
  {
    name: 'Luilson Gomes',
    role: 'Especialista em Negócios Digitais',
    bio: 'Empreendedor com MBA pela FGV em Negócios Digitais. Ampla experiência em M&A, Investidor em Startups e Captação de Recursos.',
  },
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sobre a <span className="text-gradient-brand">Interellos</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Ha mais de 30 anos desenvolvendo empreendedores e empresas com metodologias praticas e foco em resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Our Story */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
        {/* Decorative blurred orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-purple))]/20 blur-3xl" />

        <div className="container-section relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Quem Somos card */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-[hsl(var(--brand-purple))]/40 to-transparent shadow-[0_10px_40px_-12px_hsl(var(--brand-purple)/0.35)]">
              <div className="rounded-2xl bg-card/95 backdrop-blur-sm p-8 md:p-10 h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Nossa História
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Quem Somos</span>
                </h2>
                <div className="space-y-5 text-foreground/85 leading-relaxed text-[15px] md:text-base">
                  <p className="relative pl-5 border-l-2 border-primary/40">
                    A <strong className="text-foreground">Interellos</strong> nasceu da união de experiência acadêmica e prática corporativa, com o propósito de democratizar o acesso a conhecimento de gestão de alta qualidade.
                  </p>
                  <p>
                    Ao longo de três décadas, formamos mais de <strong className="text-foreground">15.000 profissionais</strong> e atuamos em centenas de projetos de consultoria para empresas de todos os portes.
                  </p>
                  <p>
                    Nossa metodologia é fundamentada na <strong className="text-foreground">aplicação prática</strong>: todo conteúdo é desenvolvido para gerar resultados imediatos no dia a dia do empreendedor e do gestor.
                  </p>
                </div>
              </div>
            </div>

            {/* Missão & Visão */}
            <div className="grid grid-rows-2 gap-6">
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 to-[hsl(var(--brand-purple))]/30 shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.4)] transition-transform hover:-translate-y-1">
                <div className="rounded-2xl bg-card p-7 md:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] flex items-center justify-center shadow-[0_0_18px_hsl(var(--brand-purple)/0.5)]">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient-brand mb-2">Nossa Missão</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Desenvolver empreendedores e empresas por meio de conhecimento aplicado, contribuindo para o crescimento sustentável dos negócios brasileiros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[hsl(var(--brand-purple))]/50 to-primary/30 shadow-[0_10px_30px_-12px_hsl(var(--brand-purple)/0.4)] transition-transform hover:-translate-y-1">
                <div className="rounded-2xl bg-card p-7 md:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-purple))] to-primary flex items-center justify-center shadow-[0_0_18px_hsl(var(--brand-purple)/0.5)]">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient-brand mb-2">Nossa Visão</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ser referência nacional em educação executiva e consultoria para PMEs, reconhecidos pela qualidade e impacto real nos resultados de nossos clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Principios que guiam nossa atuacao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground">
              Especialistas com experiencia academica e de mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card-base p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa Metodologia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Desenvolvemos uma abordagem propria que combina o rigor conceitual 
                  da academia com a praticidade exigida pelo mercado.
                </p>
                <p>
                  Cada programa e desenhado para que o participante saia com 
                  ferramentas, frameworks e planos de acao prontos para implementar.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Diagnostico do cenario atual</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Conteudo aplicado e casos reais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Ferramentas prontas para uso</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Acompanhamento pos-programa</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Resultados Comprovados</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-1">92%</div>
                  <p className="text-sm text-primary-foreground/80">de satisfacao dos alunos</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">85%</div>
                  <p className="text-sm text-primary-foreground/80">aplicam em ate 30 dias</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">78%</div>
                  <p className="text-sm text-primary-foreground/80">recomendam para outros</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">4.8</div>
                  <p className="text-sm text-primary-foreground/80">nota media (de 5)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para comecar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conheca nossos cursos ou fale com nossa equipe para uma solucao personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cursos">
              <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                Conhecer Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline">
                Falar com a Interellos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
