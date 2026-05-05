import { Layout } from '@/components/layout/Layout';
import { SocialProof } from '@/components/sections/SocialProof';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users, Award, Sparkles, Quote, Compass, Eye, Linkedin, GraduationCap, Briefcase } from 'lucide-react';
import andersonPhoto from '@/assets/anderson-claudino.png';
import luilsonPhoto from '@/assets/luilson-gomes.jpg';

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
    photo: andersonPhoto,
    icon: GraduationCap,
    tags: ['Gestão Estratégica', 'Valuation', 'M&A'],
  },
  {
    name: 'Luilson Gomes',
    role: 'Especialista em Negócios Digitais',
    bio: 'Empreendedor com MBA pela FGV em Negócios Digitais. Ampla experiência em M&A, Investidor em Startups e Captação de Recursos.',
    photo: luilsonPhoto,
    icon: Briefcase,
    tags: ['Negócios Digitais', 'Startups', 'Captação'],
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
      <section className="section-padding bg-gradient-to-b from-secondary/40 via-background to-secondary/40 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--brand-purple))]/10 blur-3xl" />

        <div className="container-section relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--brand-purple))]/10 text-[hsl(var(--brand-purple))] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              O que nos move
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-brand">Nossos Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Princípios que guiam nossa atuação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-[hsl(var(--brand-purple))]/30 to-transparent shadow-[0_8px_30px_-12px_hsl(var(--brand-purple)/0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-12px_hsl(var(--brand-purple)/0.55)]"
              >
                <div className="rounded-2xl bg-card h-full p-6 flex flex-col">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] shadow-[0_0_20px_hsl(var(--brand-purple)/0.45)]">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gradient-brand mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60 flex items-center text-xs font-semibold text-muted-foreground/70">
                    <span className="font-mono">0{index + 1}</span>
                    <div className="ml-3 h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
        {/* Decorative blurred orbs */}
        <div className="pointer-events-none absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-purple))]/20 blur-3xl" />

        <div className="container-section relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Users className="h-3.5 w-3.5" />
              Quem Lidera
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-brand">Nossa Equipe</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Especialistas com experiência acadêmica e de mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-[hsl(var(--brand-purple))]/40 to-transparent shadow-[0_10px_40px_-12px_hsl(var(--brand-purple)/0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_hsl(var(--brand-purple)/0.5)]"
                >
                  <div className="rounded-2xl bg-card/95 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                    {/* Photo header */}
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-[hsl(var(--brand-purple))]/10">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] flex items-center justify-center shadow-[0_0_20px_hsl(var(--brand-purple)/0.5)]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold mb-4">
                        <span className="text-gradient-brand">{member.role}</span>
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        {member.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
