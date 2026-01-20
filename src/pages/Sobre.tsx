import { Layout } from '@/components/layout/Layout';
import { SocialProof } from '@/components/sections/SocialProof';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users, Award } from 'lucide-react';

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
              Sobre a Interellos
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Ha mais de 20 anos desenvolvendo empreendedores e empresas com metodologias praticas e foco em resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Interellos nasceu da uniao de experiencia academica e pratica corporativa, 
                  com o proposito de democratizar o acesso a conhecimento de gestao de alta qualidade.
                </p>
                <p>
                  Ao longo de duas decadas, formamos mais de 15.000 profissionais e 
                  atuamos em centenas de projetos de consultoria para empresas de todos os portes.
                </p>
                <p>
                  Nossa metodologia e fundamentada na aplicacao pratica: todo conteudo 
                  e desenvolvido para gerar resultados imediatos no dia a dia do empreendedor e gestor.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nossa Missao</h3>
              <p className="text-muted-foreground mb-6">
                Desenvolver empreendedores e empresas por meio de conhecimento aplicado, 
                contribuindo para o crescimento sustentavel dos negocios brasileiros.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nossa Visao</h3>
              <p className="text-muted-foreground">
                Ser referencia nacional em educacao executiva e consultoria para PMEs, 
                reconhecidos pela qualidade e impacto real nos resultados de nossos clientes.
              </p>
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
